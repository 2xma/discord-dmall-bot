const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "$$";
const token = "ODQxMDAxODkxNTcxMzAyNDQw.YJgaDA.mvrxCHO2rne_k06ETCr_nvWMLqE";

client.on('ready', () => {
	console.log(`Login as: ${client.user.username}`)
	client.user.setActivity('! xma#0001 OP $$', {type: "WATCHING"})
})

client.on('message', message => {
	var args = message.content.substring(prefix.length).split(" ");

	switch(args[0]) {
		case 'dmall':
			if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Invalid command!");
			let msg = message.content.slice([prefix.length + 10])
			if(!msg) return message.channel.send(":x: Error! Valid usage: " + `${prefix}` + "dmall <message>");
			message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
				m.send(`${msg}`);
				console.log(`Send to: ${m}`)
			});
			let all = message.guild.members.filter(m => m.presence.status === 'online').size
			embed = new Discord.RichEmbed()
			.setTitle("Succes!")
			.setColor("GREEN")
			.setTimestamp()
			.setFooter('Xma OP')
			.setThumbnail(message.author.avatarURL)
			.setDescription(`Successfully send ${msg} to ${all} members!`)
			message.channel.send(embed)
	}
})

client.login(token);
