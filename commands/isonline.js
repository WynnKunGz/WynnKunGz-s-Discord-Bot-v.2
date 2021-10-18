const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'isonline',
    description: 'Check if the bot is online or not',

    async run (client, message, args) {
        const isonline = new Discord.MessageEmbed()
        .setColor('#ffbf00')
        .setTitle('WynnKunGz\'s Bot\'s Status')
        .setAuthor('WynnKunGz')
        .setDescription('Is the bot online?')
        .addField('Yes!', 'The Bot is online')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
       
        message.channel.send(isonline);
    }
}

console.log('ISONLINE command is ready!');