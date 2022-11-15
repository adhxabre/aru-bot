require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');
const { initCommands } = require('./src/commands/commands');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

initCommands()

client.on('ready', () => {
    console.log(`Aru Bot | Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(process.env.TOKEN)