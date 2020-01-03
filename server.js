const express = require('express');
const connectDB = require('./config/db');


const app = express();

//connect db
connectDB();

//Init middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('API running'));

//define routes
app.use('/api/users', require('./routes/api/tfcusers'));
app.use('/api/master', require('./routes/api/getmaster'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));