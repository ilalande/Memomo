import Nav from './components/nav/index';
import './globals.scss';

// Defining font
import localFont from 'next/font/local';
const roundedElegance = localFont({
  src: '../public/fonts/Rounded_Elegance.ttf',
  variable: '--font-rounded-elegance',
});
const tondu = localFont({
  src: '../public/fonts/Tondu_Beta.ttf',
  variable: '--font-tondu',
  //To avoid layout shift and insure font will always show
  display: 'swap',
});
// Metadata of page /- documentation from :
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// Inspiration from https://vercel.com/templates/next.js/taxonomy

export const metadata = {
  title: {
    default: 'MEMOMO',
    template: '%s | MEMOMO',
  },
  description: 'Création de tableaux personnels contenant des listes',
  keywords: ['Next.js', 'React', 'Memo board', 'Tableau de mémos'],
  authors: [
    {
      name: 'Juliane Casier',
      url: 'https://www.linkedin.com/in/juliane-casier-bb642832/',
    },
  ],
  //To improve SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    icons: {
      shortcut: '/favicon.ico',
    },
  },
};
const PrimaryLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>
        <div
          className={`${roundedElegance.variable} ${tondu.variable} mainWrapper`}
        >
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
};

export default PrimaryLayout;
