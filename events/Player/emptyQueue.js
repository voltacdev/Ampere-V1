const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `Tidak ada lagi lagu dalam antrian! ❌`})
    .setColor('#2f3136')

    queue.metadata.send({ embeds: [emptyQueue] })
}
