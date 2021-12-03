// module.exports = {
//     multipass: true, // boolean. false by default
//     datauri: 'base64', // 'base64', 'enc' or 'unenc'. 'base64' by default
//     js2svg: {
//       indent: 2, // string with spaces or number of spaces. 4 by default
//       pretty: true, // boolean, false by default
//     },
//   };
  
  module.exports = {
    plugins: [
      // enable a built-in plugin by name
      'prefixIds',
      'cleanupAttrs',
      'removeDoctype',
      'minifyStyles',
      'removeTitle'
    ],
  };

  