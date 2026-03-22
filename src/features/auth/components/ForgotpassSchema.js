import z from "zod";

export const forgotPassSchema = z.object({
    Email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid email address")
        .refine(email => !/(test|example)/i.test(email), {
          message: "Disposable/test emails are not allowed",
    }),
})