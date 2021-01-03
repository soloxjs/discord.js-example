module.exports = {
    name: 'password',
    aliases: ['pw', 'pd'],
    category: 'Info',
    usage: 'password [@mention/username/user-id]',
      description: 'Shows user avatar',
      async execute(client,message,args) {

        let leng = args[0];
        if(!leng) return message.reply("Keine Länge für das zu generierende Passwort angegeben");

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
         
         if(makeid(leng).length > 2000) return message.reply("Passwort ist zu lang. \nGrößte Länge muss unter 2000 Zeichen sein")
         message.channel.send(makeid(leng));
          
  
      },
  };
  