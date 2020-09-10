const express = require('express');
const cors = require('cors');
const Email = require('./models/email');
require('./db/mongoose');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000

app.post('/email', async (req, res) => {
    const isEmail = await Email.find({ lowerEmail: req.body.lowerEmail});
    if (isEmail.length) {
        return res.status(400).send('Email already exists')
    }
    const email = new Email(req.body)
    try {
        await email.save()
        return res.status(201).send('Success aaaa')
    } catch (e) {
        return res.status(404).send(e.message)
    } 
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});