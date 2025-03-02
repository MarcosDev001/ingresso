import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do banco de dados PostgreSQL
const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));
app.use(express.static(path.join(path.resolve(), 'public')));

// Middleware para parsing de JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal (renderiza index.ejs)
app.get('/', (req, res) => {
    res.render('index', { title: 'Colapso - Venda de Ingressos' });
});



// Rota de login (exemplo simples)
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        if (user.rows.length > 0) {
            res.send('Login bem-sucedido!');
        } else {
            res.send('Credenciais inválidas.');
        }
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
