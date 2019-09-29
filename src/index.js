'use strict';

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

    //Timer 
    countTimer('11 16 2018 00:08:40');

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