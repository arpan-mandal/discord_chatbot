require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(`**❌ | ${text} **`)
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "put channel ID here"
//=============================================


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=${encodeURIComponent(message.content)}`);
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})

client.on('ready', async () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
})

client.login(process.env.TOKEN);
