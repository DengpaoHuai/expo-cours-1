import { z } from "zod";

export const MinecraftAnimalFormSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom est requis")
    .max(20, "Le nom doit contenir entre 1 et 20 caractères"),
  type: z
    .string()
    .min(1, "Le type est requis")
    .max(20, "Le type doit contenir entre 1 et 20 caractères"),
  color: z
    .string()
    .min(1, "La couleur est requise")
    .max(20, "La couleur doit contenir entre 1 et 20 caractères"),
  size: z
    .string()
    .min(1, "La taille est requise")
    .max(20, "La taille doit contenir entre 1 et 20 caractères")
    .regex(/^\d+$/, "La taille doit être un nombre"),
});

export type MinecraftAnimalForm = z.infer<typeof MinecraftAnimalFormSchema> & {
  _id: string;
};
