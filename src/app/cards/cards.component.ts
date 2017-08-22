import { Component, ViewChild, OnInit } from '@angular/core';
import { NotesService } from '../notes/notes.services';
import { CardsService } from './cards.services';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardsService, NotesService],
})
export class CardComponent implements OnInit {
  cards;
  notes;
  showCards:String;
  @ViewChild(ModalComponent) modal: ModalComponent;
  constructor(private _CardsService: CardsService, private _NotesService: NotesService, private route: ActivatedRoute) {
    this.cards = _CardsService.getCards();
    this.notes =  _NotesService.getNotes();
  }
  noteFill(body, note): Boolean {
    var stop = false;
    for (var key in body) {
      if (stop)
        break;
      if (body[key].note_id == note._id && (this.showCards == 'all' || this.showCards == note.status))
        stop = true;
    }
    return stop;
  }
  ngOnInit() {
    this.showCards = this.route.snapshot.data['show'];
  }
  DeleteCard(card) {
      _.pull(this.cards, card);
  }
  BuildCard(){
    this.modal.CardFactory(this._CardsService,null);
  }
  EditCard(card){
    this.modal.CardFactory(this._CardsService,card);
  }
  BuildNote(card){
    this.modal.NoteFactory(card,this._NotesService,null);
  }
  EditNote(card,note){
    this.modal.NoteFactory(card,this._NotesService,note)
  }
}
