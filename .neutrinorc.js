module.exports = {
  use: [
    ['neutrino-preset-airbnb-base'],
    [
      'neutrino-preset-web',
      {
        html: {
          title: 'My App'
        }
      }
    ],
  ]
};