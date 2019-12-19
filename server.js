const express = require('express');
const db = require('./models');
const apiObjective = require('./app/api/objective')
const apiPassage = require('./app/api/passage')
const apiQuestion = require('./app/api/question')
const apiAnswer = require('./app/api/answer')

const app = express()
apiObjective(app, db)
apiPassage(app, db)
apiQuestion(app, db)
apiAnswer(app, db)

app.listen(8080, () => console.log('App listening on port 8080!'));
