import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";

export default function BreadCrumps(props) {
    return(
      <>
          <Container fluid className = {'p-0'}>
              <div className = {'breadCrump'}>
                  <a href = {''}><h4>{props.text}</h4></a>
              </div>
          </Container>
      </>
    )
}
