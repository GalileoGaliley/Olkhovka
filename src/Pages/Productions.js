import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import images1 from '../Images/pozh.jpeg';
import images2 from '../Images/rozh3.jpg';
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
          </div>
          <div className = {'row bg-light width100 m-auto'}>
              <div className = {'col-md-12 width100'}>
                  <h2 className = {'text-center text-dark'}>Наша компания производит муку хлебопекарную в соответствии с качеством ГОСТ 26574-2017 следующих фасовок и сортов:
        Мука хлебопекарная 50 кг высший сорт 22 руб/кг
        Мука хлебопекарная 50 кг первый сорт 21 руб/кг
        Цена указана с учетом доставки в пределах 1000 км.
        Так же возможна доставка в муковозах.</h2>
              </div>
          </div>

      </>

  )

}
