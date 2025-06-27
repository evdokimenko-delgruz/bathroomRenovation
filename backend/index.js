const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Для разрешения CORS-запросов с фронтенда
require('dotenv').config();

const app = express();

// Подключение к базе данных
connectDB();

// Middleware
app.use(express.json({ extended: false })); // Для парсинга JSON-тел запросов
app.use(cors()); // Включение CORS

// Определение маршрутов
app.use('/api/content', require('./routes/content'));
app.use('/api/contact', require('./routes/contact'));

// Базовый маршрут
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));