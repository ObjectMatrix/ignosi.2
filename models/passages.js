module.exports = (sequelize, DataTypes) => {
  const Passages = sequelize.define('astabpassagebank', {
    pbPassageID: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    pbCurPassage: DataTypes.INTEGER,
    pbLessonName: DataTypes.STRING,
    pbPassage: DataTypes.TEXT,
    pbPassageNoTag: DataTypes.TEXT,
    pbRandomField: DataTypes.INTEGER,
    pbRandomizeOrNot: DataTypes.STRING,
    pbSequencer: DataTypes.INTEGER,
    pbPassageType: DataTypes.STRING,
    pbBgPallet: DataTypes.STRING,
    pbSkillCode: DataTypes.STRING,
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
    freezeTableName: true,
    timestamps: false,
    // tableName: 'astabpassagebank',
  });

  // Objective.associate = (models) => {
  //   Objective.hasMany(models.post);
  // };

  return Passages
}
