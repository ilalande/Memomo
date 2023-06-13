import '../globals.scss';
import Header from '../components/header/index';

const StaticLayout = ({ children }) => {
  return (
    <>
      <Header pageType={'static'} />
      <main className='main'> {children}</main>
    </>
  );
};

export default StaticLayout;
