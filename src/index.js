//  import core files
import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import modalTemplate from './templates/modal.html';
import mkCarousel from './carousel';
import refreshProducts from './products';

//  append navbar
$(() => {
  $('#root').append(modalTemplate)
    .append(navbarTemplate);
  //  read categories
  $.ajax('./static/categories.json')
    .done((categories) => {
      //  populate carousel with categories
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();

      //  Iterate over the categories and append to navbar
      categories.forEach((category, number) => {
        $('.navbar-nav').append(`
            <li class="nav-item">
            <a class="nav-link" data-id="${number}" data-name="${category.name}" href="#">${category.name}</a>
            </li>`);
      });
      $('.navbar-nav').append('<span class="glyphicon glyphicon-shopping-cart"></span>');
    })
    //  or fail trying
    .fail((xhr, status, error) => {
      $('#root').append(`<div>Ajax Error categories: ${error}</div>`);
    });

  //  ajax req and append products grid
  $.ajax('./static/products.json')
    .done((products) => {
      //  append products-grid after carousel
      $('#root').append(`<div class="infobox"><h2 id="infos">All products (${Object.keys(products).length})</h2></div>`);
      $('#root').append('<div id="products-grid" class="container-fluid"></div>');
      //  populate products-grid with products
      $('#products-grid').append('<div class="row"></div>');
      refreshProducts(products, '-1');
      // click event handler on nav-links
      $('.nav-link').click((eventObj) => {
        const { target } = eventObj;
        const linkName = target.getAttribute('data-id');
        $('.navbar-nav .active').removeClass('active');
        $(target).closest('li').addClass('active');
        //  clean the products-grid and update the content
        refreshProducts(products, linkName);
      });
    })
    //  or fail trying
    .fail((xhr, status, error) => {
      $('#root').append(`<div>Ajax Error products: ${error}</div>`);
    });
  $('.addCart').click(() => {
    //  localStorage.clear();

    if (localStorage.getItem('total') === null) {
      console.log('empty');
      const total = 1;
      localStorage.setItem('total', total);
    } else {
      const total = parseInt(localStorage.getItem('total'), 10);
      localStorage.setItem('total', total + 1);
    }
    console.log('Add to cart');
    console.log(localStorage.getItem('total'));
  });
  // End
});
