import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import BreadCrumps from '../Components/BreadCrumps.js';
import Millet from '../Images/Millet.jpeg';
import Mill from '../Images/Mill.png';
import Separathor2000 from '../Images/Separathor2000.jpg';

export default function AboutUs() {
  return(
      <>
          <Container fluid className = {'shadoww'}>
              <div className = {'row bg-light'}>
                  <div className = {'col-12'}>
                      <h2 className = {'text-dark text-center mt-3 mb-3'}>О предприятии</h2>
                  </div>
              </div>
              <div className = {'row bg-light'}>
                  <p>
                  Наша компания начала работу в 2009 году в селе Михайловка, Саратовской области.
С 2021 года многое изменилось. Руководство приняло решение развиваться в сети Интернет, были трудоустроены новые сотрудники, открыты два склада в городе Саратов и в городе Энгельс.
За небольшой срок мы уже начали сотрудничество с новыми для нас регионами: Краснодарский край и республика Крым.
Наша главная цель развитие долгосрочных отношений с партнерами и сохранение доступной цены. Мы видим, как цены повышается на всю продукцию в основном искусственно и не сторонники этого.
                  </p>
                  <h1>Качество</h1>
                  <ul className = {'text-dark'}>
                      <li>
                          • Производим продукцию в соответствии с качеством ГОСТ
                      </li>
                      <li>
                          • В нашей компании имеется собственная лаборатория, что гарантирует высокое качество выпускаемой продукции.
                      </li>
                      <li>
                          • Компания на рынке с 2009 года, мы имеем богатый опыт в производстве продукции.
                      </li>
                  </ul>
                  <div className = {'row'}>
                      <img className={'col-7 d-block m-auto'} src={Millet} alt={'Img'}/>
                  </div>

              </div>
              <div className = {'row bg-light'}>
                  <h3></h3>
              </div>
          </Container>
      </>
  )

}
