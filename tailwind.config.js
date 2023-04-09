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
      btnDisabledTextColor: "#C0C0C0",
      btnColor: "#2F8AF4",
      btnColorDisabled: "#EBEBEB",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
