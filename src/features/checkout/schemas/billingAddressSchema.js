import { literal, z } from "zod";

export const billingAddressSchema = z.object({
  FirstName: z
    .string()
    .trim()
    .min(1, "First Name is required")
    .max(20, "First Name is too long")
    .regex(/^[A-Za-z]+$/, "First Name contains invalid characters"),

  LastName: z
    .string()
    .trim()
    .min(1, "Last Name must have at least 1 character")
    .max(20, "Last Name is too long")
    .regex(/^[A-Za-z]+$/, "Last Name contains invalid characters")
    .or(z.literal("")) // 👈 allow empty string
    .optional(),

  CompanyName : z
  .string()
  .trim()
  .min(4 , "Company Name must have atleast 4 characters!")
  .max(25 , "Company Name is too Long !")
  .regex(/^[A-Za-z]+$/ , "Company Name contains invalid characters")
  .or(z.literal(""))
  .optional(),

  StreetAddress : z
  .string()
  .trim()
  .max(100,"Steet Address is too long")
  .regex(/^[A-Z0-9a-z]+$/, "Steet Address contains invalid characters"),

  AdditionalAddressInfo : z.string()
    .trim()
    .max(100, "Additional Address Information is too long")
    .regex(/^[A-Z0-9a-z]+$/, "Additional Address Information contains invalid characters")
    .or(z.literal(""))
    .optional(),

  CityName : z.string()
  .trim()
    .min(4,"City Name must have atleast 4 characters!")
    .max(35 , "City Name is too Long!")
    .regex(/^[A-Za-z]+$/, "City Name contains invalid characters"),
  
  Phone : z.string()
  .min(1 , "Phone Number is too Short")
  .max(20, "Phone Number is too Long")
  .regex(/^[0-9]+$/ , "Phone Number contains invalid characters"),

  Email : z.string()
  .email()
  .trim()
  .toLowerCase()
    .refine(value => !/(test|example)/i.test(value) , {
      message : "Disposable/test Emails are not allowed"
    })
});