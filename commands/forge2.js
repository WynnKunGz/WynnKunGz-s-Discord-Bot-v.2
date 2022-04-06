const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
   name : 'forge2',
   description : 'Sends An Embed Showing Information about Forge Loader Version for Forge Versions',

   async run (client, message, args) {
      const forge2 = new Discord.MessageEmbed()
      .setColor('#fba800')
      .setTitle('Forge Version Information')
      .setAuthor('WynnKunGz')
      .setDescription('Information about Forge Versions')
      .addFields(
         { name : '26. Forge 1.16.5', value : 'Loader Version 36', inline : true},
         { name : '27. Forge 1.17.1', value : 'Loader Version 37', inline : true},
         { name : '28. Forge 1.18', value : 'Loader Version 38', inline : true},
         { name : '29. Forge 1.18.1', value : 'Loader Version 39', inline : true},
         { name : '30. Forge 1.18.2', value : 'Loader Version 40', inline : true}
      )
      .setTimestamp()
      .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

      message.channel.send(forge2);
   }
}

console.log('FORGE2 command is ready!');