const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name: 'java',
      description: 'Sends An Embed Showing Information about Major Version for Java Versions',

      async run (client, message, args) {
            const java = new Discord.MessageEmbed()
            .setColor('#fba800')
            .setTitle('Java Version Information')
            .setAuthor('WynnKunGz')
            .setDescription('Information about Java Versions')
            .addFields(
                  { name : '1. Java 1.0', value : 'Major Version 45', inline : true },
                  { name : '2. Java 1.1', value : 'Major Version 45.3', inline : true },
                  { name : '3. Java 1.2', value : 'Major Version 46', inline : true },
                  { name : '4. Java 1.3', value : 'Major Version 47', inline : true },
                  { name : '5. Java 1.4', value : 'Major Version 48', inline : true },
                  { name : '6. Java 5', value : 'Major Version 49', inline : true },
                  { name : '7. Java 6', value : 'Major Version 50', inline : true },
                  { name : '8. Java 7', value : 'Major Version 51', inline : true },
                  { name : '9. Java 8', value : 'Major Version 52 (LTS)', inline : true },
                  { name : '10. Java 9', value : 'Major Version 53', inline : true },
                  { name : '11. Java 10', value : 'Major Version 54', inline : true },
                  { name : '12. Java 11', value : 'Major Version 55 (LTS)', inline : true },
                  { name : '13. Java 12', value : 'Major Version 56', inline : true },
                  { name : '14. Java 13', value : 'Major Version 57', inline : true },
                  { name : '15. Java 14', value : 'Major Version 58', inline : true },
                  { name : '16. Java 15', value : 'Major Version 59', inline : true },
                  { name : '17. Java 16', value : 'Major Version 60', inline : true },
                  { name : '18. Java 17', value : 'Major Version 61 (LTS)', inline : true },
            )
            .setTimestamp()
            .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

            message.channel.send(java);
      }
}

console.log('JAVA command is ready!');