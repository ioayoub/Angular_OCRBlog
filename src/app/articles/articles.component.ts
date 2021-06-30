
import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  //TODO Fix colors for each element, actually all of them change onclick

  @Input() articlesTitle?: string;
  @Input() articlesContent?: string;
  @Input() articlesNbLikes: number = 0;




  articles = [
    {
      title: 'My first post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      nbLikes: 0

    },
    {
      title: 'My second post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      nbLikes: 0

    },
    {
      title: 'My third post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      nbLikes: 0
    }

  ];



  clickDislike = () => {
    this.articlesNbLikes = this.articlesNbLikes - 1;
    console.log(this.articlesNbLikes);

  }

  clickLike = () => {
    this.articlesNbLikes = this.articlesNbLikes + 1;
    console.log(this.articlesNbLikes);
  }


  dateUpdate = new Date();

  getLikes() {
    return 'red';
  }


  constructor() {
    //...


  }

  ngOnInit(): void {
    //...
  }

}
