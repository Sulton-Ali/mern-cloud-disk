import React from 'react';
import Input from '../../utils/input/Input';
import './registration.scss';

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <Input type="text" placeholder="Введите имя..." />
      <Input type="text" placeholder="Введите имя..." />
      <Input type="text" placeholder="Введите имя..." />
      <Input type="text" placeholder="Введите имя..." />
      <button className="registration__button">Войти</button>
    </div>
  )
}

export default Registration;