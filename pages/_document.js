import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <meta name="theme-color" content="#C00000" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="keywords" content="" />
          <meta name="description" content="" />

          <meta
            name="copyright"
            content="Copyright (c) 2021, Ekkko Systems. All Rights Reserved."
          />
          <meta name="author" content="" />
          <meta name="publisher" content="Ekkko Systems" />
          <meta name="generator" content="v3.0.0" />

          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!Object.entries){
                  Object.entries = function( obj ){
                    var ownProps = Object.keys( obj ),
                        i = ownProps.length,
                        resArray = new Array(i); // preallocate the Array
                    while (i--)
                      resArray[i] = [ownProps[i], obj[ownProps[i]]];
                
                    return resArray;
                  }
                }`,
            }}
          />
          {process.env.NODE_ENV === "production" ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                                if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
                                    for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
                                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? () => { } : null;
                                    }
                                }
                            `,
              }}
            />
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
