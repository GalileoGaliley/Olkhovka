import React, {Component} from 'react';
import {Navbar, Nav, Container, Modal, Form, Button, FormControl } from "react-bootstrap";
import ClustererCreate from '../Components/YMap.js'

export default function AboutUs() {
  return(
      <>
          <div className = {'row bg-light width100 shadoww m-auto'}>
          <div className = {'col-md-11 m-auto'}>
          <div className = {'row mt-5'}>
              <div className = {'col-md-5 '}>
                  <div className = {'row d-block'}>
                      <h6 className = {'text-dark'}>Отдел продаж:</h6>
                      <ul className = {'text-dark'}>
                          <li>тел.: +79379741877</li>
                          <li>e-mail: info@olkhovka.com</li>
                      </ul>
                  </div>
                  <div className = {'row d-block'}>
                      <h6 className = {'text-dark'}>Почтовые реквизиты:</h6>
                      <ul className = {'text-dark'}>
                          <li>ООО "Ольховка" </li>
                          <li>410503, Саратовская область, Саратовский район, село Михайловка, на расстоянии 5 км северо-западнее д. юрловка </li>
                      </ul>
                  </div>
                  <div className = {'row d-block'}>
                      <h6 className = {'text-dark'}>Банковские реквизиты:</h6>
                      <ul className = {'text-dark'}>
                          <li>ИНН 6449053961 КПП 644001001</li>
                          <li>р/с 40702810952000001075</li>
                          <li>Саратовский РФ АО «РОССЕЛЬХОЗБАНК» г. Саратов</li>
                          <li>к/с 30101810500000000843</li>
                          <li>БИК 046311843</li>
                      </ul>
                  </div>

              </div>
              <div className = {'col-md-7'}>
                  <ClustererCreate />
              </div>
              </div>
              </div>
          </div>
      </>
  )

}
