"use client";

import { useUser } from "@/hooks/user.swr";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const publicPaths = ["/"];
const publicHomePath = "/";
const privateHomePath = "/dashboard";

const AuthProvider = ({ children } : {
    children: React.ReactNode;
  }) => {
    const { userData, errorFetchingUserData, isUserDataLoading } = useUser();
    const router = useRouter();
    const pathname = usePathname();

  
    useEffect(() => {
      if (!isUserDataLoading) {
        if (errorFetchingUserData || !userData) {
          if (!publicPaths.includes(pathname)) {
            router.push(publicHomePath);
          }
        } else {
          if (!pathname.startsWith(privateHomePath)) {
            router.push(privateHomePath);
          }
        }
      }
    }, [userData, isUserDataLoading, errorFetchingUserData, router, pathname]);

    return <>{children}</>;
}

export default AuthProvider;