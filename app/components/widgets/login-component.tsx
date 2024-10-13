import { SignInButton, SignedIn, SignedOut } from "@clerk/remix";
import React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/lib/icons";

type LoginComponentProps = {};

const LoginComponent: React.FC<LoginComponentProps> = ({}) => {
  return (
    <React.Fragment>
      <SignedOut>
        <SignInButton>
          <Button size={"sm"} variant={"secondary"}>
            <Icons.login className="mr-2 h-4 w-4" />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size={"sm"} variant={"destructive"}>
          <Icons.logout className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </SignedIn>
    </React.Fragment>
  );
};

export default LoginComponent;
