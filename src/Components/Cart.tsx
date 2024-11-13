import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/cart.module.css';

const Cart: React.FC = () => {
  return (
    <div className="container"> {/* Adiciona a classe container para centralizar */}
      <section className={styles.header}>
        <div className={styles.navbarContainer}>
          <Link to="/"><img src="/assets/back.png" alt="Voltar" className={styles.icon} /></Link>
          <Link to="/" className={styles.logoContainer}><img src="/assets/logo2.png" className={styles.logo} alt="Logo Bem me quer" /></Link>
        </div>
      </section>

      <div className={styles.cartContainer}>
        <h2>Seu Carrinho</h2>
        <div className={styles.cartItem}>
          <img src="/assets/product1.png" alt="Produto 1" className={styles.productImage} />
          <div className={styles.itemDetails}>
            <h3>Produto 1</h3>
            <p>Quantidade: <input type="number" defaultValue={1} min={1} className={styles.quantityInput} /></p>
            <p>Preço: R$ 50,00</p>
          </div>
          <button className={styles.removeButton}>Remover</button>
        </div>
        <div className={styles.total}>
          <h3>Total: R$ 50,00</h3>
          <button className={styles.promoLink}>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
