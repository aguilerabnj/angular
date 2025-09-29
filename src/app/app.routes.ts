import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './page/about/about';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
	{path: `home`, component: Home },
	{path: `about`,component: About},
	{path: `products`, component: Products},
	{path: `contact`, component: Contact}
];
