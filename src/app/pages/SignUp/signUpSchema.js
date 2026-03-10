import z from "zod";


export const signUpSchema = z.object({
      FullName : z.string(),
      Email : z.string(),
      Password : z.string(),
      ConfirmPassword : z.string(),
  }).superRefine((data , ctx) => {
    const {FullName , Email , Password , ConfirmPassword} = data;

    if(FullName.includes("admin")){
      ctx.addIssue({
        message : "Full name cannot contain 'admin' ",
        path : ["FullName"],
        code : z.ZodIssueCode.custom
      })
    }

    if(FullName.length < 4 ){
      ctx.addIssue({
        message : "Full name must be at least 4 characters long.",
        path : ["FullName"],
        code : z.ZodIssueCode.custom
      })
    }
    if(!/^[A-Za-z\s]+$/.test(FullName)){
      ctx.addIssue({
        message : "Full name must contain only letters and spaces.",
        path : ["FullName"],
        code : z.ZodIssueCode.custom
      })
    }
    if(/\s{2,}/.test(FullName)){
      ctx.addIssue({
        message : "Full name cannot contain multiple consecutive spaces.",
        path : ["FullName"],
        code : z.ZodIssueCode.custom
      })
    }
    if(/_/.test(FullName)){
      ctx.addIssue({
        message : "Full name cannot contain underscores (_) .",
        path : ["FullName"],
        code : z.ZodIssueCode.custom
      })
    }
    if(!z.string().email().safeParse(Email).success){
      ctx.addIssue({
        message : "Please enter a valid email address.",
        path : ["Email"],
        code : z.ZodIssueCode.custom
      })
    }
    if(Email !== Email.toLowerCase()){
      ctx.addIssue({
        message : "Email address must be in lowercase.",
        path : ["Email"],
        code : z.ZodIssueCode.custom
      })
    }
    if(/@(test|example)\./i.test(Email)){
      ctx.addIssue({
        message : "Please use a valid personal email address.",
        path : ["Email"],
        code : z.ZodIssueCode.custom
      })
    }
    if(/^admin@/.test(Email)){
      ctx.addIssue({
        message : "Admin email addresses are not allowed.",
        path : ["Email"],
        code : z.ZodIssueCode.custom
      })
    }
  })