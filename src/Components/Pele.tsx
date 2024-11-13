import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/entstyle.module.css';

const Pele: React.FC = () => {
  return (
    <div>
      <section className={styles.header}>
        <img src="../assets/menu-icon.png" className={styles.menuIcon} alt="Menu" />

        <div className={styles.navbarContainer}>
          <ul className={styles.navbar}>
            <li><Link to="/" className={styles.navbarLink}>Skincare</Link></li>
            <li><Link to="/pele" className={styles.navbarLink}>Pele</Link></li>
            <li><Link to="/olhos" className={styles.navbarLink}>Olhos</Link></li>
            <li><Link to="/boca" className={styles.navbarLink}>Boca</Link></li>
            <li><Link to="/dicas" className={styles.navbarLink}>Dicas</Link></li>
          </ul>
        </div>

        <Link to="/" className={styles.logoContainer}>
          <img src="../assets/logo2.png" className={styles.logo} alt="Logo Bem me quer" />
        </Link>

        <div className={styles.navbarContainer}>
          <form className={styles.searchForm} action="#" method="get">
            <input type="text" className={styles.searchInput} placeholder="Pesquisar..." />
          </form>
          <div className={styles.iconContainer}>
            <Link to="/login"><img src="../assets/user.png" alt="Login" /></Link>
            <Link to="/cart"><img src="../assets/cart.png" alt="Carrinho de Compras" /></Link>
          </div>
        </div>
      </section>

      <div className={styles.sectionTitle}>
        <h2>Produtos para Pele</h2>
      </div>

      <section className={styles.productsSection}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div className={styles.productCard} key={item}>
            <img src={`../assets/product${item}.png`} className={styles.productCardImg} alt={`Produto ${item}`} />
            <h3 className={styles.productCardTitle}>Produto {item}</h3>
            <p className={styles.productCardPrice}>R$ {10 * item},00</p>
            <button className={styles.buyButton}>Comprar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pele;
