const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'trello',
    description: 'Sends links to trello',

    async run (client, message, args) {
        const trello = new Discord.MessageEmbed()
        .setColor('#ffbf00')
        .setTitle('Idea Suggestions!')
        .setAuthor('WynnKunGz')
        .setDescription('Before you submit a suggestion, check if it\'s already planned!\nYou can see the list of things that are planned and added here.')
        .addFields(
            { name : 'WKOM', value : 'https://trello.com/b/VyJRFGsy'},
            { name : 'CCR', value : 'https://trello.com/b/FR6BdUhW'}
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(trello);
    }
}

console.log('TRELLO command is ready!');