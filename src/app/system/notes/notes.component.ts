import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../shared/services/notes.service';
import {Note} from '../../shared/models/note.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  constructor(
    private notesServices: NotesService
  ) { }

  async ngOnInit() {
    try {
      let notes = this.notesServices.getNotes();
      this.notes = (isNullOrUndefined(await notes)) ? [] : await notes;
    } catch (err) {
      console.error(err);
    }
  }

}
