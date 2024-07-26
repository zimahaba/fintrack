import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { Income } from './income.entity';
import { IncomesService } from './incomes.service';
import { IncomeDTO } from './income.dto';
import { ZodValidationPipe } from 'src/common/pipes/validation.pipe';
import { incomeSchema } from 'src/common/validations/incomes.validation';

@Controller('incomes')
export class IncomesController {
  constructor(private incomesService: IncomesService) {}

  @Get()
  findAll(): Income[] {
    return this.incomesService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number): Income {
    console.log(id+1)
    return this.incomesService.findById(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(incomeSchema))
  create(@Body() incomeDTO: IncomeDTO): number {
    console.log(incomeDTO);
    return 0;
  }
}
