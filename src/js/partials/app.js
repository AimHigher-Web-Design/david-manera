import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

//Resources
import '../../scss/content.scss';
import favicons from '../../img/favicons/*';

//Components
import { Header } from './header.js';
import { Home } from '../layouts/home.js';
import { Footer } from './footer.js';
import Painting from '../../img/legal-eagles.jpg';

class Meta extends Component {
	render() {
		let name = 'David Manera | Barrister and Solicitor';
		let description = 'David Manera is a Perth-based lawyer specialising in Criminal Law practising throughout Western Australia';
		let slug = '';
		let image = Painting;
		let siteUrl = 'davidmanera.com.au';

		return (
			<Helmet>
				<title>{name}</title>
				<meta name="description" content={description} />
				<link
					rel="canonical"
					href={siteUrl + slug}
				/>

				{/* Facebook */}
				<meta
					property="og:url"
					content={siteUrl + slug}
				/>

				<meta property="og:title" content={name} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />

				{/* Twitter */}
				<meta
					name="twitter:url"
					content={siteUrl + slug}
				/>
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<link rel="shortcut icon" href={favicons['favicon.png']} />
				<link rel="icon" type="image/png" sizes="16x16" href={favicons['favicon-16.png']} />
				<link rel="icon" type="image/png" sizes="32x32" href={favicons['favicon-32.png']} />
				<link rel="icon" type="image/png" sizes="96x96" href={favicons['favicon-96.png']} />

				<meta name="theme-color" content="#1C75BC" />
			</Helmet>
		);
	}
}

export class App extends Component {
	render() {
		return (
			<Fragment>
				<Meta />
				<Header />
				<Home />
				<Footer />
			</Fragment>
		);
	}
}
