  
module.exports = {
    name: 'ping',
    usage: '-ping',
    description: 'Ping? Pong! Shows your lag',
    category: 'misc',
    async execute(client,message) {
        message.channel.send(`Pong! WS ping beträgt **${client.ws.ping}** ms!`)
    },
}