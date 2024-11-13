import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  // Estado para controlar a visibilidade da navbar em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      {/* Seção do cabeçalho */}
      <section className={styles.header}>
        {/* Ícone do menu hambúrguer para dispositivos móveis */}
        <img
          src="/assets/menu-icon.png"
          className={styles.menuIcon}
          alt="Menu"
          onClick={toggleMenu}
        />

        {/* Navbar - visível apenas em dispositivos maiores ou quando o menu está aberto */}
        <div className={`${styles.navbarContainer} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navbar}>
            <li><Link to="/skincare" className={styles.navbarLink}>Skincare</Link></li>
            <li><Link to="/pele" className={styles.navbarLink}>Pele</Link></li>
            <li><Link to="/olhos" className={styles.navbarLink}>Olhos</Link></li>
            <li><Link to="/boca" className={styles.navbarLink}>Boca</Link></li>
            <li><Link to="/dicas" className={styles.navbarLink}>Dicas</Link></li>
          </ul>
        </div>

        <Link to="/" className={styles.logoContainer}>
          <img src="/assets/logo2.png" className={styles.logo} alt="Logo Bem me quer" />
        </Link>

        <div className={styles.navbarContainer}>
          <form className={styles.searchForm} action="#" method="get">
            <input type="text" className={styles.searchInput} placeholder="Pesquisar..." />
          </form>
          <div className={styles.iconContainer}>
            <Link to="/login"><img src="/assets/user.png" alt="Login" className={styles.icon} /></Link>
            <Link to="/cart"><img src="/assets/cart.png" alt="Carrinho de Compras" className={styles.icon} /></Link>
          </div>
        </div>
      </section>

      {/* Seção promocional */}
      <section className={`${styles.promoSection} ${styles.backgroundImage}`}>
        <div className={styles.promoContent}>
          <h1 className={styles.promoTitle}>Melu</h1>
          <div className={styles.promoCopy}>
            <p><b>Cuidados diários da pele.</b></p>
            <div className={styles.promoLinkGroup}>
              <Link to="/product1" className={styles.promoLink}>Ver mais</Link>
              <Link to="/product1" className={styles.promoLink}>Melu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de produtos */}
      <section className={styles.productsSection}>
        <div className={styles.productCard}>
          <Link to="/product1">
            <img src="/assets/product1.png" alt="Produto 1" />
          </Link>
          <h3>Gloss Labial</h3>
          <p>R$ 10,00</p>
          <button className={styles.buyButton}>Comprar</button>
        </div>
        <div className={styles.productCard}>
          <img src="/assets/product2.png" alt="Produto 2" />
          <h3>Produto 2</h3>
          <p>R$ 60,00</p>
          <button className={styles.buyButton}>Comprar</button>
        </div>
        <div className={styles.productCard}>
          <img src="/assets/product3.png" alt="Produto 3" />
          <h3>Produto 3</h3>
          <p>R$ 70,00</p>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
