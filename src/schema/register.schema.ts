import * as z from "zod";

export const registerSchema = z.object({
    
    name: z.string().min(4 ,"Name must be at least 4 characters long").max(20,"Name must be at most 20 characters long"),
    email:z.email("Invalid email address") ,
    password: z.string().min(6,"Password must be at least 6 characters long").max(20,"Password must be at most 20 characters long").regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain at least one letter and one number"),
    rePassword: z.string().min(6,"Password must be at least 6 characters long").max(20,"Password must be at most 20 characters long").regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain at least one letter and one number"),
    phone: z.string().min(10,"Phone number must be at least 10 characters long").max(15,"Phone number must be at most 15 characters long").regex(/^01[0125][0-9]{8}$/,"Phone number must contain only numbers"),
}).refine(function(object){
    if(object.password === object.rePassword){
        return true;
    }
    return false;



},{ path: ["rePassword"], error: "Passwords do not match"}
)


export type RegisterSchemaType = z.infer<typeof registerSchema>;