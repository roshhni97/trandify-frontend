"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/right-arrow.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import useSWRMutation from "swr/mutation";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericMutationFetcher } from "@/utils/helpers/swr.helper";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { trigger: sendToken } = useSWRMutation(API_CONSTANTS.LOGIN, genericMutationFetcher);

  const isHome = pathname === "/";

  const notHomeStyles = {
    backgroundColor: "var(--background)",
    color: "var(--white)",
    boxShadow: "var(--shadow)",
    marginTop: "-2.5rem",
    marginLeft: "calc(max(1rem, calc(50vw - 45rem))",
    borderBottom: "2px solid var(--primary)",
    borderOpacity: 0.3,
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log(tokenResponse);
        const { data } = await sendToken({
          type: 'post',
          rest: [
            {
              code: tokenResponse.code,
            }
          ],
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      // router.push("/dashboard");
    },
    onError(errorResponse) {
      console.log(errorResponse);
    },
    flow: "auth-code"
  });

  return (
    <nav className="py-4">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer">
            <Logo />
            <div className="text-2xl font-bold uppercase">Trandify</div>
          </div>
        </Link>
        <Button className="uppercase gap-2" onClick={() => login()}>
          Login
          <RightArrow />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
