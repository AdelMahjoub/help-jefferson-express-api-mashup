const ApiResponse = require('../../api/v1/apiResponse');
const Reflection = require('../../models/reflection');


module.exports = {
    get: {
        /**
         * 
         * @param {Request} req 
         * @param {Response} res 
         * @param {NextFunction} next 
         */
        index(req, res, next) {
            return res.json(new ApiResponse({ data: Reflection.findAll() }));
        },
        /**
         * 
         * @param {Request} req 
         * @param {Response} res 
         * @param {NextFunction} next 
         */
        show(req, res, next) {
            return res.json(new ApiResponse({ data: [Reflection.findOne(req.params.id)] }));
        }
    },
    actions: {
        /**
         * 
         * @param {Request} req 
         * @param {Response} res 
         * @param {NextFunction} next 
         */
        create(req ,res, next) {
            const requiredFields = ['success', 'lowPoint', 'takeAway'];
            const bodyFields = requiredFields.filter(field => Boolean(req.body[field]));
            if (bodyFields.length < requiredFields.length) {
                return res.json(new ApiResponse({ errors: ['All fields are required.'] }));
            }
              const reflection = new Reflection(req.body);
              reflection.save();
              return res.json(new ApiResponse({ data: [reflection] }));
        },
        /**
         * 
         * @param {Request} req 
         * @param {Response} res 
         * @param {NextFunction} next 
         */
        update(req ,res, next) {
            const reflection = Reflection.findOne(req.params.id);
            if(!reflection) {
                return res.status(404).json(new ApiResponse({ status: '404', errors: ['reflection not found'] }))
            }
            reflection.update(req.body);
            return res.json(new ApiResponse({ data: [reflection] }));
        
        },
        /**
         * 
         * @param {Request} req 
         * @param {Response} res 
         * @param {NextFunction} next 
         */
        delete(req ,res ,next) {
            const reflection = Reflection.findOne(req.params.id);
            if(!reflection) {
                return res.status(404).json(new ApiResponse({ status: '404', errors: ['reflection not found'] }))
            }
            Reflection.delete(reflection.id);
            return res.json(new ApiResponse());
        }
    }
}