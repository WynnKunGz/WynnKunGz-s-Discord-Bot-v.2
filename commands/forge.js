const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
   name : 'forge',
   description : 'Sends An Embed Showing Information about Forge Loader Version for Forge Versions',

   async run (client, message, args) {
      const forge = new Discord.MessageEmbed()
      .setColor('#fba800')
      .setTitle('Forge Version Information')
      .setAuthor('WynnKunGz')
      .setDescription('Information about Forge Versions')
      .addFields(
         { name : '1. Forge 1.1 and 1.2.3', value : 'Loader Version 1', inline : true},
         { name : '2. Forge 1.2.4', value : 'Loader Version 2', inline : true},
         { name : '3. Forge 1.2.5', value : 'Loader Version 3', inline : true},
         { name : '4. Forge 1.3.2', value : 'Loader Version 4', inline : true},
         { name : '5. Forge 1.4', value : 'Loader Version 5', inline : true},
         { name : '6. Forge 1.4.1, 1.4.2, 1.4.3, 1.4.4, 1.4.5, 1.4.6 and 1.4.7', value : 'Loader Version 6', inline : true},
         { name : '7. Forge 1.5, 1.5.1 and 1.5.2', value : 'Loader Version 7', inline : true},
         { name : '8. Forge 1.6.1', value : 'Loader Version 8', inline : true},
         { name : '9. Forge 1.6.2, 1.6.3 and 1.6.4', value : 'Loader Version 9', inline : true},
         { name : '10. Forge 1.7.2 and 1.7.10', value : 'Loader Version 10', inline : true},
         { name : '11. Forge 1.8, 1.8.8 and 1.8.9', value : 'Loader Version 11', inline : true},
         { name : '12. Forge 1.9, 1.9.4, 1.10 and 1.10.2', value : 'Loader Version 12', inline : true},
         { name : '13. Forge 1.11 and 1.11.2', value : 'Loader Version 13', inline : true},
         { name : '14. Forge 1.12, 1.12.1 and 1.12.2', value : 'Loader Version 14', inline : true},
         { name : '15. Forge 1.13.2', value : 'Loader Version 25', inline : true},
         { name : '16. Forge 1.14.2', value : 'Loader Version 26', inline : true},
         { name : '17. Forge 1.14.3', value : 'Loader Version 27', inline : true},
         { name : '18. Forge 1.14.4', value : 'Loader Version 28', inline : true},
         { name : '19. Forge 1.15', value : 'Loader Version 29', inline : true},
         { name : '20. Forge 1.15.1', value : 'Loader Version 30', inline : true},
         { name : '21. Forge 1.15.2', value : 'Loader Version 31', inline : true},
         { name : '22. Forge 1.16.1', value : 'Loader Version 32', inline : true},
         { name : '23. Forge 1.16.2', value : 'Loader Version 33', inline : true},
         { name : '24. Forge 1.16.3', value : 'Loader Version 34', inline : true},
         { name : '25. Forge 1.16.4', value : 'Loader Version 35', inline : true}
      )
      .setTimestamp()
      .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

      message.channel.send(forge);
   }
}

console.log('FORGE command is ready!');