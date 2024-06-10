import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);

        contacts.push(createFakeContact());
    
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log('Added successfully');
    } catch (error) {
        console.error(error);
    }
};

await addOneContact();
