
const allowedOrigins = ['http:localhost:4200'];

const disable_cors=()=>{
    origin: (origin, callback)=>{
        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }


}


module.exports=disable_cors;