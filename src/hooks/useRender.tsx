"use client";

import { useEffect, useState } from "react";

function useRender(pathname: string) {
  const [isSignInPage, setIsSignInPage] = useState(false);
  console.log(isSignInPage);

  useEffect(() => {
    setIsSignInPage(pathname === "/signin" ? false : true);
  }, [pathname]);

  return isSignInPage;
}

export default useRender;
