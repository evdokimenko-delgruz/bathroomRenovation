import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const services = [
        { id: 'demolition', name: 'Демонтаж', pricePerSqM: 80, pricePerUnit: 0 },
        { id: 'tiling', name: 'Укладка плитки', pricePerSqM: 1200, pricePerUnit: 0 },
        { id: 'plumbing', name: 'Сантехнические работы', pricePerSqM: 0, pricePerUnit: 4000 },
        { id: 'electrics', name: 'Электромонтажные работы', pricePerSqM: 0, pricePerUnit: 1500 },
        { id: 'installation', name: 'Установка сантехники/мебели', pricePerSqM: 0, pricePerUnit: 2500 },
        { id: 'painting', name: 'Отделочные работы (покраска/потолок)', pricePerSqM: 400, pricePerUnit: 0 },
        { id: 'waterproofing', name: 'Гидроизоляция', pricePerSqM: 450, pricePerUnit: 0 },
        { id: 'design', name: 'Дизайн проект', pricePerSqM: 0, pricePerUnit: 7000 }, // Фиксированная цена
    ];

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedServices([...selectedServices, value]);
        } else {
            setSelectedServices(selectedServices.filter(serviceId => serviceId !== value));
        }
    };

    const calculateCost = (e) => {
        e.preventDefault();

        const l = parseFloat(length);
        const w = parseFloat(width);
        const h = parseFloat(height);

        if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
            setTotalCost(0);
            alert('Пожалуйста, введите корректные размеры ванной комнаты (положительные числа).');
            return;
        }

        const floorArea = l * w; // Площадь пола
        const wallArea = 2 * (l + w) * h; // Площадь стен
        const totalArea = floorArea + wallArea; // Общая площадь для работ по стенам/полу

        let cost = 0;

        selectedServices.forEach(serviceId => {
            const service = services.find(s => s.id === serviceId);
            if (service) {
                if (service.pricePerSqM > 0) {
                    cost += totalArea * service.pricePerSqM;
                }
                if (service.pricePerUnit > 0) {
                    cost += service.pricePerUnit;
                }
            }
        });

        setTotalCost(cost);
    };

    const resetForm = () => {
        setLength('');
        setWidth('');
        setHeight('');
        setSelectedServices([]);
        setTotalCost(0);
    };

    return (
        <div className="calculator-page section-padding">
            <div className="container">
                <h1>Калькулятор стоимости ремонта ванной комнаты</h1>
                <p>
                    Воспользуйтесь нашим калькулятором, чтобы быстро и легко оценить примерную стоимость ремонта вашей ванной комнаты.
                    Просто введите размеры и выберите необходимые услуги.
                </p>

                <form className="calculator-form" onSubmit={calculateCost}>
                    <div className="form-group">
                        <label htmlFor="length">Длина комнаты (м):</label>
                        <input
                            type="number"
                            id="length"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            step="0.1"
                            min="0.1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="width">Ширина комнаты (м):</label>
                        <input
                            type="number"
                            id="width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            step="0.1"
                            min="0.1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height">Высота комнаты (м):</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            step="0.1"
                            min="0.1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Выберите услуги:</label>
                        {services.map(service => (
                            <div key={service.id} className="checkbox-group">
                                <input
                                    type="checkbox"
                                    id={service.id}
                                    value={service.id}
                                    checked={selectedServices.includes(service.id)}
                                    onChange={handleServiceChange}
                                />
                                <label htmlFor={service.id}>{service.name}</label>
                            </div>
                        ))}
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Рассчитать</button>
                        <button type="button" onClick={resetForm} className="btn btn-secondary">Сбросить</button>
                    </div>
                </form>

                {totalCost > 0 && (
                    <div className="result-section">
                        <h3>Примерная стоимость ремонта:</h3>
                        <p>{totalCost.toLocaleString('ru-RU')} руб.</p>
                        <p><i>Обратите внимание: Это предварительный расчет. Для точной сметы необходим выезд специалиста.</i></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;