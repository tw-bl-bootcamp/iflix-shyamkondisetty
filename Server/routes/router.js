const express=require('express')
const router=express.Router();
const userController=require('../controllers/user.controller');
const movieController=require('../controllers/movie.controller')
router.post('/login',userController.login)
router.get('/getAllMovies',movieController.getAllMovies);
module.exports=router;