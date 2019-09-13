const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true},
    rating: { type: String, required: true },
    review:{type:Number},
}, {
    timestamps: true
}
);

const movie = mongoose.model('movies', movieSchema);

function Movie() { }
Movie.prototype.getAllMovies = (callback) => {
    movie.find((err, movieResult) => {
        if (err) {
            callback(err)
        }
        else if(movieResult.length==0){
            callback("No movies found")
        }
        else {
            callback(null, movieResult)
        }

    })
}
module.exports = new Movie();
