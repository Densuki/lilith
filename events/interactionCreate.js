//====================================================================================================//
// IMPORTs
//====================================================================================================//
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.cooldowns = new Collection();
const { cooldowns } = client;
//====================================================================================================//
// SCRIPTs
//====================================================================================================//
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) {
            console.error(`Nenhum comando chamado "${interaction.commandName}" foi encontrado.`);
            return;
        };

        if (!cooldowns.has(command.data.name)) {
            cooldowns.set(command.data.name, new Collection());
        };
        
        const now = Date.now();
        const timestamps = cooldowns.get(command.data.name);
        const defaultCooldownDuration = 3;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;
        
        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1000);
                return interaction.reply({ content: `<:owoKannaGun:1062092898058895431> Parado aí! A menos que você seja um "**Senhor do Tempo**", terá que esperar <t:${expiredTimestamp}:R> para utilizar o comando \`${command.data.name}\` novamente.`, ephemeral: true });
            };
        };

        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
            }
        };
	},
};
//====================================================================================================//
// 
//====================================================================================================//