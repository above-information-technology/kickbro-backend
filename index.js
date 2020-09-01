const express = require('express');
const Email = require('./models/email');
require('./db/mongoose');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000

app.post('/email', async (req, res) => {
    const email = new Email(req.body)

    try {
        await email.save()
        res.status(201).send('Success')
    } catch (e) {
        res.status(400).send(e.message)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});