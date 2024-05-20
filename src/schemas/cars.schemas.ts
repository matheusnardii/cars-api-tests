import { z } from "zod";

export const carSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string().min(1).nullish(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().min(0)
});

export type TCar = z.infer<typeof carSchema>

export const carCreateBodySchema = carSchema.omit({id: true});

export type TCarCreateBody = z.infer<typeof carCreateBodySchema>;

export const carUpdateBodySchema = carCreateBodySchema.partial();

export type TCarUpdateBody = z.infer<typeof carUpdateBodySchema>;
