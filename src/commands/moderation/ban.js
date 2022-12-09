const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user with a Reason!")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Pick the member you want to ban.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription(
          "The reason why you have to ban this person, Aru can ban without reason anyway ;3"
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
      content: `User <@${user.id}> is banned with reason ${
        !reason ? `is none` : `\`${reason}\``
      }.`,
      ephemeral: true,
    });
  },
};
