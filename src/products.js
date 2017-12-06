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
    $('#infos').text(`${type} products (${Object.keys(products).length})`);
  } else {
    products.filter(product => product.type === type).forEach((product) => {
      $('.row').append(mkProductCard(product));
    });
    $('#infos').text(`${type} products (${Object.keys(products.filter(product => product.type === type)).length})`);
  }
}
