"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

function useRender() {
  const pathname = usePathname();
  const [isSignInPage, setIsSignInPage] = useState(false);

  useEffect(() => {
    setIsSignInPage(pathname === "/signin" ? false : true);
  }, [pathname]);

  return isSignInPage;
}

export default useRender;
