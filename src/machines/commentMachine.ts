import { setup, fromPromise, assign } from "xstate";
import { supabase } from "~/utils/supabase/client";

type RawComment = {
  id: string;
  profile: {
    name: string;
    picture: string;
  };
  message: string;
};

type Comment = {
  id: string;
  user: {
    name: string;
    picture: string;
  };
  message: string;
};

export const commentMachine = setup({
  types: {
    context: {} as {
      productId: number | undefined;
      comments: Comment[];
    },
    events: {} as {
      type: "FETCH";
      productId: number;
    },
  },
  actors: {
    fetchComments: fromPromise(
      async ({ input }: { input: { productId: number } }) => {
        const result = await supabase
          .from("product_comment")
          .select<any, RawComment>("id, profile(*), message")
          .eq("product_id", input.productId);
        return (
          result.data?.map((comment) => ({
            id: comment.id,
            user: {
              name: comment.profile.name,
              picture: comment.profile.picture,
            },
            message: comment.message,
          })) ?? []
        );
      }
    ),
  },
}).createMachine({
  context: {
    productId: undefined,
    comments: [],
  },
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: {
          target: "loading",
          actions: assign({
            productId: ({ event }) => event.productId,
          }),
        },
      },
    },
    loading: {
      invoke: {
        src: "fetchComments",
        input: ({ context }) => ({ productId: context.productId! }),
        onDone: {
          target: "success",
          actions: assign({
            comments: ({ event }) => event.output,
          }),
        },
        onError: "failure",
      },
    },
    success: {},
    failure: {},
  },
});
