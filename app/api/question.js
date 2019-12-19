module.exports = (app, db) => {
  app.get('/question', (req, res) => {
    db.astabquestionbank.findAll().then((Question) => res.json(Question));
  })
}
