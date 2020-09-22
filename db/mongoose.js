const mongoose = require('mongoose')

db = mongoose.connect('mongodb+srv://kickbro:pungatomic2@kickbro-app-test.dhae2.mongodb.net/kickbro_emails_test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})