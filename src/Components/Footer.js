import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import Logo from '../Images/logo.png';


export default function Footer() {
  return(
  <Container className = {'pss'} fluid>
  <footer id={'foo'} className={"footer section footer-classic context-light"}>
      <Container>
          <div className={"row fii row-30"}>
              <div className={"row width100 text-center"}>
                <div className = {'footerLogo'}>
                    <img src={Logo}  width={'200'}className={'d-inline-block align-top'}/>
                </div>
              </div>
              <div className = {'row width100 text-center'}>
                <div className={"col-md-4 m-auto"}>
                    <h6>Контакты</h6>
                    <dl className={"contact-list m-3"}>
                        <dt>email:</dt>
                        <dd><a href={"mailto:#"}>ThePursuer@mail.ru</a></dd>
                    </dl>
                    <dl className={"contact-list m-3"}>
                        <dt>Телефон:</dt>
                        <dd><a href={"tel:#"}>8-986-986-69-79</a> <span><br/>Или<br/></span> <a href={"tel:#"}>8-989-249-66-16</a>
                        </dd>
                    </dl>
                </div>
              </div>
          </div>
      </Container>

      <div className={"pr-xl-4"}><a className={"brand"} href={"/"}></a>
          <p className={"rights"}><span>©</span><span className={"copyright-year"}>2021 - </span><span>Create by <a href = {'#'}>Neutrino</a> study.</span>
          </p>
      </div>
  </footer>
  </Container>
);
}
