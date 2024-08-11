import { NextApiHandler } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

const handler: NextApiHandler = async (req, res) => {
  const { code } = req.query;

  if (code) {
    const supabase = createPagesServerClient({ req, res });
    await supabase.auth.exchangeCodeForSession(String(code));

    // get current user
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const userMetadata = user?.user_metadata;

    // update profile
    if (userMetadata) {
      try {
        await supabase
          .from("profile")
          .upsert({
            id: user.id,
            email: userMetadata.email,
            name: userMetadata.name,
            picture: userMetadata.picture || userMetadata.avatar_url,
          })
          .select();
      } catch (err) {
        console.log(err);
        //
      }
    }
  }

  res.redirect("/");
};

export default handler;
