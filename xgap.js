const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    "🕵🏻‍♂️ سلام رفیق، به دنیای ناشناس‌ها خوش اومدی!\n\n🤖 اینجا XGap ـه؛ جایی که غریبه‌ها به آشنا تبدیل می‌شن!\n\nبرای شروع، جنسیتت رو انتخاب کن 👇",
    Markup.inlineKeyboard([
      [Markup.button.callback("👩🏻 من دخترم", "gender_female")],
      [Markup.button.callback("👨🏻 من پسرم", "gender_male")]
    ])
  );
});

bot.action(/^gender_(female|male)$/, async (ctx) => {
  const gender = ctx.match[1] === "female" ? "دختر" : "پسر";
  await ctx.answerCbQuery();
  await ctx.reply(`جنسیتت ثبت شد: ${gender}\n\n🎂 چند سالته؟ سن خودت رو با عدد انگلیسی بفرست.`);
});

bot.on("text", async (ctx) => {
  const text = ctx.message.text.trim();

  if (/^\d{1,2}$/.test(text)) {
    const age = Number(text);

    if (age >= 9 && age <= 99) {
      return ctx.reply("🏡 خب حالا استانت رو انتخاب کن.\n\nثبت استان رو در مرحله بعد اضافه می‌کنیم.");
    }
  }
});

bot.launch();
console.log("XGap started");
