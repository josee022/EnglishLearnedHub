import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './config';

export interface ExtendedUserProfile {
  birthDate?: string; // ISO string
  dni?: string;
  gender?: string;
  phone?: string;
  country?: string;
}

export async function getExtendedUserProfile(uid: string): Promise<ExtendedUserProfile | null> {
  const docRef = doc(db, 'users', uid, 'profile', 'main');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as ExtendedUserProfile;
  }
  return null;
}

export async function setExtendedUserProfile(uid: string, data: ExtendedUserProfile) {
  const docRef = doc(db, 'users', uid, 'profile', 'main');
  await setDoc(docRef, data, { merge: true });
}

export async function updateExtendedUserProfile(uid: string, data: Partial<ExtendedUserProfile>) {
  const docRef = doc(db, 'users', uid, 'profile', 'main');
  await updateDoc(docRef, data);
}
