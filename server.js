const http = require("http")
const students = require("./data.js")
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    const rollNo = req.url.slice(1)
    console.log(rollNo)
    const result = students.find( ele => rollNo == ele.roll_number )
    console.log(result)
    if(result){
        res.end(JSON.stringify(result))
    }else{
        res.end(JSON.stringify({}))
    }
})
server.listen(3030, function(){
    console.log("server is running")
})