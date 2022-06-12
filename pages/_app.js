// pages/_app.js
import React, { useEffect, useState } from "react";
import App from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { extend } from "next-compose-plugins";
// import { useRouter } from "next/router";

const TApp = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [useTemplates, setUseTemplates] = useState(true);
  useEffect(() => {
    if (router.pathname.toLocaleLowerCase() === "/login") {
      setUseTemplates(false);
    } else {
      setUseTemplates(true);
    }
  }, [router]);

  return (
    <>
      {useTemplates ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default TApp;
