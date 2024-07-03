import { CustomersService } from './CustomersService';
import { CustomersRepository } from '../repository/CustomersRepository';
import { Customer } from '../domain/Customer';

export class CustomersServiceImpl implements CustomersService {
    constructor(private repository: CustomersRepository) {}

    async findByFilter(): Promise<Customer | null> {
        const result = await this.repository.findByFilter();
        return result;
    }
}
