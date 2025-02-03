import { Component } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-itens',
  standalone: false,
  
  templateUrl: './card-itens.component.html',
  styleUrl: './card-itens.component.css'
})
export class CardItensComponent {
  faFavIcon = faHeart;
}
