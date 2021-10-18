const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'paste',
    description: 'Sends a link to hastebin',

    async run (client, message, args) {
        const paste = new Discord.MessageEmbed()
        .setColor('#ffbf00')
        .setTitle('Don\'t Paste Here! Use Hastebin!')
        .setURL('https://hastebin.com/')
        .setAuthor('WynnKunGz')
        .setDescription('Hastebin!')
        .addFields(
            { name : 'Step 1', value : 'Paste into Hatebin.', inline : true },
            { name : 'Step 2', value : 'Press Save.', inline : true },
            { name : 'Step 3', value : 'Copy the link and send it here!', inline : true }
        )
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(paste);
    }
}

console.log('PASTE command is ready!');