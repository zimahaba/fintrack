import { CreditCard } from "../credit-card/credit-card-.entity";

export class CreditCardExpense {
    id: number; // change to uuid
    installments: number;
    currentInstallment: number;
    amount: number;
    creditCard: CreditCard; // check if entity or id
}