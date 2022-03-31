import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { APPLICATION_CSS_LINKS } from '../views/config/styles';

export default function Document() {
  return (
    <Html>
      <Head>
        {APPLICATION_CSS_LINKS.map((style) => (
          <link key={style} href={style} rel="preload stylesheet" as="style" />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
