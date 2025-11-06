import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./page/about/about";
import { Home } from './pages/home/home';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Ofertas } from './page/ofertas/ofertas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nuevoproyecto');
}
