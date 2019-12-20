module.exports = (app, db) => {
  // const Op = db.Sequelize
  app.get('/questions/lesson/:lesson', (req, res) => {
    db.astabquestionbank.findAndCountAll({
      where: { qbLessonName: `${req.params.lesson}` },
      order: [['SerialNumber', 'ASC']],
    }).then((Question) => res.json(Question));
  })

  app.get('/questions/:id', (req, res) => db.astabquestionbank.findByPk(req.params.id).then((result) => res.json(result)));
}
