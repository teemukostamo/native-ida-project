module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~src': './src',
          '~__test_helpers__': './__test_helpers__',
        },
      },
    ],
  ],
};
