import Link from 'next/link';
import '../globals.scss';
export default function MentionsLegales() {
  return (
    <>
      <h1>Mentions légales</h1>
      <p>
        Ce site a été entièrement créé en NextJS par{' '}
        <Link href='https://www.linkedin.com/in/juliane-casier-bb642832/'>
          Juliane Casier
        </Link>{' '}
        au printemps 2023.
      </p>
      <p>
        L'objectif de ce site est de mettre en pratique{' '}
        <Link href='https://nextjs.org/'>NextJS13</Link> et les serveurs
        components ainsi que les principes du
        <Link href='https://accessibilite.numerique.gouv.fr/methode/introduction/'>
          RGAA
        </Link>{' '}
        sur un projet React
      </p>
      <p>Il ne récupère aucun cookies </p>
      <p>
        Les icônes utilisées proviennent de{' '}
        <Link href='https://feathericons.com/?query=mail'>feather.</Link>{' '}
      </p>
    </>
  );
}
