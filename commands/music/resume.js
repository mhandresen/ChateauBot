const { Utils } = require("erela.js")
const { RichEmbed } = require("discord.js")

module.exports = { 
    config: {
        name: "resume",
        description: "Makes the player resume",
        usage: "",
        category: "music",
        accessableby: "Member",
        aliases: ["r"]
    },
    run: async (bot, message, args) => {
        const { voiceChannel } = message.member;
        const player = bot.music.players.get(message.guild.id);

        if(voiceChannel && voiceChannel.id !== player.voiceChannel.id) return message.channel.send("You need to be in a voice channel to leave.");
        if(!player) return message.channel.send("No song currently playing in the server.");
        if(player) return message.channel.send("Player is already playing");
        bot.music.players.resume();
        return message.channel.send("Resuming...");
    }
}