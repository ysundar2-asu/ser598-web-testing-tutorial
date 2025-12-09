import React from 'react';
import { Button } from 'antd';
import './CustomButton.scss';

export default function CustomButton(props) {
  const {buttonText, onClick} = props;
  return (
    <Button className='customButton' onClick={onClick}>{buttonText}</Button>
  )
}
