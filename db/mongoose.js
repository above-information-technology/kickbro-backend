const mongoose = require('mongoose')

db = mongoose.connect('mongodb+srv://kickbro_user:th3k1ckbr0app@kickbro.v45s5.mongodb.net/kickbro_emails?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})