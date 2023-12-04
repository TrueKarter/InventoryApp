import { db } from './config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { RouteProp } from '@react-navigation/native';

const addItemToDatabase = (upc, quantity, zone, shelf) => {
  const inventoryCollection = collection(db, 'inventory');
  addDoc(inventoryCollection, {
    upc,
    quantity,
    zone,
    shelf,
  })
    .then(() => {
      alert('Item added to the database successfully');
    })
    .catch((error) => {
      alert('Error adding item to the database: ', error);
    });
};

const removeItemFromDatabase = async (upc, quantityToRemove, zone, shelf) => {
  const inventoryCollection = collection(db, 'inventory');
  const querySnapshot = await getDocs(inventoryCollection);

  let itemFound = false;

  querySnapshot.forEach(async (document) => {
    const data = document.data();

    if (data.upc === upc && data.zone === zone && data.shelf === shelf) {
      itemFound = true;

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
        alert(`Error updating quantity for UPC: ${upc}`, error);
      }
    }
  });

  if (!itemFound) {
    alert('Item not found. Please check UPC, Zone, and Shelf and scan again.');
  }
}; //end of removeItemFromDatabase

//end of retrieveData

export { addItemToDatabase, removeItemFromDatabase };
