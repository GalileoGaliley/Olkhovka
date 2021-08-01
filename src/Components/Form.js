import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";

export default function Forma() {


    return(
        <>
            <Form action={'/main'} method={'post'}>
                  <Form.Group controlId>
                      <Form.Label>Ваши имя и фамилия</Form.Label>
                      <Form.Control id = {'name'} name={'name'} type={'text'}/>
                  </Form.Group>
                  <Form.Group controlId>
                      <Form.Label>Ваш номер телефона</Form.Label>
                      <Form.Control id = {'tel'} name={'tel'} type={'tel'}/>
                  </Form.Group>
                  <Form.Group controlId>
                      <Form.Label>Ваш e-mail</Form.Label>
                      <Form.Control id = {'email'} name={'email'} type={'email'}/>
                  </Form.Group>
                  <Form.Group controlId>
                      <Form.Label>Опишите заказ</Form.Label>
                      <textarea id = {'text'} name = {'text'} className = {"form-control rounded-0"} rows = {"5"}></textarea>
                  </Form.Group>
                  <button type={'submit'} formMethod={'post'} className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'}>Отправить!
                  </button>
              </Form>
          </>
    )
}
