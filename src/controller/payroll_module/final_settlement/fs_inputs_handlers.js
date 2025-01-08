const moduleList = require('../commonFile')

const test=async(req,res)=>
{
    console.log("this is the test api")
    console.log(moduleList)
    const response={data:moduleList}
    res.send(response)
}



module.exports={test}   