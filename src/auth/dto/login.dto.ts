import { Transform } from "@nestjs/class-transformer";
import { IsEmail, IsString, MinLength } from "@nestjs/class-validator";

export class LoginDto{
    @IsEmail()
    email:string;
    @IsString()
    @MinLength(6)
    @Transform(({ value })=> value.trim())
    password:string;
}