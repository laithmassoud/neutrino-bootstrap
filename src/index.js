import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbartemplate from './templates/navbar.html';

import mkCarousel from './carousel';


$(() => {
  $.ajax('./static/catogories.json')
    .done((catogories) => {
      const $carousel = mkCarousel(catogories);
      $('#root').append($carousel);
      $carousel.carousel();
    });
    $('#root')
    .append(navbartemplate);
});   
