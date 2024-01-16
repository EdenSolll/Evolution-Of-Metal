interface Config {
 port: string;
 db: {
   name: string | undefined;
   username: string | undefined;
   password: string | undefined;
 };
 s3: {
   accessKeyId: string | undefined;
   secretAccessKey: string | undefined;
   url: string;
   bucket: string;
 };
}

const config: Config = {
 port: import.meta.env.VITE_APP_PORT || '4200',
 db: {
   name: import.meta.env.VITE_APP_DB_NAME,
   username: import.meta.env.VITE_APP_DB_USERNAME,
   password: import.meta.env.VITE_APP_DB_PASSWORD,
 },
 s3: {
   accessKeyId: import.meta.env.VITE_APP_S3_ACCESS_KEY_ID,
   secretAccessKey: import.meta.env.VITE_APP_S3_SECRET_ACCESS_KEY,
   url: import.meta.env.VITE_APP_S3_URL || 'https://s3.csh.rit.edu',
   bucket: import.meta.env.VITE_APP_S3_BUCKET || 'songarchive',
 },
};

export default config;
