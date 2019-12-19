module.exports = (app, db) => {
  app.get('/passage', (req, res) => {
    db.astabpassagebank.findAll().then((Passage) => res.json(Passage));
  })
}
