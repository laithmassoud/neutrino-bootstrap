import $ from 'jquery';
import productCardTemmplate from './templates/product-item.html';

function mkProductCard(product) {
  const $card = $(productCardTemmplate);
  $card.find('.card-title').text(product.name);
  $card.find('.card-img-top').attr('src', `http://via.placeholder.com/320x240?text=${product.name}`);
  $card.find('.card-text').text(`Price: ${product.price}€`);
  return $card;
}

export default function mkproductsGrid(products) {
  const $ContainerEl = $('<div class="container-fluid"></div>');

  const $rowEl = $('<div class="row"></div>');
  $ContainerEl.append($rowEl);
  products.forEach((product) => {
    const $colEl = $('<div class="col-12 col-md-4"></div>');
    $colEl.append(mkProductCard(product));
    $rowEl.append($colEl);
  });

  return $ContainerEl;
}
