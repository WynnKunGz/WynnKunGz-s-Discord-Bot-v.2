const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'wkom',
    description: 'Sends CF link to WKOM',

    async run (client, message, args) {
        const wkom = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('WynnKunGz\'s Ores Mod!')
        .setURL('https://www.curseforge.com/minecraft/mc-mods/wynnkungzoresmod')
        .setAuthor('WynnKunGz')
        .setDescription('A CurseForge Link to the WynnKunGz\'s Ores Mod!')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(wkom);
    }
}

console.log('WKOM command is ready!');