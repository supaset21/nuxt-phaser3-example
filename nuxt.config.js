import webpack from "webpack";

module.exports = {
  head: {
    titleTemplate: "Phaser Game - %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },

  build: {
    extractCSS: true,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      });
    }
  },

  plugins: [{ src: "~/plugins/phaser", ssr: false }]
};
