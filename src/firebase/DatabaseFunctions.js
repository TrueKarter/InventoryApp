/* Import necessary functions from Firebase's firestore */
import { db } from './config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

/* Function to add an item to the database */
const addItemToDatabase = (upc, quantity, zone, shelf) => {
  const inventoryCollection = collection(db, 'inventory'); // Get reference to the 'inventory' collection in the database

  /* Add a new document to the 'inventory' colleciton with the provided data */
  addDoc(inventoryCollection, {
    upc,
    quantity,
    zone,
    shelf,
  })
    .then(() => {
      alert('Item added to the database successfully'); // Display a success alert if the item is added successfully
    })
    .catch((error) => {
      alert('Error adding item to the database: ', error); // Display an error alert if there's an issue adding the item
    });
};

/* Function to remove an item from the database */
const removeItemFromDatabase = async (upc, quantityToRemove, zone, shelf) => {
  const inventoryCollection = collection(db, 'inventory'); // Get reference to the 'inveotry' collection in the database
  const querySnapshot = await getDocs(inventoryCollection); // Retrieve a snapshot of all documents in the 'inventory' collection

  let itemFound = false; // Flag to check if the item is found

  /* Iterate through each document in the collection */
  querySnapshot.forEach(async (document) => {
    const data = document.data();

    /* Check if the item matches the provided UPC, Zone, and Shelf */
    if (data.upc === upc && data.zone === zone && data.shelf === shelf) {
      itemFound = true; // Set the flag to true as the item is found

      try {
        const newQuantity = data.quantity - quantityToRemove; // Calculate the new quantity after removing the specified quantity

        if (newQuantity <= 0) {
          // Check if the new quantity is less than or equal to zero
          await deleteDoc(doc(inventoryCollection, document.id)); // If so, delete the document from the collection
          alert(
            'Item removed from the database due to quantity reaching zero.'
          );
        } else {
          /* If not, update the document with the new quantity */
          await updateDoc(doc(inventoryCollection, document.id), {
            quantity: newQuantity,
          });
          alert('Item quantity updated in the database successfully.');
        }
      } catch (error) {
        alert(`Error updating quantity for UPC: ${upc}`, error); // Display an error alert if there's an issue updating the quantity
      }
    }
  });

  /* Display an alert if the item is not found */
  if (!itemFound) {
    alert('Item not found. Please check UPC, Zone, and Shelf and scan again.');
  }
};

export { addItemToDatabase, removeItemFromDatabase }; // Export the functions for use in other parts of the application
