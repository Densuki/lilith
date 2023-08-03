//====================================================================================================//
// IMPORTs
//====================================================================================================//
const { REST, Routes } = require('discord.js');
const clientId = process.env.clientId;
const guildId = process.env.guildId;
//const { clientId, guildId } = require('./config.json');
const token = process.env.TOKEN;
const fs = require('node:fs');
//====================================================================================================//
// LEITURA DE COMANDOS
//====================================================================================================//
const commands = [];
// Filtrando os arquivos que terminam em .js (arquivos JavaScript)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//====================================================================================================//
// SCRIPTs
//====================================================================================================//
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
};

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(`Iniciando ${commands.length} (/) comandos.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log(`Recarregado com sucesso ${data.length} (/) comandos.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
//====================================================================================================//
// 
//====================================================================================================//