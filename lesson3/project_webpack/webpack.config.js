module.exports = {
  output: {  // ファイルの出力設定
    filename: "bundle.js"  // 出力ファイル名
  },
  module: {
    loaders: [    // Loaderの設定
      {
        test: /\.css/,    // 対象となるファイルの拡張子
        // ローダー名。CSSならばstyle-loaderとcss-loaderが必要
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};