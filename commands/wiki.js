const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'wiki',
    description: 'Sends a link to the wiki',

    async run (client, message, args) {
        const wiki = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('Wiki!')
        .setURL('https://wkom.fandom.com/wiki/WynnKunGz%27s_Ores_Mod_Wiki')
        .setAuthor('WynnKunGz')
        .setDescription('WynnKunGz\'s Ores Mod\'s Official Wiki!')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(wiki);
    }
}

console.log('WIKI command is ready!');