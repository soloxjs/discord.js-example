const Discord = require('discord.js');
const client = new Discord.Client()
const fs = require('fs');
const config = require('./config.json');
client.config = config

const msg = require('./events/message.js');
const rdy = require('./events/ready.js');

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.categories = require("fs").readdirSync("./commands/")

for (let i = 0; i < client.categories.length; i++) {
  var commandFiles = fs
    .readdirSync(`./commands/${client.categories[i]}`)
    .filter(file => file.endsWith('.js'));
  for (var file of commandFiles) {
    var command = require(`./commands/${client.categories[i]}/${file}`);
    client.commands.set(command.name, command);
    console.log(`[LOADED] Cmd ${command.name}.js`);
    if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
  }
}

client.on("ready", async ready => {
  rdy(ready, client, );
});

client.on('message', async message => {
	msg(client, message);
});

  client.on('messageUpdate', async (oldMessage, message) => {
	msg(client, message);
});

client.login(client.config.token);
