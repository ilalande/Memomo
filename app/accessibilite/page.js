import Link from 'next/link';
import '../globals.scss';

export default function Accessibilite() {
  return (
    <>
      <h1>Accessibilité</h1>
      <p>
        Ce site a été développé afin de se former à la mise en oeuvre des 106
        critères du
        <Link href='https://accessibilite.numerique.gouv.fr/methode/introduction/'>
          référentiel RGAA
        </Link>
        suite à une
        <Link href='https://formations.access42.net/formations/formation-developpement-accessible/'>
          formation "développer des sites web d'Access42".
        </Link>
      </p>
      <h2>Déclaration d'accessibilité</h2>
      <p>
        Afin de respecter la loi, une déclaration d'accessibilité est nécessaire
        conformément aux{' '}
        <Link
          title='déclaration de conformité au RGAA sur le site du gouvernement'
          href='https://accessibilite.numerique.gouv.fr/obligations/declaration-accessibilite/'
        >
          prescriptions du gouvernement.
        </Link>
      </p>
      <p>
        Les tests des pages web ont été effectués avec la combinaisons de
        navigateurs web et lecteurs d'écran suivants : Firefox 106 et NVDA 2022
      </p>
      <p>
        Toutefois, ce site étant à but pédagogique et n'étant pas destiné à être
        en ligne, celle-ci n'a pas été rédigé (et la vérification de la
        conformité par une personne tierce n'a pas été faite).
      </p>
      <h2>Contact</h2>
      <p>
        N'hésitez pas à
        <Link href='/contact'>contacter l'autrice de ce site</Link>
      </p>
    </>
  );
}
