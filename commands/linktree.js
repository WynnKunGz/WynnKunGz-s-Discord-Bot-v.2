const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'linktree',
    description: 'Sends a link to the official WK\'s Linktree',

    async run (client, message, args) {
        const linktree = new Discord.MessageEmbed()
        .setColor('#ffbf00')
        .setTitle('WynnKunGz\'s Linktree')
        .setURL('https://linktr.ee/WynnKunGz')
        .setAuthor('WynnKunGz')
        .setDescription('Link to WynnKunGz\'s Linktree')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(linktree);
    }
}

console.log('LINKTREE command is ready!');