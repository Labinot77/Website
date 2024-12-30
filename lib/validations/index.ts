import { z } from "zod"
 
export const uploadValidation = z.object({
  question: z.string().min(2).max(50),
  answer: z.string().min(2).max(50),
})

export const solveValidation = z.object({
  answer: z.string().min(2).max(50),
})