import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";
import { Popover, UiThemeProvider, defaultTheme } from "@test/ui";
import React from "react";

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["translations"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function Home() {
  const ref = React.useRef(null);
  return (
    <UiThemeProvider theme={defaultTheme}>
      <Popover targetRef={ref}>
        <div>
          <p>Whoa! Look at me!</p>
        </div>
      </Popover>
    </UiThemeProvider>
  );
}

export default Home;
