import { cleanEnv, num, str } from 'envalid';

const environmentDefinitions = {
  // POSTGRES
  POSTGRES_USER: str({ default: '', desc: 'Postgres username' }),
  POSTGRES_PASSWORD: str({ default: '', desc: 'postgres password' }),
  POSTGRES_NAME: str({ default: 'postgres', desc: 'postgres database name' }),
  POSTGRES_PORT: num({ default: 5432, desc: 'postgres database port number' }),
  POSTGRES_HOST: str({ default: 'localhost', desc: 'postgres database host' }),
};

export const env = cleanEnv(process.env, environmentDefinitions);
Object.assign(process.env, env);
export type Env = Pick<typeof env, keyof typeof environmentDefinitions>;
