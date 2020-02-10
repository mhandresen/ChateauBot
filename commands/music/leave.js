const { Utils } = require("erela.js")
const { RichEmbed } = require("discord.js")

module.exports = { 
    config: {
        name: "leave",
        description: "Makes the bot leave the current voice channel!",
        usage: "",
        category: "music",
        accessableby: "Member",
        aliases: ["leave", "stop", "l", "disconnect"]
    },
    run: async (bot, message, args) => {
        const { voiceChannel } = message.member;
        const player = bot.music.players.get(message.guild.id);

        if(voiceChannel && voiceChannel.id !== player.voiceChannel.id) return message.channel.send("You need to be in a voice channel to leave.");
        if(!player) return message.channel.send("No song currently playing in the server.");

        bot.music.players.destroy(message.guild.id);
        return message.channel.send("Successfully left the channel!");
        
    }
}