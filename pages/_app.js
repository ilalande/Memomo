import '@styles/globals.css';
import localFont from '@next/font/local';
const roundedElegance = localFont({
  src: '../public/fonts/Rounded_Elegance.ttf',
  variable: '--font-rounded-elegance',
});
const tondu = localFont({
  src: '../public/fonts/Tondu_Beta.ttf',
  variable: '--font-tondu',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${roundedElegance.variable} ${tondu.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
