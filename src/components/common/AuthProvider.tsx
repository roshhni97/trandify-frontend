"use client";

import { useUser } from "@/hooks/user.swr";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const publicPaths = ["/"];
const publicHomePath = "/";
const privateHomePath = "/dashboard";
const privatePaths = [privateHomePath, "/watcher"];

const AuthProvider = ({ children } : {
    children: React.ReactNode;
  }) => {
    const { userData, errorFetchingUserData, isUserDataLoading } = useUser();
    const router = useRouter();
    const pathname = usePathname();

  
    useEffect(() => {
      if (!isUserDataLoading) {
        if (errorFetchingUserData || !userData) {
          // Redirect to public home if user is not logged in and trying to access private paths
          if (!publicPaths.includes(pathname)) {
            router.push(publicHomePath);
          }
        } else {
          // Redirect to private home if user is logged in and trying to access public paths
          if (!pathname.startsWith(privatePaths[0]) && !privatePaths.includes(pathname) ) {
            router.push(privateHomePath);
          }
        }
      }
    }, [userData, isUserDataLoading, errorFetchingUserData, router, pathname]);

    return <>{children}</>;
}

export default AuthProvider;