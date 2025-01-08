const express=  require('express');
const app = express();  
const port = 3000; // You can choose any available port
const allRoutes= require('./controller/index')
app.use(allRoutes)



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
)