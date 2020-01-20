module.exports = {
  'presets': [
    ['@babel/env', {
      'targets': {
        'browsers': '> 0.25%, not dead',
        'node': 'current'
      },
      'loose': true
    }]
  ],

  'plugins': [
    'emotion',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }]
  ]
}