const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'build',
    description: 'Check if build is Successful or not',

    async run (client, message, args) {
        const build = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('Build!')
        .setAuthor('WynnKunGz')
        .setDescription('Is the latest build successfully built?')
        .addFields(
            { name : '???', value : `Version ${version} is successfully built.`},
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(build);
    }
}

console.log('BUILD command is ready!');