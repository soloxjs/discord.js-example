const Discord = require("discord.js");

const figlet = require("figlet");

module.exports = {
    name: 'ascii',
    aliases: ['aii'],
    category: 'utility',
    usage: 'ascii [text]',
      description: 'Shows user avatar',
      async execute(client, message, args) {
  var maxLen = 20;

  if (args.join(" ").length > maxLen)
    return message.channel.send("Nur 20 Charaktere erlaubt!");

  if (!args[0])
    return message.channel.send(
      `Bitte gib einen Text ein! zB: \`-ascii Hallo\` `
    );

  figlet(`${args.slice(0).join(" ")}`, function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      return;
    }

    message.channel.send(`${data}`, { code: "AsciiArt" });
  });
}
};
