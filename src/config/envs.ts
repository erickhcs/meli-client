import getConfig from "next/config";

type RuntimeEnvs = {
  publicRuntimeConfig: {
    API_HOST: string;
  };
};

export const { publicRuntimeConfig: ENVS }: RuntimeEnvs = getConfig();
