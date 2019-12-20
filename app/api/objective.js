module.exports = (app, db) => {
  app.get('/objective', (req, res) => {
    db.astabquestionentry.findAll().then((Objective) => res.json(Objective));
  });

  app.get('/objective/:id', (req, res) => db.astabquestionentry.findByPk(req.params.id).then((result) => res.json(result)));

  // eslint-disable-next-line prefer-destructuring
  const Op = db.Sequelize.Op

  app.get('/objective/search/:term', (req, res) => {
    db.astabquestionentry.findAll({
      where: {
        [Op.or]: [
          { qeLessonName: { [Op.like]: `%${req.params.term}%` } },
          { qeDomainName: { [Op.like]: `%${req.params.term}%` } },
          { qeObjective: { [Op.like]: `%${req.params.term}%` } },
          { qeSkill: { [Op.like]: `%${req.params.term}%` } },
          { qeSubSkill: { [Op.like]: `%${req.params.term}%` } },
        ],
      },
    }).then((result) => res.json(result))
  })

  app.get('/objective/:subject/:grade', (req, res) => {
    db.astabquestionentry.findAll({
      where: {
        qeSubject: { [Op.like]: `%${req.params.subject}%` },
        qeGrade: { [Op.eq]: `${req.params.grade}` },
      },
    }).then((result) => res.json(result))
  })
}
