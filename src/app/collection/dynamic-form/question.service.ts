// TO DELETE
import { Injectable }       from '@angular/core';
import { DropdownQuestion,TextboxQuestion  } from './question-type';
import { QuestionBase }     from './question-base';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = /*[
      new TextboxQuestion({
        key: 'objectname',
        label: '',
        value: 'document',
        required: true,
        type:'hidden',
        order: 5
      }),


      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

         new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: false,
        order: 4
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];*/

    [
      new TextboxQuestion({
        key: 'objectname',
        label: '',
        value: 'document',
        required: true,
        type:'hidden',
        order: 0
      }),


      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'file',
        label: 'Votre fichier',
        value: '',
        required: true,
        type:'file',
        order: 1
      }),

         new TextboxQuestion({
        key: 'title',
        label: 'Titre',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'summary',
        label: 'sommaire',
        value: '',
        required: false,
        type:'',
        order: 3
      }),
      new TextboxQuestion({
        key: 'description',
        label: 'description',
        value: '',
        required: false,
        type:'',
        order: 4
      }),
      new TextboxQuestion({
        key: 'keywords',
        label: 'Mots-clés',
        value: '',
        required: false,
        type:'',
        order: 5
      }),
      new TextboxQuestion({
        key: 'expirationDate',
        label: 'Date d\'expiration',
        value: '',
        required: false,
        type:'',
        order: 6
      }),
      new TextboxQuestion({
        key: 'versionsMax',
        label: 'Versions max',
        value: '',
        required: false,
        type:'',
        order: 7
      }),
      new TextboxQuestion({
        key: 'author',
        label: 'Auteur',
        value: '',
        required: false,
        type:'',
        order: 8
      }),
      new TextboxQuestion({
        key: 'acccesRights',
        label: 'Droits d\'accès initiaux',
        value: 'same',
        required: true,
        type:'radio',
        order: 9
      }),
      new TextboxQuestion({
        key: 'circulation',
        label: 'Circulation du document',
        value: false,
        required: true,
        type:'radio',
        order: 10
      }),
    ];

    console.log("typeof "+typeof questions); //typeof object
    console.log(questions); // Array [ Object, Object, Object, Object ]
    console.log(questions.length); //4
    for(let item of questions){
      console.log(item);
    }
    /*
      Object { value: undefined, key: "brave", label: "Bravery Rating", required: false, order: 3, controlType: "dropdown", options: Array[4] }  main.bundle.js:1124:13
      Object { value: "Bombasto", key: "firstName", label: "First name", required: true, order: 1, controlType: "textbox", type: "" }  main.bundle.js:1124:13
  Object { value: "", key: "lastName", label: "Last name", required: false, order: 4, controlType: "textbox", type: "" }  main.bundle.js:1124:13
Object { value: undefined, key: "emailAddress", label: "Email", required: false, order: 2, controlType: "textbox", type: "email" }
    */
    
    return questions.sort((a, b) => a.order - b.order);
  }
}
