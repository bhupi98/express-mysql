const router = require("express").Router();
const employee = require("./employee");
router.get("/getAllEmployees", employee.getAllEmployees);
router.get("/getEmployeeById/:id", employee.getEmployeeById);
router.delete("/deleteEmployeeById/:id", employee.deleteEmployeeById);
router.post("/saveEmployee", employee.saveEmployee);
router.put("/updateEmployee/:id", employee.updateEmployeeById);
module.exports = router;
