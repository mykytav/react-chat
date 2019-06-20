module.exports = {
  presets: ['@babel/typescript'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
      },
    ],
  ],
};
