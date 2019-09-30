'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import hoverCommand from './modules/hoverCommand';
import numeralCalculate from './modules/numeralCalculate';
import sendForm from './modules/sendForm';
import correctInput from './modules/correctInput';
import validator from './modules/validator';
import sliderCarousel from './modules/sliderCarousel';

    //Timer 
    countTimer('11 16 2019 00:08:40');

    //Menu
    toggleMenu();

    //popup
    togglePopUp();

    //Tabs
    tabs();

    //Slider
    slider();

    //Calculation
    calc(100);

    //Team 
    hoverCommand();

    //Numeral calculate
    numeralCalculate();

    //Send-ajax-form
    sendForm();

    //Блокировка полей ввода имени и кoмментария
    correctInput();

    sliderCarousel();
    validator();