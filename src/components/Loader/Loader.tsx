import * as S from "./styles";
import { useTranslation } from "next-i18next";

export const Loader = () => {
  const { t } = useTranslation("common");

  return (
    <S.Container>
      <S.Loader />
      {t("loading_text")}
    </S.Container>
  );
};
