import { db } from './config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const addItemToDatabase = (upc, quantity, aisle, shelf) => {
  const inventoryCollection = collection(db, 'inventory');
  addDoc(inventoryCollection, {
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

const removeItemFromDatabase = async (upc, quantityToRemove) => {
  const inventoryCollection = collection(db, 'inventory');
  const querySnapshot = await getDocs(inventoryCollection);

  querySnapshot.forEach(async (document) => {
    const data = document.data();

    if (data.upc === upc) {
      try {
        const newQuantity = data.quantity - quantityToRemove;

        if (newQuantity <= 0) {
          await deleteDoc(doc(inventoryCollection, document.id));
          alert(
            'Item removed from the database due to quantity reaching zero.'
          );
        } else {
          await updateDoc(doc(inventoryCollection, document.id), {
            quantity: newQuantity,
          });
          alert('Item quantity updated in the database successfully.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
};

export { addItemToDatabase, removeItemFromDatabase };
