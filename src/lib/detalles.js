import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const detallesClientesRef = collection(db, 'DetallesClientes');

export const obtenerDetallesClientes = async () => {
  const snapshot = await getDocs(detallesClientesRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const agregarDetalleCliente = async (detalleCliente) => {
  return await addDoc(detallesClientesRef, detalleCliente);
};

export const actualizarDetalleCliente = async (id, detalleCliente) => {
  const detalleDoc = doc(db, 'DetallesClientes', id);
  return await updateDoc(detalleDoc, detalleCliente);
};

export const eliminarDetalleCliente = async (id) => {
  const detalleDoc = doc(db, 'DetallesClientes', id);
  return await deleteDoc(detalleDoc);
};
