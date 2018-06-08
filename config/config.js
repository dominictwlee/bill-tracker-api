const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  process.env.DB_NAME = 'billtrackertest';
}
