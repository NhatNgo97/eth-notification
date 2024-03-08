const { EmbedBuilder } = require("discord.js");

const embed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Some title")
  .setDescription("Some description here")
  .setURL("https://discord.js.org/")
  .addFields(
    { name: "Regular field title", value: "Some value here" },
    { name: "\u200B", value: "\u200B" },
    { name: "Inline field title", value: "Some value here", inline: true },
    { name: "Inline field title", value: "Some value here", inline: true }
  )
  .setImage("https://i.imgur.com/AfFp7pu.png")
  .setTimestamp();

module.exports = {
  embed,
};
