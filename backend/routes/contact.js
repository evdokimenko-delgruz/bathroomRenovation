const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
// const nodemailer = require('nodemailer'); // Если хотите отправлять почту

// @route   POST /api/contact
// @desc    Отправить сообщение из контактной формы
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Простая валидация
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newContactMessage = new ContactMessage({
            name,
            email,
            message
        });

        await newContactMessage.save();

        // --- Опционально: Отправка email-уведомления ---
        /*
        const transporter = nodemailer.createTransport({
          // Настройки вашего SMTP-сервера или сервиса (например, Gmail, SendGrid)
          service: 'gmail', // Или 'SendGrid', 'Mailgun'
          auth: {
            user: process.env.ADMIN_EMAIL, // Ваша почта для отправки
            pass: 'YOUR_EMAIL_PASSWORD_OR_APP_PASSWORD' // Или API ключ
          }
        });

        const mailOptions = {
          from: process.env.ADMIN_EMAIL,
          to: process.env.ADMIN_EMAIL, // Куда отправлять уведомление
          subject: `Новое сообщение с сайта от ${name}`,
          html: `<p>Имя: ${name}</p><p>Email: ${email}</p><p>Сообщение: ${message}</p>`
        };

        await transporter.sendMail(mailOptions);
        */
        // --- Конец опциональной части ---

        res.status(201).json({ msg: 'Message sent successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/contact (для получения сообщений, только для админа)
// @desc    Получить все сообщения из контактной формы
// @access  Private (требуется аутентификация и авторизация)
router.get('/', async (req, res) => {
    try {
        const messages = await ContactMessage.find().sort({ createdAt: -1 }); // Сортировка по дате создания
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;