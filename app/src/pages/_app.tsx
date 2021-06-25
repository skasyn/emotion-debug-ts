import React from "react";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { UiThemeProviderWithDefaultTheme } from "@test/ui";
import { AppProps } from "next/app";
import "@test/ui/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <UiThemeProviderWithDefaultTheme>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </UiThemeProviderWithDefaultTheme>
  );
}

export default appWithTranslation(MyApp);
