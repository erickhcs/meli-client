import { GlobalStyle, theme } from "components/GlobalStyles";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { ErrorBoundary } from "components/ErrorBoundary";
import { Loader } from "components/Loader";
import { Page } from "components/Page";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setIsLoading(true);
    };
    const endLoading = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <ErrorBoundary>
            {isLoading ? <Loader /> : <Component {...pageProps} />}
          </ErrorBoundary>
        </Page>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
