import React from "react";

import SignupProvider from "@/components/sigin-up/SignupProvider";

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <SignupProvider>{children}</SignupProvider>
    </div>
  );
}

export default SignUpLayout;
