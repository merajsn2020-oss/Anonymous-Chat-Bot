import { Markup } from "telegraf";

export default {
  data: {
    name: "register",
    description: "شروع ثبت‌نام XGap"
  },
  only_privet: true,
  run: async (client: any, ctx: any) => {
    await ctx.reply(
      "🕵🏻‍♂️ سلام رفیق، به دنیای ناشناس‌ها خوش اومدی!\n\nبرای شروع، جنسیتت رو انتخاب کن 👇",
      Markup.inlineKeyboard([
        [Markup.button.callback("👩🏻 من دخترم", "reg_female")],
        [Markup.button.callback("👨🏻 من پسرم", "reg_male")]
      ])
    );
  }
};
