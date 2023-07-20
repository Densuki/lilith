// //====================================================================================================//
// // IMPORTs
// //====================================================================================================//
// const { SlashCommandBuilder, Events, EmbedBuilder, GatewayIntentBits, Collection } = require('discord.js');
// const { Configuration, OpenAIApi } = require('openai');
// const config = require('../config.json');
// const client = require('../index');
// const configuration = new Configuration({
//     apiKey: config.openai
// });
// const openai = new OpenAIApi(configuration);
// //====================================================================================================//
// // COMMAND BODY
// //====================================================================================================//
// module.exports = {
//     cooldown: 900,
// 	name: Events.MessageCreate,
// //====================================================================================================//
// // SCRIPTs
// //====================================================================================================//
// 	async execute(interaction, message) {
//         if(message.author.bot) return;
//         if(message.channel.id !== '580938347271421978') return;

//         //message.member.roles.cache.has('1129919996051595327');

//         if(message.member.roles.cache.some(role => role.name === '⊛〘IA〙')) {
        
//         let conversationLog = [{ role: 'system', content: 
//         `Você é um BOT programado para responder perguntas sobre os meus servidores de Minecraft. 
//         Lembre-se que é tudo referente a "EtheriusCraft - Network", mas você também pode responder quaisquer perguntas referente ao jogo "Minecraft".
//         Se o usuário fizer qualquer pergunta que não esteja relacionado a "EtheriusCraft - Network" ou "Minecraft", responda que você não é programado para este tipo de pergunta.
//         Qualquer falta de informação referente a "EtheriusCraft - Network", encaminhe o usuário a me procurar. Cole este comando: <@336311215099740160>.
//         ` }];

//         try {
//             await message.channel.sendTyping();

//             let prevMessages = await message.channel.messages.fetch({limit: 15});
//             prevMessages.reverse();

//             prevMessages.forEach((msg) => {
//                 if (msg.author.id !== client.user.id && message.author.bot) return;
//                 if (msg.author.id !== message.author.id) return;
                
//                 conversationLog.push({
//                     role: 'user',
//                     content: msg.content,
//                 });
//             });

//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: conversationLog
//         })
//         .catch((error) => {
//             console.log(`GPT ERROR: ${error}`)
//         });
//         message.reply(response.data.choices[0].message);
//         } catch (error){
//             console.log(`ERROR: ${error}`);
//         };
//     } else {
//         message.reply(
//             `<:owoKannaGun:1062092898058895431> Pare! <:GWossuMikuYawn:1062116317739634688> Você não está autorizado a falar aqui.`
//         )
//         }; 
//     }
// };
// //====================================================================================================//
// // 
// //====================================================================================================//