const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
   name: 'fgv',
   description: 'Sends An Embed Showing Information about Forge Versions (Recommended, Latest)',

   async run (client,message, args) {
      const fgv = new Discord.MessageEmbed()
      .setColor('#fba800')
      .setTitle('Forge Versions')
      .setAuthor('WynnKunGz')
      .setDescription('Information about Forge Versions')
      .addFields(
         { name : '1. Forge 1.1', value : 'Recommended : No RB, Latest : 1.3.4.29', inline : true},
         { name : '2. Forge 1.2.3', value : 'Recommended : No RB, Latest : 1.4.1.64', inline : true},
         { name : '3. Forge 1.2.4', value : 'Recommended : No RB, Latest : 2.0.0.68', inline : true},
         { name : '4. Forge 1.2.5', value : 'Recommended : No RB, Latest : 3.4.9.171', inline : true},
         { name : '5. Forge 1.3.2', value : 'Recommended : No RB, Latest : 4.3.5.318', inline : true},
         { name : '6. Forge 1.4', value : 'Recommended : No RB, Latest : 5.0.0.326', inline : true},
         { name : '7. Forge 1.4.1', value : 'Recommended : No RB, Latest : 6.0.0.329', inline : true},
         { name : '8. Forge 1.4.2', value : 'Recommended : No RB, Latest : 6.0.1.355', inline : true},
         { name : '9. Forge 1.4.3', value : 'Recommended : No RB, Latest : 6.2.1.358', inline : true},
         { name : '10. Forge 1.4.4', value : 'Recommended : No RB, Latest : 6.3.0.378', inline : true},
         { name : '11. Forge 1.4.5', value : 'Recommended : No RB, Latest : 6.4.2.448', inline : true},
         { name : '12. Forge 1.4.6', value : 'Recommended : No RB, Latest : 6.5.0.489', inline : true},
         { name : '13. Forge 1.4.7', value : 'Recommended : No RB, Latest : 6.6.2.534', inline : true},
         { name : '14. Forge 1.5', value : 'Recommended : No RB, Latest : 7.7.0.598', inline : true},
         { name : '15. Forge 1.5.1', value : 'Recommended : No RB, Latest : 7.7.2.682', inline : true},
         { name : '16. Forge 1.5.2', value : 'Recommended : 7.8.1.738, Latest : 7.8.1.738', inline : true},
         { name : '17. Forge 1.6.1', value : 'Recommended : No RB, Latest : 8.9.0.775', inline : true},
         { name : '18. Forge 1.6.2', value : 'Recommended : 9.10.1.871, Latest : 9.10.1.871', inline : true},
         { name : '19. Forge 1.6.3', value : 'Recommended : No RB, Latest : 9.11.0.878', inline : true},
         { name : '20. Forge 1.6.4', value : 'Recommended : 9.11.1.1345, Latest : 9.11.1.1345', inline : true},
         { name : '21. Forge 1.7.2', value : 'Recommended : 10.12.2.1161, Latest : 10.12.2.1161', inline : true},
         { name : '22. Forge 1.7.10', value : 'Recommended : 10.13.4.1614, Latest : 10.13.4.1614', inline : true},
         { name : '23. Forge 1.7.10 pre-4', value : 'Recommended : No RB, Latest : 10.12.2.1149', inline : true},
         { name : '24. Forge 1.8', value : 'Recommended : 11.14.4.1563, Latest : 11.14.4.1577', inline : true},
         { name : '25. Forge 1.8.8', value : 'Recommended : No RB, Latest : 11.15.0.1655', inline : true}
      )
      .setTimestamp()
      .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

      message.channel.send(fgv);
   }
}

console.log('FGV command is ready!')
