import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../shared/services/notes.service';
import {Note} from '../../shared/models/note.model';
import {isNullOrUndefined} from 'util';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  newNote: Note;
  currentUser: User;
  constructor(
    private notesServices: NotesService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this.newNote = new Note(null,null,null);
    try {
      let notes = this.notesServices.getNotes();
      this.notes = (isNullOrUndefined(await notes)) ? [] : await notes;
    } catch (err) {
      console.error(err);
    }
  }
  async onAdd() {
    if (!isNullOrUndefined(this.newNote.text)) {
      try {
        await this.notesServices.postNote(this.newNote);
      } catch (err) {
        console.error(err);
      }
    }
    this.ngOnInit();
  }

}
