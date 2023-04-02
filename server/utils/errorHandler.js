const errorHandler = (error, req, res, next) => {
    console.log(error);
    if (error.code === 11000) {
        error.status = 403;
        error.message = 'username already exists!!!'
    }
    res.status(error.status || 500);
    res.send({ success: false, message: error.message });

};

module.exports = errorHandler;