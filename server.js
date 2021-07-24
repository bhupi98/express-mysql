const express = require("express");
const { executeQuery } = require("./config/db");
const port = process.env.PORT || 8080;
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", employeeRoutes);

app.listen(port, () => console.log(`server is running on port ${port}`));
