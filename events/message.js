const Discord = require('discord.js');
module.exports = async (client, message) => {
   let prefix = client.config.prefix
  if (!message.guild || message.channel.type === "dm" || message.author.bot || message.author === client.user || message.webhookID) return;
  
  if (message.content.toLowerCase().startsWith(prefix)) {
  
  let del = message.delete();
   
    const commandName = message.content.slice(prefix.length).toLowerCase().split(' ')[0].toLowerCase()
    const args = message.content.slice(prefix.length).split(' ').slice(1)
    const command = client.commands.get(commandName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!command) return;
    if (command.category === 'owner') {
      if (message.author.id !== client.config.ownerID) return message.reply("You can't execute Owner Commands :^).")
    }
    
    try {
      
      await command.execute(client, message, args, del)

    } catch(err) {

      console.log(err);

    }
  }

}
