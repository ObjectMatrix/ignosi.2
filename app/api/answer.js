module.exports = (app, db) => {
  app.get('/answer/question/:id', (req, res) => {
    db.astabanswerbank.findAll({
      where: { abQuestionId: `${req.params.id}` },
    }).then((Answer) => res.json(Answer));
  })

  app.get('/answer/lesson/:lesson', (req, res) => {
    db.astabanswerbank.findAndCountAll({
      where: { abLessonName: `${req.params.lesson}` },
    }).then((Answer) => res.json(Answer));
  })
}
