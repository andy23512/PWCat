import { Component, OnInit } from '@angular/core';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

class Button {
  text: string;
  disabled: boolean;
  color: string;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.sass']
})
export class ImgCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;
  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  ngOnInit() {
    this.generateSrc();
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you are offline';
      this.button.disabled = true;
    }
  }

  generateSrc(): void {
    this.src =
      this.image.api +
      this.image.message +
      '?size=' +
      this.image.fontsize +
      '&ts=' +
      Date.now();
  }
}
