// HTML 요청을 받으려면 cors 사용

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors());

// 값이 바로 name에 들어감.
app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name=="dog"){
        res.json({"sound":"멍멍"})
    }else if(name=="cat"){
        res.json({"sound":"야옹"})
    }else{
        res.json({"sound":"없음"})
    }
    console.log(name)
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})