const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'help',
    description: 'Help Command',

    async run (client, message, args) {
        const help = new Discord.MessageEmbed()
        .setColor('#1b842c')
        .setTitle('Help!')
        .setAuthor('WynnKunGz')
        .setDescription('WynnKunGz\'s Discord Bot Custom Commands List')
        .addFields(
            { name : '1. trello', value : 'Sends a link to the trello boards.'},
            { name : '2. wiki', value : 'Sends a link to WynnKunGz\'s Ores Mod Wiki.'},
            { name : '3. ccr', value : 'Sends a Curseforge link to the CCR Datapack.'},
            { name : '4. wkom', value : 'Sends a Curseforge link to the WynnKunGz\'s Ores Mod.'},
            { name : '5. paste', value : 'Sends a link to Hastebin.'},
            { name : '6. isst', value : 'Sends a link to the WKOM\'s Issue Tracker.'},
            { name : '7. serverinfo', value : 'Sends the Server\'s Information.'},
            { name : '8. isonline', value : 'Checks if the bot is online.'},
            { name : '9. ping', value : 'Sends the bot\'s ping.'}
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(help);
    }
}

console.log('HELP command is ready!');