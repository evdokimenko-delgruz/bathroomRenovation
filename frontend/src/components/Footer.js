import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

// Данные из Контакты.txt
const address = 'г. Москва, ул. Молодежная, 11, к. 15';
const phone = '(912) 00-55-000';
const email = 'mastervann@mail.ru';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section about-us">
                    <h3>О нас</h3>
                    <p>Наша компания специализируется на создании стильных и функциональных ванных комнат.</p>
                    <Link to="/about" className="footer-link">Подробнее</Link>
                </div>
                <div className="footer-section quick-links">
                    <h3>Быстрые ссылки</h3>
                    <ul>
                        <li><Link to="/" className="footer-link">Главная</Link></li>
                        <li><Link to="/services" className="footer-link">Услуги</Link></li>
                        <li><Link to="/gallery" className="footer-link">Галерея</Link></li>
                        <li><Link to="/blog" className="footer-link">Блог</Link></li>
                        <li><Link to="/contacts" className="footer-link">Контакты</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact-info">
                    <h3>Контакты</h3>
                    <p>Адрес: {address}</p>
                    <p>Телефон: <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                </div>
                <div className="footer-section social-media">
                    <h3>Мы в соцсетях</h3>
                    <div className="social-icons">
                        {/* Здесь можно добавить иконки соцсетей, например, Font Awesome */}
                        {/* <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-vk"></i></a> */}
                        {/* Для простоты оставим заглушки или уберем, если не используются Font Awesome */}
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">Inst</a>
                        <a href="#" className="social-icon">VK</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ремонт Ванных Комнат. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;