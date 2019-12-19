module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('astabanswerbank', {
    abAnswerId: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    abQuestionId: DataTypes.STRING,
    abAnswer: DataTypes.TEXT,
    abAnswerNoTag: DataTypes.TEXT,
    abCorrectAnswer: DataTypes.STRING,
    abRandomField: DataTypes.INTEGER,
    abLessonName: DataTypes.STRING,
    abPlainCorrectAnswer: DataTypes.TEXT,
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
    freezeTableName: true,
    timestamps: false,
    // tableName: 'astabanswerbank',
  });

  // Objective.associate = (models) => {
  //   Objective.hasMany(models.post);
  // };

  return Answers
}
