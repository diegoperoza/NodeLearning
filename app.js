//Modules

//const {john, peter} = require('./names')
//const sayHi = require('./utils')
//
//
//sayHi(john)
//sayHi(peter)

//const os = require('os')
//
//const user = os.userInfo()
//console.log(user)
//
//console.log(`The system uptime is ${os.uptime()} seconds\n`)
//
//const currentOS = {
//  name: os.type(),
//  release : os.release(),
//}
//
//console.log(currentOS)
//
//const path = require('path')
//
//console.log(path.sep)
//
//const filePath = path.join('/content','subfolder','test.txt')
//console.log(filePath)
//
//const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
//console.log(absolute)

//const {readFileSync, writeFileSync} = require('fs')
//
//const first = readFileSync('./content/first.txt', 'utf8')
//const second = readFileSync('./content/second.txt', 'utf8')
//
//writeFileSync(
//  './content/result-sync.txt',
//  `Here is the result: ${first}, ${second}`,
//  {flag:'a'}
//)

//const { readFile, writeFile } = require("fs");
//
//readFile("./content/first.txt", "utf8", (err, result) => {
//	if (err) {
//		console.log(err);
//		return;
//	}
//	const first = result;
//
//	readFile("./content/second.txt", "utf8", (err, result) => {
//		if (err) {
//			console.log(err);
//			return;
//		}
//		const second = result;
//		writeFile("./content/result-async.txt", `Here is the result: ${first}, ${second}`, (err, result) => {
//			if (err) {
//				console.log(err);
//				return;
//			}
//			console.log(result);
//		});
//	});
//});

const http = require('http')

const server = http.createServer((req,res) => {
  if(req.url === "/"){
    res.end('Welcome to our home page')
  }else if(req.url === "/about"){
    res.end('Here is our short history')
  }else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back home</a>
      `)
  }
})

server.listen(5000)


