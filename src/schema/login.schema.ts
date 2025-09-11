import * as z from "zod";

export const loginSchema = z.object({
    
 
    email:z.email("Invalid email address") ,
    password: z.string().min(6,"Password must be at least 6 characters long").max(20,"Password must be at most 20 characters long").regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain at least one letter and one number"),
   
})



export type LoginSchemaType = z.infer<typeof loginSchema>;