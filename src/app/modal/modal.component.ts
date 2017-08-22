import { Component } from '@angular/core';
@Component({
  selector: 'note-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isActive: Boolean = false;
  isCard: Boolean = false;
  modalTitle: String;
  modalBody: String;
  modalImg: String;
  modalStatus: String;
  modalColor: String;
  newNote: Boolean = false;
  newCard: Boolean = false;
  card;
  cards;
  notes;
  _note_ID;
  constructor() {
    this.modalTitle = "";
    this.modalBody = "";
    this.modalColor = "";
    this.modalImg = "";
    this.modalStatus = "active";
  }
  NoteFactory(_card, _notes, note) {
    this.newNote = note === null ? true: false;
    this.card = note === null?_card:null;
    this.modalStatus = note === null?"active":note.status;
    this._note_ID = note == null?null:note._id;
    this.modalTitle = note === null ? null : note.title;
    this.modalBody = note === null ? null : note.body;
    this.modalImg = note === null ? "" : note.image;
    this.isActive = !this.isActive;
    this.notes = _notes;
  }
  CardFactory(_allcards, _card) {
    this.newCard = _card === null ?true: false;
    this.card = _card === null ?_card:false;
    this.modalTitle = _card === null ? null : _card.title;
    this.modalColor = _card === null ? null : _card.color;
    this.isActive = !this.isActive;
    this.isCard = !this.isCard;
    this.cards = _allcards;
  }
  DeletePicture() {
    this.modalImg = "";
  }
  MaintainModal() {
    //Maintains note
    if (!this.isCard) {
      //Adds new note
      if (this.newNote) {
        let id = this.notes.addNotes(this.modalTitle, this.modalImg, this.modalStatus, this.modalBody);
        this.card.body.unshift({
          note_id: id
        })
        this.newNote = false;
      }
      //Edit new note
      else {
        this.notes.editNote(this._note_ID, this.modalTitle, this.modalImg, this.modalStatus, this.modalBody);
      }
    }
    //Maintains card
    else {
      //Adds new card
      if (this.newCard) {

        this.cards.addCard(this.modalTitle, this.modalColor);
      }
      //Edit new card
      else {
        this.cards.editCard(this.card._id, this.modalTitle, this.modalColor);
      }
      this.isCard = !this.isCard;
    }
    this.isActive = !this.isActive;
  }
  FileUpload() {
    this.modalImg = "../assets/img/coming_soon.png";
  }
  //Knocks off background layout
  KickOffBackground() {
    if (this.isCard)
      this.isCard = !this.isCard;
    this.isActive = !this.isActive;
  }
  AddColor(color) {
    this.modalColor = color;
  }
}
