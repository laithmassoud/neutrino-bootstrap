//  import core files
import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
//  TODO 2.2: Add a new template for the modal windows
import ModalTemplate from './templates/modal.html';

import mkCarousel from './carousel';
//  TODO 1.3: Add the new functions from products to import
import { mkProductCard, refreshProdcts } from './products';


//  append navbar
$(() => {
  //  TODO 2.3: Append modal windows tpl
  $('#root').append(ModalTemplate);

  $('#root').append(navbarTemplate);
  //  read categories
  $.ajax('./static/categories.json')
    .done((categories) => {
      //  populate carousel with categories
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();

      //  Iterate over the categories and append to navbar
      categories.forEach((category, number) => {
        //  TODO 1.1: Add data attributes to the links: data-name
        $('.navbar-nav').append(`
            <li class="nav-item">
            <a class="nav-link" data-id="${number}" data-name="${category.name}" href="#">${category.name}</a>
            </li>`);
      });
    })
    //  or fail trying
    .fail((xhr, status, error) => {
      $('#root').append(`<div> Ajax Error categories: ${error} </div>`);
    });

  //  ajax req and append products grid
  $.ajax('./static/products.json')
    .done((products) => {
      //  TODO 1.5: Add Counter
      $('#root').append(`<div class="infobox"><h2 id="infos">All products(${Object.keys(products).length})</h2></div>`);

      //  append products-grid after carousel
      $('#root').append('<div id="products-grid" class="container-fluid"></div>');
      //  populate products-grid with products
      $('#products-grid').append('<div class="row"></div>');
      products.forEach((product) => {
        $('.row').append(mkProductCard(product));
      });
      // TODO 1.2: click event handler for nav-links
      $('.nav-link').click((event) => {
        const { target } = event;
        const linkname = target.getAttribute('data-name');
        $(target).closest('ul').find('.active').removeClass('active');
        $(target).closest('li').addClass('active');
        $('#products-grid').empty();
        refreshProdcts(products, linkname);
      });

      // TODO 2.6: click event handler for details button

      $('.detailsButton').click((event) => {
        const { target } = event;
        const productImg = target.getAttribute('data-img');
        $('.modal-title').text(`More info about ${target.getAttribute('data-name')}`);
        $('.modal-body').html(`the price is ${target.getAttribute('data-price')} € <br> <img  style="width:400px;height:300px;" src="${productImg}"> <br> <p> A laptop, often called a notebook or "notebook computer", is a small, portable personal computer with a "clamshell" form factor, an alphanumeric keyboard on the lower part of the "clamshell" and a thin LCD or LED computer screen on the upper part, which is opened up to use the computer. Laptops are folded shut for transportation, and thus are suitable for mobile use.[1] Although originally there was a distinction between laptops and notebooks, the former being bigger and heavier than the latter, as of 2014, there is often no longer any difference.[2] Laptops are commonly used in a variety of settings, such as at work, in education, in playing games, Internet surfing, for personal multimedia and general home computer use.
        </p>`);
        $('#detailsModal').modal('toggle');
      });
    });
  //  or fail trying TODO: BONUS
  // End
});
