const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

// server.on('request', (req, res) => {
//   const str = `request url: ${req.url}, request methods: ${req.method}`;
//   res.setHeader('Content-Type','text/html;charset=utf-8');
//   res.end(str);
// });

// server.listen(8080,function() {
//   console.log('listen to 8080');
// })

// server.on('request', (req, res) => {
//   const url = req.url;
//   let content = '404 Not Found';
//   if (url === '/' || url === '/index.html') {
//     content = '<h1>首页</h1>'
//   } else if (url === '/about.html') {
//     content = '<h1>about页面</h1>';
//   }
//   res.setHeader('Content-Type', 'text/html;charset=utf-8');
//   res.end(content);
// });
// server.listen(8080, () => {
//   console.log('listen to 8080');
// })

let fpath = '';
server.on('request', (req, res) => {
  const url = req.url;
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html');
  } else {
    fpath = path.join(__dirname, './clock', url);
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  fs.readFile(fpath, 'utf8', (err, data) => {
    if (err) {
      return res.end('404 Not found');
    }
    res.end(data);
  })
})
server.listen(8081, () => {
  console.log('listen to 8080');
})

console.log(module);