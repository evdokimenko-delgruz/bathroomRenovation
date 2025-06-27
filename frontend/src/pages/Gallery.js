import React, { useState } from 'react';
import '../index.css';

// Импорт изображений из assets/images/gallery
import gallery1 from '../assets/images/in-out-shutterstock_2338901709.hsgqm4lxnfwo..jpg.crdownload.jpg';
import gallery2 from '../assets/images/images (2).jpg';
import gallery3 from '../assets/images/images (1).jpg';
import gallery4 from '../assets/images/images.jpg';
import gallery5 from '../assets/images/dushinurgaga-vannitoa-remont-1024x683.jpg';
import gallery6 from '../assets/images/dizayn-interyera-4-komnantoj-kvartiry-144-kv-m-foto-14-3914.jpg';



const galleryItems = [
    { id: 1, src: gallery1, alt: 'Ванная комната с угловой ванной', category: 'tiling' },
    { id: 2, src: gallery2, alt: 'Современная душевая кабина', category: 'plumbing' },
    { id: 3, src: gallery3, alt: 'Классическая ванная с зеленым акцентом', category: 'full-renovation' },
    { id: 4, src: gallery4, alt: 'Душевая с прозрачными стенками', category: 'design' },
    { id: 5, src: gallery5, alt: 'Санузел в современном стиле', category: 'full-renovation' },
    { id: 6, src: gallery6, alt: 'Роскошная ванная с отдельностоящей ванной', category: 'luxury-renovation' },
];

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="gallery-page section-padding">
            <div className="container">
                <h1>Галерея наших работ</h1>

                <div className="filter-buttons">
                    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Все</button>
                    <button onClick={() => setFilter('full-renovation')} className={filter === 'full-renovation' ? 'active' : ''}>Полный ремонт</button>
                    <button onClick={() => setFilter('tiling')} className={filter === 'tiling' ? 'active' : ''}>Укладка плитки</button>
                    <button onClick={() => setFilter('plumbing')} className={filter === 'plumbing' ? 'active' : ''}>Сантехника</button>
                    <button onClick={() => setFilter('design')} className={filter === 'design' ? 'active' : ''}>Дизайн</button>
                    <button onClick={() => setFilter('luxury-renovation')} className={filter === 'luxury-renovation' ? 'active' : ''}>Люкс ремонт</button>
                    <button onClick={() => setFilter('budget-renovation')} className={filter === 'budget-renovation' ? 'active' : ''}>Бюджетный ремонт</button>
                </div>

                <div className="gallery-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.src} alt={item.alt} />
                            <div className="gallery-item-overlay">
                                <p>{item.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;