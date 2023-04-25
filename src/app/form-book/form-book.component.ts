import { Component, OnInit  } from '@angular/core';
import { Book } from '../model/Book';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {
book!: Book;
titleInvalid = false;
titleTouched = false;
  
constructor(private router: Router) { }

  ngOnInit(): void {
    this.book = new Book();

  }

  validateTitle() {
    const title = this.book.titre;
    if (title.length < 3 || !/^[A-Z]/.test(title)) {
      this.titleInvalid = true;
    } else {
      this.titleInvalid = false;
    }
    this.titleTouched = true;
  }

  isFormValid(): boolean {
    // Check for empty or whitespace values for all fields
    if (!this.book.id || this.book.id.trim() === '' ||
      !this.book.titre || this.book.titre.trim() === '' ||
      !this.book.nbr || this.book.nbr.trim() === '') {
      return false; // Return false if any field is empty
    }
       return true; // If all fields are valid, return true

  }

  save(f: NgForm)
  {
      console.log(f.value['login']);
      console.log(this.book);
    }

 /* submit({value, valid}: {value:Book , valid: boolean})
  {
    this.book = value;
    console.log(this.book);
  }*/



 

}
