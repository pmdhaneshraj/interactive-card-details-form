import React from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import BgImg from '../assets/images/bg-main-desktop.png'
import frontImg from '../assets/images/bg-card-front.png'
import backImg from '../assets/images/bg-card-back.png'
import './styles.scss'

const InteractiveCardDetailForm = () => {
  return (
    <Row className='card-container'>
      <Col flex={1.2} className='page-left'>
        <img src={BgImg} alt="bgImg" className='bg-img' />
        <div className='card-front'>
          <span className='dot'></span>
          <span className='small-dot'></span>
          <img className='card-front-image' src={frontImg} alt='card-front' />
          <h1 className='card-number'>9591 6489 6589 101E</h1>
          <div className='card-holder-and-date'>
            <h4 className='holder-name'>FELICITY</h4>
            <h4 className='card-date'>09/00</h4>
          </div>
        </div>
        <div className='card-back'>
          <img className='card-back-image' src={backImg} alt='card-back' />
          <h3 className='card-cvv'>222</h3>
        </div>
      </Col>
      <Col flex={3} className='page-right'>
        <Form className='payment-form'>
          <Form.Item label="cardholder name"><Input /></Form.Item>
          <Form.Item label="cardholder number"><Input /></Form.Item>
          <Form.Item label="expire month"><Input /></Form.Item>
          <Form.Item label="expire year"><Input /></Form.Item>
          <Form.Item label="cvv"><Input /></Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default InteractiveCardDetailForm;