const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'isst',
    description: 'Sends a link to the WKOM\'s Issue Tracker',

    async run (client, message, args) {
        const isst = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('Issue Tracker for WynnKunGz\'s Ores Mod')
        .setURL('https://wynnkungzoresmod.atlassian.net/')
        .setAuthor('WynnKunGz')
        .setDescription('WKOM\'s Issue Tracker')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(isst);
    }
}

console.log('ISST command is ready!');