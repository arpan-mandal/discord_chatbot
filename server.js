const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Bot online, now please copy the link above and paste it in uptimerobot to make this bot 24/7 working!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
