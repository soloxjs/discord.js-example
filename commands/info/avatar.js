module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'av'],
    category: 'utility',
    usage: 'avatar [@mention/username/user-id]',
      description: 'Shows avatar of an user',
      async execute(client, message) {
          let member = message.mentions.members.first() || message.member;
     
          const Discord = require('discord.js')
              let avatar = member.user.avatarURL({format: 'png', dynamic: true, size: 2048})
              let avataremb = new Discord.MessageEmbed()
              .setColor(0xFAFAFA)
              .setDescription(`[Click here to download](${avatar})`)
              .setImage(avatar)

              message.channel.send("Avatar wird geladen").then((i) => {
                  i.edit(avataremb, ({ time: 3000 }))
              })
              
          
  
      },
  };
  