import $ from 'jquery';
import cardTemplate from './templates/card-template.html';

//  create product box in grid
export function mkProductCard(product) {
  const $el = $(cardTemplate);
  $el.find('div:nth-child(1)').addClass(`card ${product.category_id}`);
  $el.find('.card-title').text(product.name);
  $el.find('.card-text').text(`Price: ${product.price}€`);
  $el.find('.card-img-top').attr('src', `./static/assets/images/${product.type}.jpg`);
  $el.find('.detailsButton').attr('data-name', `${product.name}`);
  $el.find('.detailsButton').attr('data-price', `${product.price}`);
  $el.find('.detailsButton').attr('data-img', `./static/assets/images/${product.type}.jpg`);
  return $el;
}

//  filter and refresh the products
//  TODO 1.3: Add refresh Products
export function refreshProdcts(products, type) {
  $('#products-grid').append('<div class="row"></div>');
  if (type === 'All') {
    products.forEach((product) => {
      $('.row').append(mkProductCard(product));
    });
    $('#infos').text(`All products (${Object.keys(products).length})`);
  } else {
    products.filter(product => product.type === type).forEach((product) => {
      $('.row').append(mkProductCard(product));
    });
    const activcategory = $('.navbar-nav .active').text();

    $('#infos').text(`Total products in ${activcategory} (${Object.keys(products.filter(product => product.type === type)).length})`);
  }
  $('.detailsButton').click((event) => {
    const { target } = event;
    const productImg = target.getAttribute('data-img');
    $('.modal-title').text(`More info about ${target.getAttribute('data-name')}`);
    $('.modal-body').html(`the price is ${target.getAttribute('data-price')} € <br> <img  style="width:400px;height:300px;" src="${productImg}"> <br> <p> A laptop, often called a notebook or "notebook computer", is a small, portable personal computer with a "clamshell" form factor, an alphanumeric keyboard on the lower part of the "clamshell" and a thin LCD or LED computer screen on the upper part, which is opened up to use the computer. Laptops are folded shut for transportation, and thus are suitable for mobile use.[1] Although originally there was a distinction between laptops and notebooks, the former being bigger and heavier than the latter, as of 2014, there is often no longer any difference.[2] Laptops are commonly used in a variety of settings, such as at work, in education, in playing games, Internet surfing, for personal multimedia and general home computer use.
    </p>`);
    $('#detailsModal').modal('toggle');
  });
}
