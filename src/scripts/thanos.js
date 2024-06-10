import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
        
       if (contacts.length) {
        contacts.pop();
       } else {
        console.log("The array is empty");
       }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log('Delete successfully');
    } catch (error) {
        console.error(error);
    }
};

await thanos();
