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

  plugins: [
    { src: "~/plugins/phaser", ssr: false },
    { src: "~/plugins/phaser3", ssr: false }
  ]

  // chainWebpack: config => {
  //   /* disable insertion of assets as data urls b/c Phaser doesn't support it */
  //   const rules = [
  //     { name: "images", dir: "img" },
  //     { name: "media", dir: "media" }
  //   ];
  //   rules.forEach(rule => {
  //     const ruleConf = config.module.rule(rule.name);

  //     ruleConf.uses.clear();

  //     ruleConf
  //       .use("file-loader")
  //       .loader("file-loader")
  //       .options({
  //         name: `${rule.dir}/[name].[hash:8].[ext]`
  //       });
  //   });
  // }
};
