const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a user with a Reason!")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Pick the member you want to kick.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription(
          "The reason why you have to kick this person, Aru can kick without reason anyway ;3"
        )
    ),
  async execute(interaction, client) {
    const user = interaction.options.getUser("target");
    let reason = interaction.options.getString("reason");
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) reason = "No reason provided.";

    await member.kick(reason).catch(console.error);
    await interaction.reply({
      content: `User <@${user.id}> is kicked with reason ${
        !reason ? `is none` : `\`${reason}\``
      }.`,
      ephemeral: true,
    });
  },
};
