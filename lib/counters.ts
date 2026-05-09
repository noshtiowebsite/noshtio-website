import { doc, increment, setDoc } from 'firebase/firestore'
import { db } from './firebase'

export async function incrementCounter(name: 'visits' | 'downloads') {
  try {
    await setDoc(doc(db, 'counters', name), { count: increment(1) }, { merge: true })
  } catch {
    // silently fail — never break the UI over analytics
  }
}
