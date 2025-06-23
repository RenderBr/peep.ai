import { toTypedSchema } from "@vee-validate/zod";
import z from "zod";

export const RegisterSchema = toTypedSchema(z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    username: z.string().min(1, "Username is required").max(32, "Username must be at most 32 characters"),
    password: z.string().min(8, "Password must be at least 8 characters").max(64, "Password must be at most 64 characters"),
}))