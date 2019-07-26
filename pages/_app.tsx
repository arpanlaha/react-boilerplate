import React, { ErrorInfo } from "react";
import App, { Container, AppContext, AppInitialProps } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initializeStore } from "../redux/store";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";
import { Store } from "redux";

interface PropsWithRedux extends AppInitialProps {
  store: Store;
}

export default withRedux(initializeStore as any)(
  class MyApp extends App<PropsWithRedux> {
    static async getInitialProps({
      Component,
      ctx
    }: AppContext): Promise<AppInitialProps> {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      console.error("Page Error Boundary: ", error);
      super.componentDidCatch(error, errorInfo);
    }

    render(): JSX.Element {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </Provider>
        </Container>
      );
    }
  }
);
