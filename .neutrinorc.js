module.exports = {

   Option:{
    output:'docs'
   }
   
  use: [
    ['neutrino-preset-airbnb-base'],
    ['neutrino-middleware-styles-loader'],
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