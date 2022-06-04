import React, { useCallback } from "react";
import { useRouter } from "next/router";

type ErrorProps = {
  // eslint-disable-next-line no-unused-vars
  setHasError: (hasError: boolean) => void;
};

export const Error: React.FC<ErrorProps> = ({ setHasError }) => {
  const router = useRouter();

  const refreshPage = useCallback(() => {
    setHasError(false);
    router.reload();
  }, [router, setHasError]);

  return (
    <div>
      <h2>Oops, there is an error!</h2>
      <button type="button" onClick={refreshPage}>
        Try again?
      </button>
    </div>
  );
};
