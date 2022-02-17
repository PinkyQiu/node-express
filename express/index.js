const express = require('express');
const app = express();
const router = require('./router');

// app.get('/user', (req, res) => {
//   console.log(req.query);
//   res.send({'age': 18});
// })

// app.post('/user', (req, res) => {
//   res.send('请求成功');
// })

// app.get('/user/:id/:name', (req, res) => {
//   console.log(req.params);
//   res.send({'age': 20});
// })

// app.use(express.static('./clock1'));
// app.use('/clock', express.static('./clock'));
app.use('/api', router);

app.listen(8090, () => {
  console.log('listen to 127.0.0.1');
})


