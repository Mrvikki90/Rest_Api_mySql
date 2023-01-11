const DB = require("../db/db");
const Student = DB.Student;

const Create = async (req, res) => {
  const data = ({ Name, Age, Email, Password, Status, Subject } =
    req.body.data);
  try {
    await Student.create(data);
    res.json({
      message: "Data inserted",
    });
  } catch (error) {
    res.send(error);
  }
};

const FindAll = async (req, res) => {
  try {
    const studentData = await Student.findAll();
    if (studentData) {
      res.status(200).send(studentData);
    }
  } catch (error) {
    req.send(error);
  }
};

const Update = async (req, res) => {
  const id = req.params.id;
  const data = ({ Name, Age, Email, Password, Status, Subject } =
    req.body.items);
  console.log(id, data);

  try {
    await Student.update(data, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Data Updated",
    });
  } catch (err) {
    res.send(err);
  }
};

const Delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Student.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      message: "Data Deleted",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { Create, FindAll, Update, Delete };
