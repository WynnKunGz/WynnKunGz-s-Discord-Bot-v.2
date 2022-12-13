const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
   name: 'fgv2',
   description: 'Sends An Embed Showing Information about Forge Versions (Recommended, Latest)',

   async run (client,message, args) {
      const fgv2 = new Discord.MessageEmbed()
      .setColor('#fba800')
      .setTitle('Forge Versions Part 2')
      .setAuthor('WynnKunGz')
      .setDescription('Information about Forge Versions')
      .addFields(
         { name : '26. Forge 1.8.9', value : 'Recommended : 11.15.1.2318, Latest : 11.15.1.2318', inline : true}
      )
      .setTimestamp()
      .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

      message.channel.send(fgv2);
   }
}

console.log('FGV2 command is ready!')
