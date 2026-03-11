import { z } from "zod";

export const signUpSchema = z.object({

  FullName: z
    .string()
    .trim()
    .min(4, "Full name must be at least 4 characters")
    .max(25, "Full name is too long")
    .regex(/^[A-Za-z\s'-]+$/, "Full name contains invalid characters")
    .refine(name => !/\s{2,}/.test(name), {
      message: "Full name cannot contain consecutive spaces",
    }),

  Email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Invalid email address")
    .refine(email => !/(test|example)/i.test(email), {
      message: "Disposable/test emails are not allowed",
    }),

  Password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30,"Password is too long")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[!@#$%^&*?~]/, "Password must include a special character"),

  ConfirmPassword: z.string()

}).refine(data => data.Password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});