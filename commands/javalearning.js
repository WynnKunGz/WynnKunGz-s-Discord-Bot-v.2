const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'javalearning',
    description: 'Java Learning',

    async run (client, message, args) {
        const javalearning = new Discord.MessageEmbed()
        .setColor('#fba800')
        .setTitle('Before Modding You Should Learn Java')
        .setAuthor('WynnKunGz')
        .setDescription(`To start modding minecraft, it is highly recommended to 
        learn Java. This will make modding a LOT easier, and we'll have less work 
        to do as helpers :D. Also, we are a **modding** community. It is not our 
        job to help you with basic java problems like a missing import!`)
        .addFields([
            { name: 'Helpful resources to learn Java include:', value: `
            https://java-programming.mooc.fi/ - University of Helsinki (Free Course) Highly Recommended
            https://docs.oracle.com/javase/tutorial/ - Official Java Documentation and Tutorials Highly Recommended
            https://www.jetbrains.com/academy/ - JetBrains Academy (Paid Course)
            https://www.udemy.com/course/java-tutorial/ Udemy Video Tutorials (Free Course, Slightly Old)
            `},

            {name: 'Some of the concepts that you will need to know in order to make a mod include: ', value: `
                1. Object-Oriented Programming
                2. Basic Java Concepts (methods, fields, identifiers, primitive types, strings, arrays)
                3. Collections
                4. Naming Conventions (;javasyntax)
                5. Generics
                6. Knowing how to use your IDE (very important)
                7. Debugging (not essential, but it will make finding problems and bugs easier)
            `}
        ])
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(javalearning);
    }
}

console.log('JAVALEARNING command is ready!');