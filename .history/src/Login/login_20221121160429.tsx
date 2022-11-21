import React from 'react';

// import { Container } from './styles';
import bk from '../assets/bg_park_car.jpg';

const Login: React.FC = () => {
  return (
    <div className='container'>
        <div className="leftSide">
            <img src={bk} alt="image de background" />
        </div>
        <div className="rightSide">
            Lado direito
        </div>
    </div>
  );
}

export default Login;