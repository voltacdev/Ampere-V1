const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {


    const methods = ['disabled', 'track', 'queue'];

    const timestamp = track.duration;

    const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

    if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;
        const embed = new EmbedBuilder()
        .setAuthor({name: `Media player sedang memainkan lagu ${track.title} di channel ${queue.channel.name} 🎧`})
        // .setDescription(`Penyanyi **${track.author}**\nJudul **${track.title}**\nVolume **${queue.node.volume}**%\nLoop mode **${methods[queue.repeatMode]}**`)
        // .setEmoji('1060975678574579764')
        .addFields(
            { name: ':hourglass: Durasi:', value: `\`${trackDuration}\``, inline: true },
            { name: 'Penyanyi:', value: `\`${track.author}\``, inline: true },
            { name: 'Judul :', value: `\`${track.title}\``, inline: true },
            { name: 'Volume :', value: `\`${queue.node.volume}\``, inline: true },
            { name: 'Loop Mode :', value: `\`${methods[queue.repeatMode]}\``, inline: true },
            { name: 'Request dari :', value: `${track.requestedBy}`, inline: true }
        )
        .setThumbnail(track.thumbnail)
        .setTimestamp()
        .setFooter({ text: 'Voltz - Ampere Project⚡'})
        
        const back = new ButtonBuilder()
        .setLabel('back')
        .setEmoji('1108035865969705051')
        .setCustomId(JSON.stringify({ffb: 'back'}))
        .setStyle('Secondary')
        
        const resumepause = new ButtonBuilder()
        .setLabel('Play / Pause')
        .setEmoji('1188365041913839687')
        .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
        .setStyle('Success')
        
        const skip = new ButtonBuilder()
        .setLabel('Skip')
        .setEmoji('1108036462437478460')
        .setCustomId(JSON.stringify({ffb: 'skip'}))
        .setStyle('Secondary')
        
        const stop = new ButtonBuilder()
        .setLabel('Stop')
        .setEmoji('1107897594291691541')
        .setCustomId(JSON.stringify({ffb: 'stop'}))
        .setStyle('Danger')
        
        const loop = new ButtonBuilder()
        .setLabel('Loop')
        .setEmoji('1107897548406009867')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Secondary')
        
        const shuffle = new ButtonBuilder()
        .setLabel('Shuffle')
        .setEmoji('1107897567594942525')
        .setCustomId(JSON.stringify({ffb: 'shuffle'}))
        .setStyle('Secondary')
        
        const volumedown = new ButtonBuilder()
        .setLabel('Vol -')
        .setEmoji('1107897605574361108')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Secondary')
        
        const volumeup = new ButtonBuilder()
        .setLabel('Vol +')
        .setEmoji('1107897611635134545')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Secondary')
    
        const lyrics = new ButtonBuilder()
        .setLabel('Lirik')
        .setEmoji('1107897508312657930')
        .setCustomId(JSON.stringify({ffb: 'lyrics'}))
        .setStyle('Secondary')

        const save = new ButtonBuilder()
        .setLabel('💾 Save')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Secondary')


        const row1 = new ActionRowBuilder().addComponents(back, resumepause, skip, loop, stop)
        const row2 = new ActionRowBuilder().addComponents(shuffle, volumedown, volumeup, save, lyrics)
        // const row3 = new ActionRowBuilder().addComponents()

        queue.metadata.send({ embeds: [embed], components: [row1, row2] })
        // inter.editReply({ embeds: [embed], components: [row1, row2, row3] })

}
