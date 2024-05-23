module.exports = {
  apps: [
    {
      name: 'translate',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}