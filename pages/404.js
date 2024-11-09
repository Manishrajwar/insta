import Link from "next/link";
import React from "react";
import style from "./css/404.module.scss";
import Head from "next/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";

export default function NotFound() {
  return (
    <div className="container">
      <Head>
          <title>We've lost this page</title>
          <meta name="description" content="Sorry, the page you are looking for doesn't exist or has been moved."></meta>
      </Head>
      <div className={style.page_404}>
        <div className={style.icon_404}>
            <span className={style.round}></span>
            <span className={style.blur}></span>
        </div>
        <div className={style.content}>
          <span className={style.error_show}>404 error</span>
          <h1>We've lost this page</h1>
          <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <Link className={style.buttonGoHome} href={'/'}>
            Go to Home
          </Link> 
        </div>
      </div>    
    </div>
  );
}

export async function getStaticProps(context) {
  const globalSettings = await GlobalHeaderFooter();
    return {
      props: {
        page_content: null,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer
      }
  };
}
