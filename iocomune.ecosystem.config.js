module.exports = {
  apps: [
    {
      name: 'io-comune-volto',
      script: 'build/server.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
