const studentRoute = require("express").Router();
const { StudentController } = require("../controllers");

studentRoute.get("/", StudentController.getStudents);
studentRoute.get("/create", StudentController.createPage);
studentRoute.post("/create", StudentController.create);
studentRoute.get("/information/:id", StudentController.getInformation);
studentRoute.get("/delete/:id", StudentController.delete);
studentRoute.get("/update/:id", StudentController.updatePage);
studentRoute.post("/update/:id", StudentController.update);
studentRoute.get("/search", StudentController.search);

module.exports = studentRoute;
