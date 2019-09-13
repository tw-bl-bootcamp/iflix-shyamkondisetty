const movieModel = require('../models/movie.model')
exports.getAllMovies = (req, res) => {

    let responseResult = {}
    movieModel.getAllMovies((err, result) => {
        if (err) {
            responseResult.err = err;
            responseResult.message = "something failed";
            responseResult.status = false;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.data = result;
            responseResult.message = "get all movies is successfully";
            responseResult.status = true;
            res.status(200).send(responseResult)
        }
    })
}
