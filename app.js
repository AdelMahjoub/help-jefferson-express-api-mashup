const express = require('express');

const app = express();
const v1ReflectionRoutes = require('./api/v1/reflection');
const errorRoutes = require('./api/error');

app
.set('trust proxy', process.env.ENV === 'production')
.set('port', process.env.PORT || 8080)

.use('/api/v1/reflections', v1ReflectionRoutes)
.use(errorRoutes)


.listen(app.get('port'), () => {
    console.log(`EXPRESS APP RUNNING ON\nPORT ${app.get('port')}\nENV ${app.get('env')}`)
})
