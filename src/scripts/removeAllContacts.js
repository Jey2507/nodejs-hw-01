import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
        
        contacts = [];

        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
        console.log('Delete successfully');
    } catch (error) {
        console.error(error);
    }
};

await removeAllContacts();
