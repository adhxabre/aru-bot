module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(
      `Aru Bot | Bot is now logged in as ${client.user.tag} and online!`
    );
  },
};
