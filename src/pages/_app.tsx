import React, { ErrorInfo } from "react";
import App, { Container, NextAppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../redux/configureStore";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";

export default withRedux(configureStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }: NextAppContext) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error("Page Error Boundary: ", error);
      // @ts-ignore This is needed to render errors correctly in development / production
      super.componentDidCatch(error, errorInfo);
    }

    render() {
      // @ts-ignore
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