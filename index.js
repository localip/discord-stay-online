const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();

const client = new Client({
	checkUpdate: false,
	presence: {
		afk: true
	}
});

client.on('ready', () => console.log(`Ready as ${client.user.tag}`));
client.login(process.env.TOKEN);