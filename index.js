//====================================================================================================//
// IMPORTs
//====================================================================================================//
const { token } = require('./config.json'); // Puxa o TOKEN do "config.json"
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');
//====================================================================================================//
// INSTANCE
//====================================================================================================//
const client = new Client({ 
	intents: [ 
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMembers, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.MessageContent 
	] 
});
//====================================================================================================//
// EXPORTs
//====================================================================================================//
module.exports = client;
//====================================================================================================//
// LEITURA DE COMANDOS POR PASTAS
//====================================================================================================//
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
    client.commands.set(command.data.name, command);
	// Define um novo item na Coleção com a chave como o nome do comando e o valor como o módulo exportado
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[AVISO] O comando em ${filePath} está faltando a propriedade "data" ou "execute" obrigatória!`);
	};
};
//====================================================================================================//
// INTERACTIONS
//====================================================================================================//
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
//====================================================================================================//
// INIT
//====================================================================================================//

//====================================================================================================//
// SCRIPTs
//====================================================================================================//

//====================================================================================================//
// TOKEN
//====================================================================================================//
//console.log(token); // Retorna o TOKEN do BOT
client.login(token); // Inicia o BOT puxando o TOKEN do "config.json"
//====================================================================================================//