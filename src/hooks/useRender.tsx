"use client";

import { useEffect, useState } from "react";

function useRender(pathname: string) {
  const [isSignInPage, setIsSignInPage] = useState(false);

  useEffect(() => {
    setIsSignInPage(pathname === "/signin" ? false : true);
  }, [pathname]);

  return isSignInPage;
}

export default useRender;
