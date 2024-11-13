import React from 'react';
import '../styles/p.module.css';

const Product1: React.FC = () => {
  return (
    <div>
      <section id="header">
        <img src="../assets/menu-icon.png" className="menu-icon" alt="Menu" />
        
        <div className="navbar-container">
          <ul id="navbar">
            <li><a href="skincare.html">Skincare</a></li>
            <li><a href="Pele.tsx">Pele</a></li>
            <li><a href="olhos.html">Olhos</a></li>
            <li><a href="boca.html">Boca</a></li>
            <li><a href="dicas.html">Dicas</a></li>
          </ul>
        </div>
        <a href="../index.html" className="logo-container">
          <img src="../assets/logo2.png" className="logo" alt="Logo Bem me quer" />
        </a>
        <div className="navbar-container">
          <form className="search-form" action="#" method="get">
            <input type="text" className="search-input" placeholder="Pesquisar..." />
          </form>
          <div className="icon-container">
            <a href="login.html"><img src="../assets/user.png" alt="Login" /></a>
            <a href="cart.html"><img src="../assets/cart.png" alt="Carrinho de Compras" /></a>
          </div>
        </div> 
      </section>

      <section className="product-section">
        <div className="product-image">
          <img src="../assets/product1.png" alt="Produto" />
        </div>
        <div className="product-details">
          <h1>Gloss Labial</h1>
          <p>R$ 10,00</p>
          <p>Descrição do produto. Este gloss labial proporciona um brilho intenso e hidratação duradoura para os lábios.</p>
          <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
      </section>
    </div>
  );
};

export default Product1;
