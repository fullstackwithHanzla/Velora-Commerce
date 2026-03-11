import z from "zod";

export const signInSchema = z.object({
    Email : z.string()
    .email("Invalid Email Address")
    .lowercase()
    .trim()
    .refine(Email => !/(test|example)/i.test(Email) , {
        message : "Disposable/test Emails are not allowed"
    }),

    Password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30,"Password is too long")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[!@#$%^&*?~]/, "Password must include a special character"),
})