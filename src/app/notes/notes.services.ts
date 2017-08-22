

import { Injectable } from "@angular/core";
import * as _ from "lodash";
@Injectable()
export class NotesService {
    private notes;
    constructor() {
        this.notes = [
            {
                _id: 1,
                title: "note 1",
                image: "../assets/img/task-icon.png",
                status: "done",
                body: `Lorem ipsum dolor sit amet,`
            },
            {
                _id: 2,
                title: "note 2",
                image: "",
                status: "active",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fring`
            },
            {
                _id: 3,
                title: "note 3",
                image: "../assets/img/task-icon.png",
                status: "canceled",
                body: `Aenean efficitur sit amet massa, consectetur adipiscing elit. Aenean efficitur sit amet massa fring`
            },
            {
                _id: 4,
                title: "note 4",
                image: "../assets/img/task-icon.png",
                status: "active",
                body: `consectetur adipiscing elit, consectetur adipiscing elit. Aenean efficitur sit amet massa fring`
            }

        ]
    }
    getNotes() {
        return this.notes;
    }
    addNotes(title, image, status, body) {
        //This is a place for db upload
        const temp = _.uniqueId('note_')
        this.notes.unshift({
            _id: temp,
            title: title,
            image: image,
            status: status,
            body: body
        })
        return temp;
    }
    editNote(id, title, image, status, body) {
        this.notes.forEach(element => {
            if (element._id == id) {
                element.title = title;
                element.image = image;
                element.body = body;
                element.status = status;
            }
        });
    }
}