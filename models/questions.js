module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('astabquestionbank', {
    qbQuestionId: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    qbCurQ: DataTypes.STRING,
    qbQuestion: DataTypes.TEXT,
    qbQuestionNoTag: DataTypes.TEXT,
    qbHints: DataTypes.TEXT,
    qbRandomField: DataTypes.STRING,
    qbPassageId: DataTypes.STRING,
    qbLessonName: DataTypes.STRING,
    SerialNumber: DataTypes.INTEGER,
    qbsolution: DataTypes.TEXT,
    qbsolutionNoTag: DataTypes.TEXT,
    qbHintsNoTag: DataTypes.TEXT,
    qbLOD: DataTypes.INTEGER,
    qbUser: DataTypes.STRING,
    Created: DataTypes.DATE,
    Modified: DataTypes.DATE,
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
    freezeTableName: true,
    timestamps: false,
    // tableName: 'astabquestionbank',
  });

  // Objective.associate = (models) => {
  //   Objective.hasMany(models.post);
  // };

  return Questions
}
