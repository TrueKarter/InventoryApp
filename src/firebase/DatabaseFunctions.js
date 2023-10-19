import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const addItemToDatabase = (upc, quantity, aisle, shelf) => {
  const invetoryCollection = collection(db, 'inventory');
  addDoc(invetoryCollection, {
    upc,
    quantity,
    aisle,
    shelf,
  })
    .then(() => {
      alert('Item added to the database successfully');
    })
    .catch((error) => {
      alert('Error adding item to the database: ', error);
    });
};

export { addItemToDatabase };
