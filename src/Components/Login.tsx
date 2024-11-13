import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/log.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Seção do cabeçalho */}
      <section className={styles.header}>
        <div className={styles.navbarContainer}>
          <Link to="/">
            <img src="../assets/back.png" alt="Voltar" className={styles.icon} />
          </Link>
          <Link to="/" className={styles.logoContainer}>
            <img src="../assets/logo2.png" className={styles.logo} alt="Logo Bem me quer" />
          </Link>
        </div>
      </section>

      {/* Seção de login */}
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Consultar Pedidos</h2>
          <form action="consultar_pedidos.html" method="get">
            <input type="tel" name="phone" placeholder="Número de Telefone" required />
            <button type="submit" className={styles.promoLink}>Consultar</button>
          </form>
          <Link to="/AdminLog" className={styles.adminLink}>Acesso Administrativo</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
