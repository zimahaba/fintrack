import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Income } from './income.entity';

@Injectable()
export class IncomesService {
  findAll(): Income[] {
    return [{
      id: 1, debtor: 'debtor', amount: 4.54, comments: 'no comments',
      date: new Date(),
      type: ''
    }];
  }

  findById(id: number): Income {
    if (id < 1) {
        throw new NotFoundException('Income not found');
    }
    return { id: 1, debtor: 'debtor', amount: 4.54, comments: 'no comments', date: new Date(), type: '' };
  }
}
