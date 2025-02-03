import { Component } from '@angular/core';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faLeite = faCow;
  faCereal = faPlateWheat;
  faDrink = faChampagneGlasses;
  faHorta = faCarrot;
  faFruta = faAppleWhole;
}
