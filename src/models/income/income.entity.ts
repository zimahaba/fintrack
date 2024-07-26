export class Income {
  id: number; // change to uuid
  amount: number;
  date: Date;
  comments: string;
  type: string; // create enum
  debtor: string; // change to person
}
