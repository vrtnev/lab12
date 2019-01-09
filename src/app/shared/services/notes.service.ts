import { Injectable } from '@angular/core';
import {BaseApi} from '../core/base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService extends BaseApi{

  options: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  async getNotes() {
    return this.get('notes', this.options).toPromise();
  }

  async postNote(data: User) {
    return this.post('users', data, this.options).toPromise();
  }

  deleteNoteById(id) {
    return this.delete('notes/'+id, this.options).toPromise();
  }
}
