import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './page/about/about';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Ofertas } from './page/ofertas/ofertas';
import { Seccion1 } from './page/products/secciones/seccion1/seccion1';
import { Seccion3 } from './page/products/secciones/seccion3/seccion3';
import { Seccion2 } from './page/products/secciones/seccion2/seccion2';

export const routes: Routes = [
	{path: `home`, component: Home },
	{path: `about`,component: About},
	{path: `products`, component: Products},
	{path: `contact`, component: Contact},
	{path: `ofertas`, component:Ofertas},
	{path: ``, component: Home},
	{path: `clasicos`, component: Seccion1},
	{path: `fiesta`, component: Seccion2},
	{path: `bar`, component: Seccion3}
];
