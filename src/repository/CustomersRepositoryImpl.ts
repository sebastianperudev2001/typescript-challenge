import axios from 'axios';
import { CustomersRepository } from './CustomersRepository';
import { Customer } from '../domain/Customer';

type RandomUser = {
    id: {
        value: string;
    };
    name: {
        first: string;

        last: string;
    };
    phone: string;
};

export class CustomersRepositoryImpl implements CustomersRepository {
    async findByFilter(): Promise<Customer | null> {
        const result = await axios.get('https://randomuser.me/api/?results=100');
        if (!result.data.results) {
            return null;
        }

        const firstCustomer = result.data.results[0];
        //const persona = result.data.results[0];
        const email = `${firstCustomer.name.first.charAt(0)}${firstCustomer.name.last}@miblum.com`;

        return new Customer({
            id: firstCustomer.id.value,
            name: firstCustomer.name.first,
            lastName: firstCustomer.name.last,
            phone: firstCustomer.phone,
            email: email.toLocaleLowerCase(),
        });
    }
}
