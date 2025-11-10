module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Isso mantém a configuração padrão do Expo
    plugins: [
      // ...outros plugins que você possa ter...

      // Esta linha é OBRIGATÓRIA para o reanimated e deve ser a ÚLTIMA
      'react-native-reanimated/plugin',
    ],
  };
};