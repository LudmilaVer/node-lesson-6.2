import express from 'express';

const app = express();
const PORT = 3000;

// Middleware для парсинга JSON-данных из тела запроса
app.use(express.json());

// Маршрут для GET-запроса на корневой путь
app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello, World!');
    } catch (error) {
        res.status(500).send('Произошла ошибка при обработке запроса');
    }
});

// Маршрут для POST-запроса на корневой путь
app.post('/', (req, res) => {
    try {
        const data = req.body;

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).send('Данные не были отправлены');
        }

        res.status(200).send(`Данные получены: ${JSON.stringify(data)}`);
    } catch (error) {
        res.status(500).send('Произошла ошибка при обработке запроса');
    }
});

// Запуск сервера на порту 3000
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
