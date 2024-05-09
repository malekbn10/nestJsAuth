import { Transform } from "@nestjs/class-transformer";
import { IsEmail, IsString, MinLength } from "@nestjs/class-validator";
import trim from './../../../node_modules/validator/es/lib/trim';

export class RegisterDto{
    @IsString()
    @MinLength(1)
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    @MinLength(6)
    @Transform(({ value })=> value.trim())
    password:string;
}