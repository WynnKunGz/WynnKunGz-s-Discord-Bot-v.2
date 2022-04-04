const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'help',
    description: 'Help Command',

    async run (client, message, args) {
        const help = new Discord.MessageEmbed()
        .setColor('#00a800')
        .setTitle('Help!')
        .setAuthor('WynnKunGz')
        .setDescription('WynnKunGz\'s Discord Bot Custom Commands List')
        .addFields(
            { name : '1. trello', value : 'Sends a link to the trello boards.', inline: true},
            { name : '2. wiki', value : 'Sends a link to WynnKunGz\'s Ores Mod Wiki.', inline : true},
            { name : '3. ccr', value : 'Sends a Curseforge link to the CCR Datapack.', inline : true},
            { name : '4. wkom', value : 'Sends a Curseforge link to the WynnKunGz\'s Ores Mod.', inline : true},
            { name : '5. paste', value : 'Sends a link to Hastebin.', inline : true},
            { name : '6. isst', value : 'Sends a link to the WKOM\'s Issue Tracker.', inline : true},
            { name : '7. serverinfo', value : 'Sends the Server\'s Information.', inline : true},
            { name : '8. isonline', value : 'Checks if the bot is online.', inline : true},
            { name : '9. ping', value : 'Sends the bot\'s ping.', inline : true},
            { name : '10. javalearning', value : 'Sends information and links to Java learning sources', inline : true},
            { name : '11. javasyntax', value : 'Sends information about Java Syntax/Java Naming Conventions', inline : true},
            { name : '12. java', value : 'Shows Information about Java Versions', inline : true}
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(help);
    }
}

console.log('HELP command is ready!');