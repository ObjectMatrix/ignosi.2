module.exports = (app, db) => {
  app.get('/answer', (req, res) => {
    db.astabanswerbank.findAll().then((Answer) => res.json(Answer));
  })
}
