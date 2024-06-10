import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
       
        console.log(contacts);
    } catch (error) {
        console.error(error);
    }
};

console.log(await getAllContacts());
