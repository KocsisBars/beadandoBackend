import { IsBoolean, IsDate, IsInt, IsOptional, IsString } from "class-validator"

export class CreateConcertDto {

  @IsString()
  performer: string;

  @IsDate()
  startTime: Date;

  @IsInt()
  duration: number;

  @IsBoolean()
  @IsOptional()
  cancelled?: boolean;

}
