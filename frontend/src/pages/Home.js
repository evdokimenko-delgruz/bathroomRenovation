import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import heroImage from '../assets/images/sanuze_remont_2_21.jpg';

// Данные из файлов
const slogan = 'Ремонт ванных комнат: качество, которому можно доверять!'; // Из Слоган.txt
const advantagesText = `
1. Профессионализм и опыт:
Наша команда состоит из высококвалифицированных специалистов с более чем 10-летним опытом в сфере ремонта ванных комнат.

2. Индивидуальный подход:
Мы учитываем все пожелания и требования клиентов, предлагая уникальные решения, которые соответствуют вашему стилю и бюджету.

3. Качество материалов:
Мы работаем только с проверенными и надежными поставщиками, что гарантирует долговечность и высокое качество используемых материалов.

4. Комплексные услуги:
Предлагаем полный спектр услуг: от проектирования и выбора материалов до выполнения всех этапов ремонта, включая сантехнические и отделочные работы.

5. Современные технологии:
Используем новейшие технологии и методы, что позволяет нам достигать высоких стандартов качества и эффективности.

6. Прозрачность цен:
Мы предоставляем четкие сметы и не скрываем дополнительные расходы, чтобы вы всегда знали, за что платите.

7. Гарантия на работу:
Мы уверены в качестве своих услуг и предоставляем гарантию на выполненные работы, что обеспечивает дополнительное спокойствие нашим клиентам.

8. Соблюдение сроков:
Мы ценим ваше время и гарантируем выполнение работ в оговоренные сроки без задержек.

9. Отличное послепродажное обслуживание:
Мы всегда готовы ответить на ваши вопросы и помочь с любыми проблемами даже после завершения проекта.
`;
const advantages = advantagesText.split('\n\n').filter(Boolean).map((item, index) => {
    const [title, ...rest] = item.split(':\n');
    return {
        id: index + 1,
        title: title.replace(/^\d+\.\s/, '').trim(),
        description: rest.join(':\n').trim()
    };
});


const Home = () => {


    useEffect(() => {
        // Получение слогана
        fetch('http://localhost:5000/api/content/slogan')
            .then(res => res.json())
            .then(data => setSloganText(data))
            .catch(err => console.error('Error fetching slogan:', err));

        // Получение информации о компании
        fetch('http://localhost:5000/api/content/company_info')
            .then(res => res.json())
            .then(data => setCompanyInfo(data.fullText)) // Получаем fullText из объекта data
            .catch(err => console.error('Error fetching company info:', err));

    }, []);

    return (
        <div className="home-page">
            <section className="hero">
                <img src={heroImage} alt="Beautiful Bathroom" className="hero-image" />
                <div className="hero-content">
                    <h1>{slogan}</h1>
                    <p>Профессиональный ремонт ванных комнат под ключ с гарантией качества.</p>
                    <Link to="/calculator" className="btn btn-primary">Рассчитать стоимость ремонта</Link>
                </div>
            </section>

            <section className="about-short section-padding">
                <div className="container">
                    <h2>Кратко о нас</h2>
                    <p>Наша компания, "Мастерская Ванных", специализируется на создании стильных и функциональных ванных комнат, которые становятся настоящими оазисами комфорта в вашем доме. С более чем 10-летним опытом в сфере ремонта, мы гордимся высоким качеством наших услуг и индивидуальным подходом к каждому клиенту.</p>
                    <Link to="/about" className="btn btn-secondary">Подробнее о компании</Link>
                </div>
            </section>

            <section className="advantages section-padding bg-light">
                <div className="container">
                    <h2>Наши преимущества</h2>
                    <div className="advantage-grid">
                        {advantages.map(advantage => (
                            <div key={advantage.id} className="advantage-item">
                                <h3>{advantage.title}</h3>
                                <p>{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;