import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CreateBetDto {
  @ApiProperty({ example: 100, description: 'The amount of the bet' })
  @IsNumber()
  @Min(0.01)
  amount: number;
}
