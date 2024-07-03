import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
//import 'source-map-support/register';
import { controller } from './controller';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const customersHandler = async (event: APIGatewayProxyEvent) => {
    if (event.resource === '/customers' && event.httpMethod === 'GET') {
        return controller.findByFilter(event);
    }
    return controller.apiResponseBadRequestError();
};
