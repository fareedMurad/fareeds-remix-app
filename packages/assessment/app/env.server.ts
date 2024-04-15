import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    SESSION_SECRET: z.string(),
    SUMSUB_SECRET_KEY: z.string(),
    SUMSUB_ACCESS_TOKEN: z.string(),
  },
  runtimeEnv: process.env,
});
