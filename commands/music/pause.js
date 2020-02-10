const { Utils } = require("erela.js")
const { RichEmbed } = require("discord.js")

module.exports = { 
    config: {
        name: "pause",
        description: "Makes the player pause",
        usage: "",
        category: "music",
        accessableby: "Member",
        aliases: ["pp"]
    },
    run: async (bot, message, args) => {
        const { voiceChannel } = message.member;
        const player = bot.music.players.get(message.guild.id);

        if(voiceChannel && voiceChannel.id !== player.voiceChannel.id) return message.channel.send("You need to be in a voice channel to leave.");
        if(!player) return message.channel.send("No song currently playing in the server.");
        if(player.paused) return message.channel.send("Player is already paused!");
        bot.music.players.paused;
        return message.channel.send("Paused the player!");
        
    }
}