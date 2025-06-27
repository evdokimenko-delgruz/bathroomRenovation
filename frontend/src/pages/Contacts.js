import React, { useState } from 'react';
import '../index.css';

// Данные из Контакты.txt
const contactsInfo = {
    address: 'г. Москва, ул. Молодежная, 11, к. 15',
    phone: '(912) 00-55-000',
    email: 'mastervann@mail.ru'
};

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Здесь будет логика отправки данных на бэкенд
        console.log('Form submitted:', formData);
        alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Очистить форму
    };

    return (
        <div className="contacts-page section-padding">
            <div className="container">
                <h1>Наши Контакты</h1>

                <section className="contact-details">
                    <p><strong>Адрес:</strong> {contactsInfo.address}</p>
                    <p><strong>Телефон:</strong> <a href={`tel:${contactsInfo.phone.replace(/\s/g, '')}`}>{contactsInfo.phone}</a></p>
                    <p><strong>Email:</strong> <a href={`mailto:${contactsInfo.email}`}>{contactsInfo.email}</a></p>
                </section>

                <section className="contact-form-section">
                    <h2>Напишите нам</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Ваше имя:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Ваш Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Ваш телефон (необязательно):</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Сообщение:</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Отправить сообщение</button>
                    </form>
                </section>

                <section className="map-section">
                    <h2>Мы на карте</h2>
                    {/* Пример iframe для Яндекс.Карт. Замените на реальный, если есть. */}
                    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%' }}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed4a5c0b9a8b1a8d0f1e8f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c&source=constructor"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            title="Карта"
                        ></iframe>
                    </div>
                    <p className="map-note">
                        Вы можете найти нас на Яндекс.Картах по адресу: {contactsInfo.address}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Contacts;