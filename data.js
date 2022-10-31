const data = {
    //"title": "Программирование, web-разработка, 3D моделирование",
    "about_me": "Web-разработчик (backend). Люблю python. В свободное время занимаюсь твердотельным моделированием.",
    "top_description": "Более детально ознакомиться с моими проектами можно в следующих источниках:",
    "about_my_works": "",
    "my_youtube": "https://www.youtube.com/channel/UCj2GeBv-OHLXVc9CJcbuqlw",
    "my_telegram": "https://t.me/larnik7",
    "my_github": "https://github.com/dr-number",
    "my_gitlab": "https://gitlab.com/dr.number",
    "my_email_href": "dr.number@yandex.ru",
    "your_task_description": `Понравились мои работы? Хотите подобное или что-то другое? Пишите, обсудим!</br>
    Заходите на <a href="https://www.youtube.com/channel/UCj2GeBv-OHLXVc9CJcbuqlw">мой YouTube канал</a> :)`,
    "top_my_services": [
        {
            "title": "Программирование",
            "img": "programming.png",
            "description_html": `Мини-проекты, средние-проекты и лабораторные работы на следующих ЯП:
            <ul>
                <li><span>С++</span></li>
                <li><span>С#</span></li>
                <li><span>Java</span></li>
                <li><span>JavaScript</span></li>
                <li><span>Python (pygame, django, telegram боты)</span></li> 
            </ul>
            Возможны и другие языки`,
        },
        {
            "title": "3D моделирование",
            "img": "3d.png",
            "description_html": `<ul>
                <li><span>Создание 3D модели (по чертежам, по фото)</span></li>
                <li><span>Создание чертежей по 3D модели</span></li>
                <li><span>Создание анимации работы механизма</span></li>
                <li><span>Создание анимации анимацию сборки/разборки механизма</span></li>
                <li><span>Создание фотореалистичного изображения</span></li>
                <li><span>Адаптация модели к 3D печати</span></li>
                <li><span>Создание анимированного логотипа</span></li>
            </ul>`,
        }
    ],
    "skills":[
        {"name": "Python", "per": 70},
        {"name": "PHP", "per": 50},
        {"name": "Базы данных", "per": 40},
        {"name": "Java; Kotlin", "per": 30},
        {"name": "Css; Sass", "per": 10},
        {"name": "Js; jQuery", "per": 25},
        {"name": "Docker; Docker Compose", "per": 20},
        {"name": "Работа с Legacy-кодом", "per": 45},
        {"name": "Автоматизация задач", "per": 45}
    ],
    "my_works": [
        {
            "title": "Программирование",
            "href": "programming",
            "works": [
                {
                    "img": "api_stripe.jpg",
                    "title": "Работа с API платежной системы Stripe",
                    "title_mini": "Платежная система",
                    "skills": "Python, Django",
                    "link": "https://github.com/dr-number/Rishat_django_test.git",
                    "description": "",
                    "description_mini": "API Stripe",
                    "date":""
                },
                {
                    "img": "weather_telegram_bot.jpg",
                    "title": "Погодный telegram bot",
                    "title_mini": "Погодный telegram bot",
                    "skills": "Python, pyTelegramBotAPI",
                    "link": "https://github.com/dr-number/MyWeather_telegram_bot",
                    "description": "",
                    "description_mini": "Погодный telegram bot",
                    "date":""
                },
                {
                    "img": "REST_API_Flask.jpg",
                    "title": "REST API",
                    "title_mini": "REST API",
                    "skills": "Python, Flask",
                    "link": "https://github.com/dr-number/Base_flask_rest_API.git",
                    "description": "",
                    "description_mini": "REST API на Flask",
                    "date":""
                },
                {
                    "img": "Mask_lite.jpg",
                    "title": "Библиотека Mask lite для ввода по маске на чистом js",
                    "title_mini": "Ввод по маске",
                    "skills": "чистый JS",
                    "link": "https://dr.number.gitlab.io/mask-lite/",
                    "description": "",
                    "description_mini": "Библиотека на js",
                    "date":""
                },
                {
                    "img": "cosmo_strike.jpg",
                    "title": "Космический удар",
                    "title_mini": "Космический удар",
                    "skills": "Python, Pygame",
                    "link": "https://youtu.be/LIIQs8umVV8",
                    "description": "",
                    "description_mini": "Мини-игра для ПК",
                    "date":""
                },
                {
                    "img": "two_snake.jpg",
                    "title": "Две змейки",
                    "title_mini": "Две змейки",
                    "skills": "C++",
                    "link": "https://youtu.be/ZInq1xdfp8Q",
                    "description": "Человек играет против компьютера",
                    "description_mini": "Мини-игра для ПК",
                    "date":""
                },

            ]
        },
        {
            "title": "3D моделирование",
            "href": "3d_modeling",
            "works": [
                {
                    "img": "oppozite_assembly.jpg",
                    "title": "Оппозитный двигатель",
                    "title_mini": "Оппозитный двигатель",
                    "skills": "CAD моделирование",
                    "link": "https://youtu.be/8jZJs5oeCW4",
                    "description": "Оппозитный двигатель. Собран по чертежам",
                    "description_mini": "Собран по чертежам",
                    "date":""
                },
                {
                    "img": "mehanizm.jpg",
                    "title": "Редуктор",
                    "title_mini": "Редуктор",
                    "skills": "CAD моделирование",
                    "link": "https://youtu.be/o7rttUjBemc",
                    "description": "Редуктор. Собран по чертежам",
                    "description_mini": "Собран по чертежам",
                    "date":""
                },
                {
                    "img": "nissan_bluebird_u11.jpg",
                    "title": "Nissan Bluebird u11 Модель для 3D печати",
                    "title_mini": "Nissan Bluebird u11",
                    "skills": "CAD моделирование",
                    "link": "https://youtu.be/rzL8aarhAno",
                    "description": "",
                    "description_mini": "Для 3D печати",
                    "date":""
                },
                {
                    "img": "nissan_x-trail_t32.jpg",
                    "title": "Nissan X-Trail T32  Модель для 3D печати",
                    "title_mini": "Nissan X-Trail T32",
                    "skills": "CAD моделирование",
                    "link": "https://youtu.be/RTWr06DtmOk",
                    "description": "",
                    "description_mini": "Для 3D печати",
                    "date":""
                },
                {
                    "img": "emblem.jpg",
                    "title": "Анимированный логотип",
                    "title_mini": "Логотип",
                    "skills": "CAD моделирование",
                    "link": "https://youtu.be/gj9LFGiHqG0",
                    "description": "",
                    "description_mini": "Анимированный логотип",
                    "date":""
                }
        ]
        }
    ],
}