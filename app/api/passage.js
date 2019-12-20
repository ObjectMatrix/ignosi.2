module.exports = (app, db) => {
  app.get('/passage', (req, res) => {
    db.astabpassagebank.findAll().then((Passage) => res.json(Passage));
  })

  app.get('/passage/lesson/:lesson', (req, res) => {
    db.astabpassagebank.findAndCountAll({
      where: { pbLessonName: `${req.params.lesson}` },
      order: [['pbSequencer', 'ASC']],
    }).then((Passage) => res.json(Passage));
  })

  app.get('/passage/:id', (req, res) => db.astabpassagebank.findByPk(req.params.id).then((result) => res.json(result)));
}
