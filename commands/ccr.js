const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'ccr',
    description: 'Sends a CF link to CCR',

    async run (client, message, args) {
        const ccr = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('Custom Crafting Recipes Datapack!')
        .setURL('https://www.curseforge.com/minecraft/customization/custom-crafting-recipes-ccr')
        .setAuthor('WynnKunGz')
        .setDescription('A CurseForge Link to the Custom Crafting Recipes Datapack!')
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);
        
        message.channel.send(ccr);
    }
}

console.log('CCR command is ready!');