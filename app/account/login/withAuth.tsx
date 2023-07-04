import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/supabase";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const session = supabase.auth
        .getSession()
        .then(({ error, data }: any) => {
          debugger;
          if (data.session) {
            router.push("/dashboard/dashboard-main"); // Redirect to login page if not logged in
          } else {
            router.push("/account/login"); // Redirect to create account if not logged in
          }
        });
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
