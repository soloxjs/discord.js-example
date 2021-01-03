module.exports = async (ready, client, boats) => {
    console.log(`[STARTED] Bot hochgefahren als ${client.user.username} mit ${client.users.cache.size} Usern`);
    
    let statuses = [
        `-help`,
        `rndm stuff`    ];
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {type: "STREAMING", url: "https://www.twitch.tv/#"});
    }, 22 * 1000)
    
    }
    