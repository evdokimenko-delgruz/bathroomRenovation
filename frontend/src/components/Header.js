import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/images/logo.png'; // Убедитесь, что logo.png существует

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Логотип компании" className="logo-img" />
                    <span className="logo-text">Ремонт Ванных Комнат</span>
                </Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/calculator">Калькулятор</Link></li>
                        <li><Link to="/gallery">Галерея</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;