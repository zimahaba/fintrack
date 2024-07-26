import { CreditCardExpense } from "./credit-card-expense.entity";

export class Expense {
    id: number; // change to uuid
    amount: number;
    date: Date;
    comments: string;
    type: string; // create enum
    creditor: string; // change to person
    transactionType: string; // create enum
    creditCardExpense: CreditCardExpense; // check if entity or id
}