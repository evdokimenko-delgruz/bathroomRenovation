import React from 'react';
import '../index.css';

// Импорт изображений для услуг (оставляем те же пути)
import demolitionImg from '../assets/images/remont-vannoy2-min.jpg';
import tilingImg from '../assets/images/portfolio-1.jpg';
import plumbingImg from '../assets/images/petroglif-park1-00.jpg';
import electricsImg from '../assets/images/ori_3881828_max2678wsvo0xo095zrhj1n5lccvgq6794m9c634_handyman-badges-builders-and-workers-contractor-symbols-technicians-v.jpg';
import installationImg from '../assets/images/kapitalnii-remont-vannoi-komnati.jpg';
import paintingImg from '../assets/images/kak-ehkonomno-obnovit-vannuyu-komnatu.jpg';


// Данные из Услуги.txt
const servicesRawText = `
Демонтаж
Описание: Удаление старых отделочных материалов, сантехники и мебели. Подготовка помещения к ремонту.
Примеры работ: Снятие старой плитки, демонтаж ванны, удаление старых труб.
Цена: от 50 до 100 рублей за квадратный метр (в зависимости от сложности).

Проектирование и дизайн
Описание: Разработка индивидуального дизайна ванной комнаты с учетом ваших пожеланий и потребностей.
Примеры работ: Создание 3D-визуализаций, подбор цветовой гаммы и материалов.
Цена: от 3000 до 10000 рублей (в зависимости от сложности проекта).

Укладка плитки
Описание: Профессиональная укладка керамической, керамогранитной и мозаичной плитки на пол и стены.
Примеры работ: Укладка плитки на пол, создание плиточных панно на стенах.
Цена: от 800 до 1500 рублей за квадратный метр (в зависимости от типа плитки и сложности укладки).

Сантехнические работы
Описание: Установка и замена сантехники, прокладка трубопроводов и канализации.
Примеры работ: Установка унитаза, раковины, душевой кабины, замена старых труб.
Цена: от 2000 до 5000 рублей за установку (в зависимости от типа сантехники).

Электромонтажные работы
Описание: Установка и замена электропроводки, монтаж освещения и розеток.
Примеры работ: Прокладка кабеля, установка выключателей.
Цена: от 200 до 500 рублей за точку подключения (в зависимости от сложности).

Отделочные работы
Описание: Покраска и оклейка стен, установка натяжных и подвесных потолков.
Примеры работ: Покраска стен, установка натяжного потолка.
Цена: от 200 до 500 рублей за квадратный метр (в зависимости от типа отделки).

Установка мебели и аксессуаров
Описание: Монтаж встроенной и модульной мебели для ванных комнат, установка зеркал и полок.
Примеры работ: Установка шкафчиков, зеркал, полок.
Цена: от 1000 до 3000 рублей за единицу (в зависимости от сложности установки).

Гидроизоляция
Описание: Проведение работ по гидроизоляции стен и пола для предотвращения протечек.
Примеры работ: Нанесение гидроизоляционных материалов на пол и стены.
Цена: от 300 до 600 рублей за квадратный метр.

Установка систем отопления
Описание: Монтаж теплых полов и радиаторов для создания комфортной температуры в ванной.
Примеры работ: Установка электрического теплого пола, монтаж радиаторов.
Цена: от 1500 до 3000 рублей за квадратный метр (для теплого пола).

Консультации и подбор материалов
Описание: Помощь в выборе качественных материалов и сантехники, консультации по вопросам дизайна.
Примеры работ: Подбор плитки, сантехники, мебели.
Цена: Бесплатно при заказе других услуг.
`;

const parseServices = (text) => {
    const serviceBlocks = text.split('\n\n').filter(Boolean);
    const images = {
        'Демонтаж': demolitionImg,
        'Проектирование и дизайн': installationImg,
        'Укладка плитки': tilingImg,
        'Сантехнические работы': plumbingImg,
        'Электромонтажные работы': electricsImg,
        'Отделочные работы': paintingImg,
        'Установка мебели и аксессуаров': installationImg,
        'Гидроизоляция': tilingImg,
        'Установка систем отопления': plumbingImg,
        'Консультации и подбор материалов': installationImg,
    };

    return serviceBlocks.map((block, index) => {
        const lines = block.split('\n').filter(Boolean);
        const title = lines[0].trim();
        const description = lines.find(line => line.startsWith('Описание:')) ? lines.find(line => line.startsWith('Описание:')).replace('Описание:', '').trim() : '';
        const price = lines.find(line => line.startsWith('Цена:')) ? lines.find(line => line.startsWith('Цена:')).replace('Цена:', '').trim() : 'По запросу';
        return {
            id: index + 1,
            title: title,
            description: description,
            price: price,
            image: images[title] || demolitionImg
        };
    });
};

const servicesList = parseServices(servicesRawText);

const Services = () => {
    return (
        <div className="services-page section-padding">
            <div className="container">
                <h1>Наши Услуги</h1>
                <div className="services-grid">
                    {servicesList.map(service => (
                        <div key={service.id} className="service-item">
                            <img src={service.image} alt={service.title} className="service-image" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <p className="service-price">Цена: {service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;