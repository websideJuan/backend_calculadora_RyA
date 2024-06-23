import z from 'zod'

const jobSchema = z.object({
  dia: z.number().int().min(1).max(31),
  mes: z.number().int().min(1).max(12),
  year: z.number().int().min(2022).max(2025),
  hora: z.string().regex(/^\d{2}:\d{2}$/)
})

export function validateTicket (input) {
  return jobSchema.safeParse(input)
}

export function validatePartialTicket (input) {
  return jobSchema.partial().safeParse(input)
}
