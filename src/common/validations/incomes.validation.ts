import { z } from "zod";

const amount = z.number({
    message: 'Amount is required'
});

export const incomeSchema = z
    .object({
        debtor: z.string({message: 'Debtor must be a string'}).optional(),
        amount: amount,
        comments: z.string()
    });

export type IncomeDTO = z.infer<typeof incomeSchema>;
