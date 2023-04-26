import styles from '@styles/WrapperLayout.module.css';

export const WrapperLayout = ({ children }) => {
  return (
    <WrapperLayout>
      <div>
        <div className='central'>{children}</div>
      </div>
    </WrapperLayout>
  );
};
