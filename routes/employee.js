const { executeQuery } = require("../config/db");

const getAllEmployees = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from employees", []);
    res.status(200).json(employeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    let id = req.params.id;
    let employeeData = await executeQuery(
      "select * from employees where employeeNumber =?",
      [id]
    );
    res.status(200).json(employeeData);

    //  `select * from employees where employeeNumber=${id}`
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    let id = req.params.id;
    let employeeData = await executeQuery(
      "delete from employees where employeeNumber=?",
      [id]
    );
    res.status(200).json({
      employeeData: employeeData,
      message: "employee deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const saveEmployee = async (req, res) => {
  try {
    const { employeeNumber, lastName, firstName, email, officeCode, jobTitle } =
      req.body;
    let employeeData = await executeQuery(
      "insert into employees (employeeNumber,lastName,firstName,email,officeCode,jobTitle) values(?,?,?,?,?,?)",
      [employeeNumber, lastName, firstName, email, officeCode, jobTitle]
    );
    employeeData = await executeQuery(
      `select * from employees where employeeNumber=${employeeData.insertId}`
    );
    res.status(201).json({
      employeeData: employeeData,
      message: "employee saved successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateEmployeeById = async (req, res) => {
  try {
    let id = req.params.id;
    const { lastName, firstName, email, officeCode, jobTitle } = req.body;
    let employeeData = await executeQuery(
      `update employees set lastName=?,firstName=?,email=?,officeCode=?,jobTitle=? where employeeNumber=${id}`,
      [lastName, firstName, email, officeCode, jobTitle]
    );
    res.status(200).json({
      employeeData: employeeData,
      message: "employee Updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllEmployees: getAllEmployees,
  getEmployeeById: getEmployeeById,
  deleteEmployeeById: deleteEmployeeById,
  saveEmployee: saveEmployee,
  updateEmployeeById: updateEmployeeById,
};
