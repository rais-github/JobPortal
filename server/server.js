const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(cors({ origin: '*' }));

const port = process.env.PORT || 6001;

app.get('/api', (req, res) => {
    res.status(201).json({ users: ["Himanshu", "Sudhanshu", "Priyanshu"] });
});

app.listen(port, () => {
    console.log(`Server responding at port:${port}`);
});
