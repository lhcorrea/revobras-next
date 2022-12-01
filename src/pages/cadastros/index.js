import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import {  Image } from 'semantic-ui-react'

const CadastrosPage = () => {
  return <div >
 <Image className="left-40 max-w-[100%] max-h-screen"
  rounded src='/img/cadastro.png'/>
</div>;
};

export const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamsPageLayout mounted");
    return () => console.log("TeamsPageLayout unmounted");
  }, []);

  return (
    <div className={styles.teams}>
      <div className={styles.sidebar}>
        <h2>Cadastros</h2>
        <ul>
          <li className={styles.opcao}>
            <Link href="/cadastros/ProjetoSocial">
                <div className={styles.card} >
                    <Image
                        floated='left' width="55" bordered
                        rounded src='/img/ps.png'/>
                    <h2>Projeto Social</h2>
                </div>
            </Link>
          </li>
          <li className={styles.grid}>
            <Link href="/cadastros/Aluno">
                <div className={styles.card} >
                    <Image
                        floated='left' width="45" bordered
                        rounded src='/img/aluno.png'/>
                    <h2>Aluno</h2>
                </div>
            </Link>
          </li>

          <li className={styles.grid}>
            <Link href="/cadastros/Investidor">
                <div className={styles.card} >
                    <Image
                        floated='left' width="35" bordered
                        rounded src='/img/investidor.png'/>
                    <h2>Investidor</h2>
                </div>
            </Link>
          </li>

          <li className={styles.grid}>
            <Link href="/cadastros/Voluntario">
                <div className={styles.card} >
                    <Image
                        floated='left' width="45" bordered
                        rounded src='/img/voluntario.png'/>
                    <h2>Voluntário</h2>
                </div>
            </Link>
          </li>

          <li className={styles.grid}>
            <Link href="/cadastros/Professor">
                <div className={styles.card} >
                    <Image
                        floated='left' width="45" bordered
                        rounded src='/img/professora.png'/>
                    <h2>Professor</h2>
                </div>
            </Link>
          </li>
        </ul>
       </div>
      {children}
    </div>
  );
};

export const CadastrosPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

CadastrosPage.getLayout = CadastrosPageLayout;

export default CadastrosPage;
