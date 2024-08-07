import { ApiProperty } from '@nestjs/swagger';

class RequestErrorDto {
  @ApiProperty({
    example: 200,
    description: 'The status code of the error',
  })
  statusCode: number;

  @ApiProperty({
    example: 'Unauthorized',
    description: 'Example error message',
  })
  message: string;

  @ApiProperty({
    example: 'Unauthorized',
    description: 'The error name',
  })
  error: string;
}

export { RequestErrorDto };
