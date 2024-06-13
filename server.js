
const cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
// const swaggerDocs = require('./swagger');

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
    res.status(200).send({msg:"Welcome To The Course Management System"})
})

app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', progressRoutes);

// swaggerDocs(app);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port https://localhost:${PORT}`);
});
