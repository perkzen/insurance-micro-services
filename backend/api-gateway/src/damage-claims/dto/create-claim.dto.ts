import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClaimDto {
  @ApiProperty({ required: true })
  @IsNumber()
  userId: number;

  @ApiProperty({ required: true })
  @IsString()
  comment: string;

  @ApiProperty({ required: true })
  @IsString()
  insurance: string;

  @ApiProperty({ required: true })
  @IsString()
  date: string;
}
