import { Customer } from '../domain/Customer';

export interface CustomersRepository {
    findByFilter(): Promise<Customer | null>;
}
