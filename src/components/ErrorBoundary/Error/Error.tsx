import * as S from "./styles";
import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type ErrorProps = {
  // eslint-disable-next-line no-unused-vars
  setHasError: (hasError: boolean) => void;
};

export const Error: React.FC<ErrorProps> = ({ setHasError }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const refreshPage = useCallback(() => {
    setHasError(false);
    router.reload();
  }, [router, setHasError]);

  return (
    <S.Container>
      <h1>{t("error_message")}</h1>
      <S.Button type="button" onClick={refreshPage}>
        {t("try_again_question")}
      </S.Button>
    </S.Container>
  );
};
