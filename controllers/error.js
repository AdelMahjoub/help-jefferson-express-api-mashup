const ApiResponse = require('../api/v1/apiResponse');

module.exports = {
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @param {NextFunction} next 
     */
    '404'(req, res, next) {
        return res.status(404).json(new ApiResponse({ status: '404', errors: ['Ressource not found'] }))
    },
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @param {NextFunction} next 
     */
    '500'(err, req, res, next) {
        console.log(err.stack);
        if(process.env.NODE_ENV !== 'development') {
            return res.json( new ApiResponse({ status: '500', errors: ['Internal error, please try again'] }) )
        }
        return res.status(500).json(new ApiResponse({ status: '500', errors: [err.message] }) )
    }
}