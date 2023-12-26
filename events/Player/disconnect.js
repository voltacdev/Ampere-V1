const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Terputus dari Voice channel, menghapus antrian! ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
