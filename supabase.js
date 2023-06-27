import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwqswqdttjfxqwqbmyfw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3cXN3cWR0dGpmeHF3cWJteWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzNjgwNTAsImV4cCI6MjAwMDk0NDA1MH0.-5Pvh6FXcNXtM4XWjoQdXefiDkddKiibBCssgZ8Vg3s";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
