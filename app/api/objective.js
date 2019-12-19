module.exports = (app, db) => {
  app.get('/objective', (req, res) => {
    db.astabquestionentry.findAll().then((Objective) => res.json(Objective));
  });
};
