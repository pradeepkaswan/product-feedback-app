import { useEffect } from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Link, useRouter } from "@tanstack/react-router";

import { Callout } from "@/components/ui/callout";

import { Button } from "./ui/button";

export function ErrorComponent({ error }: { error: Error }) {
  const router = useRouter();

  const queryClientErrorBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    queryClientErrorBoundary.reset();
  }, [queryClientErrorBoundary]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Callout variant="error">Oops! Something went wrong </Callout>
      </div>
      <div className="mt-4 space-y-4">
        <Button
          onClick={() => {
            router.invalidate();
          }}
        >
          Try again
        </Button>
        <Link viewTransition to="/">
          <Button>Return to homepage</Button>
        </Link>
      </div>
    </div>
  );
}
