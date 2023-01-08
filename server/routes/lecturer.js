const lecturerRoute = require('express').Router();
const { LecturerController } = require('../controllers');

lecturerRoute.get('/', LecturerController.getLecturers);
lecturerRoute.get('/create', LecturerController.createPage);
lecturerRoute.post('/create', LecturerController.create);
lecturerRoute.get('/information/:id', LecturerController.getInformation);
lecturerRoute.delete('/delete/:id', LecturerController.delete);
lecturerRoute.get('/update/:id', LecturerController.updatePage);
lecturerRoute.put('/update/:id', LecturerController.update);
lecturerRoute.get('/search', LecturerController.search);

module.exports = lecturerRoute;
