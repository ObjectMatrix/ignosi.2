module.exports = (sequelize, DataTypes) => {
  const Objective = sequelize.define('astabquestionentry', {
    qeLessonName: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    qeSubject: DataTypes.STRING,
    qeActivity: DataTypes.STRING,
    qeGrade: DataTypes.STRING,
    qeObjective: DataTypes.STRING,
    qeSkill: DataTypes.TEXT,
    qeMastery: DataTypes.STRING,
    qeRetries: DataTypes.INTEGER,
    qeRandomQuestion: DataTypes.INTEGER,
    qeInstruction: DataTypes.STRING,
    qeDomainName: DataTypes.STRING,
    qePreRequisite: DataTypes.STRING,
    qeReadyToGo: DataTypes.STRING,
    qeAttempt: DataTypes.INTEGER,
    qeTotalNumberOfQuestion: DataTypes.INTEGER,
    qeSubSkill: DataTypes.TEXT,
    qeSubSubSkill: DataTypes.TEXT,
    qeSerialNumber: DataTypes.INTEGER,
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
    // tableName: 'objectives',
  });

  // Objective.associate = (models) => {
  //   Objective.hasMany(models.post);
  // };

  return Objective;
};
