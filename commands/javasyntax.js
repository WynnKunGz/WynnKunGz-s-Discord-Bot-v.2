const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'javasyntax',
    description: 'Java Syntax',

    async run (client, message, args) {
        const javasyntax = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Java Naming Conventions')
        .setURL('https://www.javatpoint.com/java-naming-conventions#:~:text=CamelCase%20in%20Java%20naming%20conventions%20Java%20follows%20camel-case,etc.%20Next%20Topic%20Objects%20and%20Classes%20in%20Java')
        .setAuthor('WynnKunGz')
        .setDescription('Java Syntax or Java Naming Conventions')
        .addFields([
            {name: 'What are Java naming conventions', value: `Java naming 
            conventions are **a rule** to follow when you decide what to name 
            your identifiers such as classes, packages, variables, constants, 
            methods, etc.`, inline: false},
            {name: `Classes`, value: `Class names should start with an uppercase 
            letter. The name should be a noun such as **Color, Button, System, 
            Thread**, etc.`},
            {name: `Interfaces`, value: `Interface names should start with an 
            uppercase I. The name should be an adjective such as **IRunnable, 
            IRemote, IActionListener**.`},
            {name: 'Methods', value: `Method names should be **camelCase**, with 
            the first letter being lowercase.`},
            {name: 'Variables', value: `Variable names should be **camelCase**, 
            with the first letter being lowercase. They should not start with 
            special characters like & (ampersand), $ (dollar), _ (underscore).
            **Avoid using one-character variables such as x, y, z.**`},
            {name: `Packages`, value: `Package names should have only lowercase 
            letter such as **java**, **lang**. If the name contains multiple 
            words, it should be separated by dots (.) such as **java.util**, 
            **java.lang**.`},
            {name: `Constants (a.k.a. static final fields)`, value: `The name of 
            a constant field should be in uppercase letters such as **RED**, 
            **YELLOW**. If the name contains multiple words, each word should 
            be separated by an underscore (_) such as **MAX_PRIORITY**. It may 
            contain digits but **not** as the first character.`},
            {name: `CamelCase naming conventions`, value: `Java follows 
            camel-case syntax for naming a class, interface, method, and variable.
            If the name is combined with two words, the second word will start 
            with an uppercase letter such as **actionPerformed(), firstName, 
            BiggerInt, IActionEvent, IActionListener**, etc.`}
        ])
        .setTimestamp()
        .setFooter(`WynnKunGz\'s Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(javasyntax);
    }
}

console.log('JAVASYNTAX command is ready!');