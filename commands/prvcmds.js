const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'prvcmds',
    description: 'Sends a list of private commands',

    async run (client, message, args) {
        const prvcmds = new Discord.MessageEmbed()
        .setColor('#00a800')
        .setTitle('Help! (Private)')
        .setAuthor('WynnKunGz')
        .setDescription('Private Custom Commands List!')
        .addFields(
            { name : '1. github', value : 'GitHub Links', inline: true},
            { name : '2. build', value : 'Builds', inline : true},
            { name : '3. linktree', value : 'Linktree', inline : true}
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(prvcmds);
    }
}

console.log('PRVCMDS command is ready!');