import React, {Component, useState} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl, NavDropdown, Collapse } from "react-bootstrap";
import {Switch, BrowserRouter as Router,Route,Link} from "react-router-dom";
import Logo from '../Images/logo.png';
import Main from '../Pages/Main.js';
import AboutUs from '../Pages/AboutUs.js';
import Productions from '../Pages/Productions.js';
import Pass from '../Pages/Pass.js';
import ForClient from '../Pages/ForClient.js';
import Contacts from '../Pages/Contacts.js';
import Forma from './Form.js';







export default function Header (){
    function updateData (value) {
         this.setState({ height: value })
     };
     const [show, setShow] = useState(false);
     const openModal = () => setShow(true);
     const closeModal = () => setShow(false);
    return(
        <>
          <Container className={'mt-3 pss'} fluid>




              <Navbar className = {'headBody width100 shadoww'} collapseOnSelect expand={'lg'}>

                  <Container className = {'width100 d-block'} >
                  <Navbar.Brand className = {'text-center w-100'} href='/' >
                    <img src={Logo}  width='200' className='d-inline-block align-top'/>
                  </Navbar.Brand>
                          <Navbar.Toggle className = {'buttonBurger'} aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className={'m-auto width100'} >
                                <div className = {'head width100 '} id = {"navbarSupportedContent"}>




                                    <div className = {'navbar-nav width100 links'}>
                                        <Nav.Link className={'link width100 hoverLink glav'} href={'/'}>
                                          <p>Главная</p>
                                        </Nav.Link>
                                        <Nav.Link className={'link width100 hoverLink'} href={'/productions'}>
                                          <p>Продукция</p>
                                        </Nav.Link>
                                        <Nav.Link className={'link width100 hoverLink'} href={'/forClient'}>
                                          <p>Партнёрам</p>
                                        </Nav.Link>
                                        <Nav.Link className={'link width100 hoverLink'} href={'/aboutUs'}>
                                          <p>О нас</p>
                                        </Nav.Link>
                                        <Nav.Link className={'link width100 hoverLink'} href={'/contacts'}>
                                          <p>Контакты</p>
                                        </Nav.Link>
                                        <button className={'link width100 hoverLink'} onClick={openModal}>
                                            <p>Заказ</p>
                                        </button>


                                      </div>

                                  </div>

                          </Nav>
                          </Navbar.Collapse>
                  </Container>

              </Navbar>
          </Container>
          <Container className = {'pss'} fluid>
              <Router>
                  <Switch>
                      <Route exact path={'/'} component={Main} />
                      <Route exact path={'/main'} component={Main} />
                      <Route exact path={'/aboutUs'} component={AboutUs} />
                      <Route exact path={'/productions'} component={Productions} />

                      <Route exact path={'/forClient'} component={ForClient} />
                      <Route exact path={'/contacts'} component={Contacts} />
                  </Switch>
              </Router>
          </Container>
          <Modal show={show} onHide={closeModal}>
              <Modal.Header closeButton>
                  <Modal.Title>Введите данные</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Forma />
              </Modal.Body>
          </Modal>

      </>
)
}
