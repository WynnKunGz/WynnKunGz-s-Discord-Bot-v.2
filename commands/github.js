const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'github',
    description: 'Sends links to GitHub repositories',

    async run (client, message, args) {
        const github = new Discord.MessageEmbed()
        .setColor('#ffbf00')
        .setTitle('GitHub Links')
        .setAuthor('WynnKunGz')
        .setDescription('Useful GitHub Links')
        .addFields(
            { name : 'Cy4\'s Github', value : 'https://github.com/Cy4Shot/ModdingTutorial1.16'},
            { name : 'WKOM\'s Official GitHub', value : 'https://github.com/WynnKunGz/WynnKunGzOresMod'},
            { name : 'CCR\'s Official GitHub', value : 'https://github.com/WynnKunGz/Custom-Crafting-Recipes'}
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(github);
    }
}

console.log('GITHUB command is ready!');