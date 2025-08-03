// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { locale } = ctx;
    return { ...initialProps, locale };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="icon" href="/assets/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://unpkg.com/sal.js/dist/sal.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/a36a5c49be.js"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// // pages/_document.js
// import { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from "next/router";

// export default function Document() {
//   const {locale} = useRouter();

//   return (
//     <Html lang={locale}>
//       <Head>
//         {/* Favicon */}
//         <link rel="icon" href="/assets/favicon.ico" />

//         {/* Google Fonts (مثال) */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
//           rel="stylesheet"
//         />

//         {/* sal.js CSS */}
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/sal.js/dist/sal.css"
//         />

//         <link
//     href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap"
//     rel="stylesheet"
//   />

//       </Head>

//       <body>
//         <Main />
//         <NextScript />

//       </body>
//     </Html>
//   );
// }
