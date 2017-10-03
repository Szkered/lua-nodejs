const express = require('express')
const app = express()
const {spawn} = require('child_process')

function logOutput(program) {
  return new Promise((res, rej) => {
    program.stdout.on('data', (data) => {
      console.log(data.toString())
      res(data.toString())
    })
    program.stderr.on('data', (data) => {
      console.log(data.toString())
      rej(data.toString())
    })
  })
}

app.get('/', function (req, res) {
  var main = spawn('./main');
  logOutput(main).then((result) => {
    console.log(result);
    res.send(result);
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
