type Environment = {
  appEnv: 'development' | 'staging' | 'production';
  apiBaseUrl: string;
};

const resolveEnv = (): Environment => {
  const appEnv = (process.env.EXPO_PUBLIC_APP_ENV ??
    'development') as Environment['appEnv'];
  const apiBaseUrl =
    process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

  return {
    appEnv,
    apiBaseUrl,
  };
};

export const ENV = resolveEnv();
