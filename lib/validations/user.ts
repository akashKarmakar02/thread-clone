import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(30, { message: "Name can't be longer than 30 characters" }),
  username: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(30, { message: "Name can't be longer than 30 characters" }),
  bio: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(1000, { message: "Name can't be longer than 30 characters" }),
});
