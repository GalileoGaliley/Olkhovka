import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import images1 from '../Images/buis.jpeg';
import images2 from '../Images/buis2.jpeg';
export default function AboutUs() {
  return(
      <>
          <div className = {'row bg-light width100 shadoww m-auto'}>
          <div className = {'row'}>
              <div className = {'col-md-5 m-auto'}>
                  <img className={'d-block width100'} src={images1} alt={'Img'}/>
              </div>
              <div className = {'col-md-5 m-auto'}>
                  <img className={'d-block width100'} src={images2} alt={'Img'}/>
              </div>
          </div>
              <div className = {'col-md-12'}>
                    <h2 className = {'text-center text-dark'}>Компания ООО «Ольховка» сотрудничает с государственными и коммерческими организациями.
Мы всегда рады новым партнерам и готовы обсуждать условия сотрудничества.</h2>
              </div>
          </div>
      </>
  )

}
