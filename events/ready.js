//====================================================================================================//
// IMPORTs
//====================================================================================================//
const { Events } = require('discord.js');
const { ActivityType } = require('discord.js');
//====================================================================================================//
// SCRIPTs
//====================================================================================================//
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setStatus('idle');
		//client.user.setActivity('100% Operante e pronta para ajudar!', { type: ActivityType.Listening });
		//client.user.setActivity('Lendo os chats dedicados a mim', { type: ActivityType.Watching });
		//client.user.setActivity(`Bink's no Sake`, { type: ActivityType.Listening });
		client.user.setActivity('na EtheriusCraft - Network!', { type: ActivityType.Playing });	
		//client.user.setActivity('EtheriusCraft - Network!', { type: ActivityType.Competing });	
		console.log(`Olá! Meu nome é ${client.user.username}, estou pronta e ativa para moderar e informar!`);
	},
};
//====================================================================================================//
// 
//====================================================================================================//