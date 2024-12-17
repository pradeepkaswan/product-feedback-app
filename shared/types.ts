import { insertFeedbackRequestSchema } from "@/db/schemas/feedbackRequests";
import { z } from "zod";

export type SuccessResponse<T = void> = {
  success: true;
  message: string;
} & (T extends void ? {} : { data: T });

export type ErrorResponse = {
  success: false;
  error: string;
  isFormError?: boolean;
};

export const signupSchema = z.object({
  name: z.string().min(3).max(255),
  username: z
    .string()
    .min(3)
    .max(31)
    .regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(8).max(255),
  image: z.string().url(),
});

export const loginSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(31)
    .regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(8).max(255),
});

export const createFeedbackRequestSchema = insertFeedbackRequestSchema.pick({
  title: true,
  category: true,
  status: true,
  description: true,
});
