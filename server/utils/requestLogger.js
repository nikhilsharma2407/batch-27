const requestLogger = (req,res,next)=>{
    const data = `${new Date()} ${req.method} ${req.path}`
    console.log(data);
    next();
};


module.exports = requestLogger;