import { Controller, Get, Param } from '@nestjs/common';
import { Income } from './income.entity';
import { IncomesService } from './incomes.service';

@Controller('incomes')
export class IncomesController {
  constructor(private incomesService: IncomesService) {}

  @Get()
  findAll(): Income[] {
    return this.incomesService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number): Income {
    return this.incomesService.findById(id);
  }
}
