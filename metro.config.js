// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const { assetExts } = defaultConfig.resolver;

  return {
    resolver: {
      sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx'],
      assetExts: [...assetExts, 'jpg', 'jpeg'], // Ekstensi file gambar ditambahkan di sini
    },
  };
})();
