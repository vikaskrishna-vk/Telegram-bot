const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => {
  ctx.reply("Hello, I'm your DJ bot!");
});
bot.command("mallya", (ctx) => {
  ctx.reply(
    "Mallya is a businessman known for his ventures in the liquor industry and his involvement in various controversies."
  );
});
bot.command("link", (ctx) => {
  ctx.replyWithHTML(
    '<a href="https://google.com">Click here for more info</a>'
  );
});
bot.command("location", (ctx) => {
  ctx.replyWithLocation(15.88, 74.52);
});
bot.command("video", async (ctx) => {
  await ctx.replyWithAnimation(
    "https://media.tenor.com/Y6wgfw_Yqo0AAAAj/black-dog-dog.gif"
  );
});
bot.launch();
