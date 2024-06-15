import z from 'zod'

const jobSchema = z.object({
  name: z.string().trim().regex(/^[a-zA-Z\s]{3,}$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  star: z.string().regex(/^\d{2}:\d{2}$/),
  end: z.string().regex(/^\d{2}:\d{2}$/),
  order: z.string().min(6).max(6).regex(/^\d{6}$/)
})

export function validateJob (input) {
  return jobSchema.safeParse(input)
}

export function validatePartialJob (input) {
  return jobSchema.partial().safeParse(input)
}
