import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, Firestore, Query, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  firestore: Firestore = inject(Firestore);

  constructor(private db: Firestore, private authService: AuthService) { }

  saveUser(user: any) {

    // Find User by email
    // If not found add user

    const userRef: CollectionReference = collection(this.firestore, 'users');

    getDocs(query(userRef, where('email', '==', user.email))).then((querySnapshot) => {

      console.log('Users found ', querySnapshot.size);

      if (querySnapshot.size > 0) {
        console.log('User already exists');
        const docId = querySnapshot.docs[0].id;
        this.authService.setDbUser(docId);
        return;
      }

      addDoc(collection(this.firestore, 'users'), user).then((documentReference: DocumentReference) => {
        console.log('Document written: ', documentReference.id);
        this.authService.setDbUser(documentReference.id);
      });

    });


  }

}
