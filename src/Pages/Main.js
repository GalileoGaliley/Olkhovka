import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import CarouselBox from '../Components/CarouselBox.js';
import BreadCrumps from '../Components/BreadCrumps.js';
import Image from '../Images/muka4.jpg';
import Millet from '../Images/Millet.jpeg';
import Mill from '../Images/Mill.png';
import Separathor2000 from '../Images/Separathor2000.jpg';
import Production from '../Components/Production.js';

let head1 = 'Сотрудничество с нами это:';
let head2 = 'Мы прислушиваемся!';
let head3 = '';

let body1 = 'Специалисты компании ежегодно проходят специальные курсы повышения квалификации, посещают семинары, стажировки, участвуют в конференциях.Наши производственные мощности находятся в нашей же собственности. Мы не платим аренду, а потому у нас дешевле.';
let body2 = 'Каждое предложение клиента выносится на еженедельную комиссию дирекции компании, а потому мы действительно делаем сервис, ориентированный на клиента. Более 70% предложений воплощаются в жизнь';
let body3 = '';

export default function Main() {
  return(
    <>
        <Container fluid className = {'p-0 shadoww'}>
            <CarouselBox />
        </Container>
        <Container fluid className = {'shadoww'}>
        <div className = {'row bg-light'}>
            <div className = {'col-12'}>
                <p>
                    <h1 className = {'text-secondary'}>Кратко о компании</h1>
                </p>
            </div>
        </div>
        <div className = {'row hello'}>
              <div className ={' col-sm-7 helloText'}>
                  <h4 className = {'text-dark p-3'}>
                  Наша компания начала работу в 2009 году в селе Михайловка, Саратовской области.
С 2021 года многое изменилось. Руководство приняло решение развиваться в сети Интернет, были трудоустроены новые сотрудники, открыты два склада в городе Саратов и в городе Энгельс.
За небольшой срок мы уже начали сотрудничество с новыми для нас регионами: Краснодарский край и республика Крым.
Наша главная цель развитие долгосрочных отношений с партнерами и сохранение доступной цены. Мы видим, как цены повышается на всю продукцию в основном искусственно и не сторонники этого.
                  </h4>
              </div>
              <div className = {' col-sm-4 helloImage p-3'}>
                  <img className={'d-block m-0'} src={Image} alt={'Img'}/>
              </div>
        </div>
        </Container>
        <Container fluid className = {'factory bg-light'}>
        <div className = {'row'}>
            <h1 className = {'text-center col-12 text-dark'}>СОТРУДНИЧЕСТВО</h1>
        </div>
            <div className = {'row'}>
                <Production source = {Millet} head = {head1} body = {body1}/>
            </div>
            <div className = {'row'}>
                <Production source = {Separathor2000} head = {head2} body = {body2}/>
            </div>
          
        </Container>
    </>
  );
}
