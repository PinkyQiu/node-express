const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

// fs.readFile('./1.js', 'utf8', function(err,data) {
//   console.log(err);
//   console.log(data);
// })

// fs.writeFile('./2.js', 'abcde', function(err,data) {
//   if (err) {
//     return console.log('出错了');
//   }
//   console.log(data);
// })

// fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
//   if (err) {
//     return console.log(err.message);
//   }
//   const old = dataStr.split(' ');
//   let newArr = [];
//   old.forEach(item => {
//     newArr.push(item.replace('=',':'))
//   })
//   const str = newArr.join('\r\n');
//   fs.writeFile('./2.txt', str, function(err, dataStr) {
//     if (err) {
//       return console.log(err.message);
//     }
//     console.log(dataStr);
//   })
// })

// fs.writeFile(__dirname + '/3.txt', 'abc2233333333', function(err, dataStr) {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('success' + __dirname);
// })

// fs.writeFile(path.join(__dirname, './4.txt'), '123456', function(err, dataStr) {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('success', dataStr);
// })

// const fpath = '/a/b/c/d/index.html';
// console.log(path.basename(fpath));
// console.log(path.basename(fpath, '.html'));
// console.log(path.extname(fpath));

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message);
  }
  resolveCss(dataStr);
  resolveJs(dataStr);
  resolveHtml(dataStr);
})

function resolveCss(data) {
  const r1 = regStyle.exec(data);
  const newCss = r1[0].replace('<style>', '').replace('</style>', '');
  fs.writeFile(path.join(__dirname, '/index.css'), newCss, function(err, data) {
    if (err) {
      return console.log(err.message);
    }
  })
}

function resolveJs(data) {
  const r2 = regScript.exec(data);
  const newJs = r2[0].replace('<script>', '').replace('</script>', '');
  fs.writeFile(path.join(__dirname, '/index.js'), newJs, function(err, data) {
    if (err) {
      return console.log(err.message);
    }
    console.log(data);
  })
}

function resolveHtml(data) {
  const newHtml = data.replace(regStyle, '<link herf="./index.css" rel="stylesheet"/>').replace(regScript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, '/index1.html'), newHtml, function(err, data) {
    if (err) {
      return console.log(err.message);
    }
    console.log(data);
  })
}