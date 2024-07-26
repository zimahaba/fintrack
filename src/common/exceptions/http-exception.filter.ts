import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const res = host.switchToHttp().getResponse<Response>();
        console.log('ex: ', exception)
        res.status(exception.getStatus())
            .json({
                statusCode: exception.getStatus(),
                timestamp: new Date().toISOString(),
                message: exception.message
            })
    }
}