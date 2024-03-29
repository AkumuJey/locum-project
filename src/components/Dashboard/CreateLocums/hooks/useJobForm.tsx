import { Dayjs } from "dayjs";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
export interface Job {
  title: string;
  requirements: string;
  description: string;
  location: string;
  rate: null | number;
  start: null | Date | Dayjs;
  stop: null | Date | Dayjs;
  booked: boolean;
  completed: boolean;
  id?: string;
}
export interface SubmittedLocum {
  title: string;
  requirements: string;
  description: string;
  location: string;
  rate: null | number;
  start: string;
  stop: string;
  completed: boolean;
  booked: boolean;
  id?: string;
}
export const submitToFirebase = async (job: SubmittedLocum) => {
  try {
    const locumsCollection = collection(db, "locums");
    const docRef = await addDoc(locumsCollection, job);
    console.log(docRef.id);
  } catch (error) {
    return error;
  }
};

export const updateLocum = async (id: string, updatedJob: SubmittedLocum) => {
  try {
    const docRef = doc(db, "locums", id);
    await updateDoc(docRef, { ...updatedJob });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocum = async (id: string) => {
  try {
    const docRef = doc(db, "locums", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error)
  }
}

// const locumLoader = (filter: QueryFieldFilterConstraint, setLocums: SetStateAction<SubmittedLocum[]>, setLoading, setError)=> {
//   const locumsCollection = collection(db, "locums");
//   const openLocumsCollection = query(locumsCollection, filter)
//   const unsubscribe = onSnapshot(openLocumsCollection, (snapshot) => {
//     const locumsArray: SubmittedLocum[] = []
//     snapshot.docs.forEach((doc) => {
//       if(!doc.data().completed && !doc.data().booked){
//         const data = doc.data() as SubmittedLocum;
//         data.id = doc.id;
//         if (!doc.data().closed) {
//             locumsArray.push(data);
//         }
//       }
//   });
//   setLocums([...locumsArray]);
//     console.log(locumsArray)
//   })
//   return () => unsubscribe();
// }
