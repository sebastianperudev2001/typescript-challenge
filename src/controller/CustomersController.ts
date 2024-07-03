import { APIGatewayProxyEvent } from 'aws-lambda';
import { Customer } from '../domain/Customer';
import { CustomersService } from '../service/CustomersService';

export class CustomersController {
    constructor(private service: CustomersService) {}

    async findByFilter(event: APIGatewayProxyEvent) {
        return this.apiResponseOk(await this.service.findByFilter());
    }

    apiResponseBadRequestError() {
        return {
            statusCode: 400,
            isBase64Encoded: false,
        };
    }

    apiResponseOk(customer: Customer | null) {
        return {
            statusCode: 200,
            isBase64Encoded: false,
            body: JSON.stringify(customer),
        };
    }
}
