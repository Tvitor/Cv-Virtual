import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {
  constructor(private database: AngularFireDatabase) {}

  buscarTodos(): Observable<any> {
    return this.database.list('/skills').valueChanges();
  }
}
