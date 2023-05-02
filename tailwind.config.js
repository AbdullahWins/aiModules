module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gradientColor: "#FF9D80",
      disabledColor: "#797979",
      pureBlackColor: "#000000",

      blackHigh: "#474747",
      blackMid: "#6C6C6C",
      blackLow: "#919191",

      whiteHigh: "#FFFFFF",
      whiteMid: "#F5F5F5",
      whiteLow: "#E8E8E8",

      errorColor: "#FF4646",
      successColor: "#00AE5B",
      warningColor: "#FF6D00",
      infoColor: "#2D8EFF",
      alertColor: "#F4A100",

      // mainColor: "#FF6000",
      bgColor: "#D5D1D1",
      bgTextareaColor: "#F3F9FF",
      textHeaderColor: "#525252",
      btnDisabledTextColor: "#C0C0C0",
      btnColor: "#2F8AF4",
      btnColorDisabled: "#EBEBEB",
      titleColor: "#242526",
      subTitleColor: "#808080",

      //btn colors
      btnGradientStart: "#242526",
      btnGradientEnd: "#8A8A8A",
      btnHoverColor: "#7C7C7C",
      btnNavColor: "#242526",
      cardGradientStart: "#6F7BF7",
      cardGradientEnd: "#9BDCF8",
      brownFadeColor: "#757575",
      brownTextColor: "#818181",

      // about
      aboutTextStart: "#242526",
      aboutTextEnd: "#8A8A8A",
      aboutGradientStart: "#000000",
      aboutGradientEnd: "#B6B6B6",
      aboutHeaderColor: "#A5A5A5",
      aboutDetailsColor: "#767676",
    },
    extend: {
      backgroundImage: {
        mainBg: "url('/src/assets/bg/BG.svg')",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: false,
  },
};
