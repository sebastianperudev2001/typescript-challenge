import { Customer } from '../domain/Customer';

export interface CustomersService {
    findByFilter(): Promise<Customer | null>;
}
