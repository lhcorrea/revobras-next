import 'tailwindcss/tailwind.css'
import 'semantic-ui-css/semantic.min.css'
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "/node_modules/primeflex/primeflex.css";                                //icons

import { useEffect } from "react";
import Link from "next/link";
import Head from 'next/head'
import './styles/globals.css';
import styles from "./styles/App.module.css";
import NavBar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App layout mounted");
    return () => console.log("App layout unmounted");
  }, []);
  return (

    <div className={styles.main}>
        <Head>
             <title>Revoluciona Brasil</title>
        </Head>

        <header>
            <NavBar/>
        </header>
        <section>
            <Layout Component={Component} pageProps={pageProps} />
        </section>
      <footer>RODAPÉ</footer>
    </div>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
