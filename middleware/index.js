const express = require('express');
const app = express();
const bodyParser = require('./body-parser');

// const mw = (req, res, next) => {
//   const time = Date.now();
//   req.startTime = time;
//   console.log('这是第一个中间件');
//   next();
// }

// const mw2 = (req, res, next) => {
//   console.log('这是第二个中间件');
//   next();
// }

// app.use(mw);

// app.use((req, res, next) => {
//   console.log('这是全局中间件');
//   next();
// });

// app.get('/list', [mw, mw2], (req, res) => {
//   console.log('get success', req.startTime);
//   res.send('get success');
// })

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.post('/user', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// })
app.use(bodyParser);

app.post('/create', (req, res) => {
  // console.log('post success' + req.body);
  res.send(req.body);
})

app.listen(8090, () => {
  console.log('listen in 127.0.0.1');
})