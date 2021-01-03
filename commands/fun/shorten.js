const shorten = require('isgd');
const Discord = require("discord.js");
 
module.exports = {
    name: 'shorten',
    aliases: ['sn', 'shorten'],
    category: 'Fun',
    usage: 'shorten',
      description: 'Shows user avatar',
      async execute(client, message, args) {
   if(!args[0]) return message.channel.send('Nutzung: -shorten <URL> [Titel]')
   if(!args[1]) {
     shorten.shorten(args[0], function(res) {
       if(res.startsWith('Error:')) return message.channel.send('Keine valide URL.');
       message.channel.send(`**<${res}>**`)
     })
   } else {
     shorten.custom(args[0], args[1], function(res) {
       if(res.startsWith('Error:')) return message.channel.send(`**${res}**`);
       message.channel.send(`**<${res}>**`)
     })
   }
 }
  }