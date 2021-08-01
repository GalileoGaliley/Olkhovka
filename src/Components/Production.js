import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";


export default function Production(props) {
    return(
      <>
          <div className = {'col-sm-5 bg-light'}>
          <img className={'d-block w-100'} src={props.source} alt={'Img'}/>
          </div>
          <div className = {'col-sm-7 bg-light'}>
                  <h3 className = {'text-center text-dark'}>{props.head}</h3>
              <p>
                    {props.body}
              </p>
          </div>
      </>
    )
}
