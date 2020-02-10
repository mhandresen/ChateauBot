const { Utils } = require("erela.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = { 
    config: {
        name: "skip",
        description: "Skips the song that is currently playing on the bot!",
        usage: "",
        category: "music",
        accessableby: "Member",
        aliases: ["s"]
    },
    run: async (bot, message, args) => {
        try{
			const player = bot.music.players.get(message.guild.id)
			if(!player)
				return message.channel.send(`No music playing!`);
			const queue = player.queue;
			let sum = 1;
			if(args && !isNaN(args))
				sum = args;
			sum = Math.min(sum, queue.length);
			queue.splice(0, sum);
			message.channel.send(`Skipped song!`);
			if(player.paused)
				player.resume();
            player.stop();
            if(player.queue.length == 0)
            {
                bot.music.players.destroy(message.guild.id);
            }
		} catch (err) {
			message.channel.send(`Error executing this command! \`\`\`xl\n${err.stack}\n\`\`\``);
		}
    }
}