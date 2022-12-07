module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccm8n61a6gdm84fv149g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_25by'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '1feEHiFMtzSdLpKtSQkIE8B5CvgBr0Ph'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
