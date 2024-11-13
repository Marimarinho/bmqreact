import React, { useState } from 'react';
import '../styles/log.module.css';

const AdminLog: React.FC = () => {
  // Estado para exibir a mensagem de erro de login
  const [loginMessageVisible, setLoginMessageVisible] = useState(false);

  // Função para manipular o envio do formulário
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const username = (event.currentTarget as HTMLFormElement).username.value;
    const password = (event.currentTarget as HTMLFormElement).password.value;

    // Exemplo simples de verificação (substitua pela lógica de autenticação real)
    if (username === 'admin' && password === '1234') {
      alert('Login bem-sucedido!');
      setLoginMessageVisible(false);
    } else {
      setLoginMessageVisible(true);
    }
  };

  return (
    <div>
      <section id="header">
        <div className="navbar-container">
          <a href="../index.html">
            <img src="../midia/back.png" alt="Voltar" className="icon" />
          </a>
          <a href="../index.html" className="logo-container">
            <img src="../midia/logo2.png" className="logo" alt="Logo Bem me quer" />
          </a>
        </div>
      </section>

      <div className="login-container">
        <div className="login-box">
          <h2>Login Administrativo</h2>
          <form id="loginForm" onSubmit={handleLogin}>
            <input type="text" id="username" name="username" placeholder="Usuário" required />
            <input type="password" id="password" name="password" placeholder="Senha" required />
            <button type="submit" className="promo-link">Login</button>
          </form>
          {loginMessageVisible && (
            <p id="loginMessage" style={{ color: 'red' }}>Usuário ou senha incorretos!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLog;
