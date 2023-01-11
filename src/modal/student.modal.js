module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("students", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Age: {
      type: Sequelize.INTEGER,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Password: {
      type: Sequelize.STRING,
    },
    Status: {
      type: Sequelize.STRING,
    },
    Subject: {
      type: Sequelize.STRING,
    },
  });

  return Student;
};
