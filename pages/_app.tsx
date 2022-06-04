import type { AppProps } from "next/app";
import { ErrorBoundary } from "components/ErrorBoundary";
import { GlobalStyle } from "components/GlobalStyles";
import { Page } from "components/Page";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Page>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Page>
    </>
  );
}

export default appWithTranslation(MyApp);
