import z from 'zod';

export const sayHelloSchemaDto = z
  .object({
    name: z.string(),
    address: z.string(),
  })
  .required();

export type SayHelloDto = z.infer<typeof sayHelloSchemaDto>;
