// src/servicios/clientesService.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const clientesRef = collection(db, 'Cliente');

export const obtenerClientes = async () => {
  const snapshot = await getDocs(clientesRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const agregarCliente = async (cliente) => {
  return await addDoc(clientesRef, cliente);
};

export const actualizarCliente = async (id, cliente) => {
  const clienteDoc = doc(db, 'Cliente', id);
  return await updateDoc(clienteDoc, cliente);
};

export const eliminarCliente = async (id) => {
  const clienteDoc = doc(db, 'Cliente', id);
  return await deleteDoc(clienteDoc);
};
