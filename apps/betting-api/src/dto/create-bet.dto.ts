import { IsNumber, Min } from 'class-validator';

export class CreateBetDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  eventId: number;

  @IsNumber()
  outcomeId: number;

  @IsNumber()
  @Min(0.01)
  amount: number;
}
