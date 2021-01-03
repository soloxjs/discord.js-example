module.exports = {
    name: 'covid',
    aliases: ['coronavirus', 'cv'],
    description: 'Shows some coronavirus stats',
    usage: '-covid [country name]',
    category: 'info',
    async execute(client,message,args) {
        const covid = require('novelcovid');
        const Discord = require('discord.js')
        if (args.join(' ')) {
        let country = await covid.getCountry({country: args.join(' ')});
        if (!country || !country.country) return message.channel.send('Land wurde nicht gefunden.')
   let emb = new Discord.MessageEmbed()
   .setColor(0xFAFAFA)
   .setTitle(`Coronavirus Statistiken ${country.country} :`)
   .setDescription(`Totale Fälle: **${country.cases}**\nHeutige Fälle: **${country.todayCases}**\nTode: **${country.deaths}**\nToday deaths : **${country.todayDeaths}**\nRecovered : **${country.recovered}**\nActive cases: **${country.active}**\nCritical persons : **${country.critical}**`)
   .setFooter('Made by Lumap#0149')
   if (country.countryInfo) {emb.setThumbnail(country.countryInfo.flag)}
   message.channel.send(emb)
    } else {
        let all = await covid.getAll();
        let emb = new Discord.MessageEmbed()
        .setColor(0xFAFAFA)
        .setTitle('Coronavirus stats all around the world :')
        .setFooter('Made by Lumap#0149')
        .setDescription(`Total cases : **${all.cases}**\nTotal deaths : **${all.deaths}**\nTotal recovered : **${all.recovered}**\nUpdated : **${new Date(all.updated)}**`)
        message.channel.send(emb)
    }
    }
}