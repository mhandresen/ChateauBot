const { Utils } = require("erela.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = { 
    config: {
        name: "nowplaying",
        description: "Shows what song is currently playing on the bot!",
        usage: "",
        category: "music",
        accessableby: "Member",
        aliases: ["np", "now"]
    },
    run: async (bot, message, args) => {
        const player = bot.music.players.get(message.guild.id);
        if(!player || !player.queue[0]) return message.channel.send("No song is currently playing!");
        const { title, author, duration, url, thumbnail } = player.queue[0];

        const embed = new RichEmbed()
        .setAuthor("Current Song Playing: ", message.author.displayAvatarURL)
        .setThumbnail(thumbnail)
        .setDescription(stripIndents`
        ${player.playing ? "▶️" : "⏸️"} **[${title}](${url})** \`${Utils.formatTime(duration, true)}\` by ${author}`);
        
        return message.channel.send(embed);
    }
}