import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z
    .string()
    .min(3, { message: "Thread must be atleast 3 characters" })
    .nonempty(),
  accountId: z.string().nonempty(),
});

export const CommentValidation = z.object({
  thread: z
    .string()
    .min(3, { message: "Thread must be atleast 3 characters" })
    .nonempty(),
});
