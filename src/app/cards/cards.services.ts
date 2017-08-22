import {Injectable} from "@angular/core";
import * as _ from "lodash";
@Injectable()
export class CardsService {
    private cards;

    constructor(){

        this.cards=[
            {
                _id: 1,
                title: "Card 1", 
                color: "hsl(171, 100%, 41%)",              
                body: [ {note_id:1},
                        {note_id:2},
                        {note_id:3}],
            },
            {
                _id: 2,
                title: "Card 2",
                color: "hsl(141, 71%, 48%)",  
                body: [ {note_id:2},
                        {note_id:1},
                        {note_id:4}],
            },
            {
                _id: 3,
                title: "Card 3",
                color: "hsl(48, 100%, 67%)",  
                body: [ {note_id:3},
                        {note_id:2},
                        {note_id:4}],
            },
            {
                _id: 4,
                title: "Card 4",
                color: "hsl(348, 100%, 61%)",  
                body: [ {note_id:2},
                    {note_id:3},
                    {note_id:4}],
            }

        ]
    }
    getCards(){
        return this.cards;
    }
    addCard(title,color){
        //This is a place for db upload
        const temp=_.uniqueId('note_')
        let _color=color.length>0?color:"hsl(217, 71%,  53%)"
        this.cards.unshift({
                _id: temp,
                title: title,
                color: _color,
                body: [],
            })
        return temp;
    }
    editCard(id,title,color){
        this.cards.forEach(element => {
            if(element._id == id)
                {
                   element.title= title;
                   element.color=color;
                }
        });
    }
}