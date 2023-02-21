import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusDto } from './create-status.dto';
import { IsOptional } from 'class-validator';

// export class UpdateStatusDto extends PartialType(CreateStatusDto) {}
export class UpdateStatusDto {
  @IsOptional()
  statusName: string;
}
