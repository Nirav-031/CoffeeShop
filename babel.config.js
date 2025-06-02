module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@store': './src/store',
          '@data': './src/data',
        },
      },
    ],
  ],
};
