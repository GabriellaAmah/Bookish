module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }, 
      "@babel/preset-typescript"
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    [
      "inline-dotenv",
      {
        "path":
          "/server/.env"
      }]]
}
