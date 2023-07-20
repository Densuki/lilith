//====================================================================================================//
// IMPORTs
//====================================================================================================//
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var logo = 'https://i.imgur.com/M2D36HZ.png';
var lilith1 = 'https://i.imgur.com/ijr8ksn.png';
var lilith2 = 'https://i.imgur.com/A2HXYFs.png';
//====================================================================================================//
// SCRIPT
//====================================================================================================//
module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Veja o meu ping e quanto tempo demoro a responder.'),
//====================================================================================================//
// COMMAND BODY
//====================================================================================================//
    async execute(interaction, message) {
        const Embed = new EmbedBuilder()
        .setColor(0x00FFF8)
        .setTitle('PING')
        //.setURL('https://discord.js.org/')
        //.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        //.setThumbnail(lilith)
        .setAuthor({ name: 'EtheriusCraft - Network', iconURL: logo})
        .setDescription('Veja o ping do bot e seu tempo de resposta')
        .addFields(
            { name: 'Meu ping é', value: `${interaction.client.ws.ping}` }
        )
        .setImage(lilith2)
        .setTimestamp()
        .setFooter({ text: `EtheriusCraft - Network • © Todos os direitos reservados.`, iconURL: logo });

        await interaction.reply( { embeds: [Embed], ephemeral: true });
    },
};
//====================================================================================================//
// REJECTs | MODELs
//====================================================================================================//
// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('ping')
//         .setDescription('Envia uma mensagem chamada de "Ping" e depois recebe um "pong!"'),
//
//     async execute(interaction) {
//         await interaction.reply('pong!');
//     },
// };
//====================================================================================================//