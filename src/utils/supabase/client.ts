import { createClient } from "@supabase/supabase-js";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const supabase = createClient(
  publicRuntimeConfig.NEXT_PUBLIC_SUPABASE_URL,
  publicRuntimeConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
