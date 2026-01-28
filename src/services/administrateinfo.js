import { db } from '@/database/databaseconfig'
import { doc, collection, addDoc, getDocs, updateDoc, serverTimestamp } from 'firebase/firestore'

import { mapFirebaseError } from '@/services/firebaseErrors'

export const saveData = async (data, table) => {
  try {
    const docRef = collection(db, table)

    await addDoc(docRef, {
      ...data,
      createdAt: new Date(),
    })

    return {
      ok: true,
      message: 'Information was added successfully',
    }
  } catch (error) {
    console.error('Error while saving information:', error.code)

    return {
      ok: false,
      code: error.code,
      message: mapFirebaseError(error),
    }
  }
}

export const getInfo = async (table) => {
  try {
    if (!table) {
      throw new Error('Table name is required')
    }

    const querySnapshot = await getDocs(collection(db, table))

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return {
      ok: true,
      data,
    }
  } catch (error) {
    console.error('Firebase getInfo error:', error)

    return {
      ok: false,
      error: {
        message: error.message || 'Failed to fetch data',
        code: error.code || 'unknown',
      },
    }
  }
}

export const updateAbout = async (data) => {
  try {
    await updateDoc(doc(db, 'about', 'bbHKeTpSOJHwu52lTazO'), data)
    return {
      ok: true,
      message: 'Information was added successfully',
    }

  } catch (error) {
    console.error('Firebase getInfo error:', error)

    return {
      ok: false,
      error: {
        message: error.message || 'Failed to update data',
        code: error.code || 'unknown',
      },
    }
  }
}
