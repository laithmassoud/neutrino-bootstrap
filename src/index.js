import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './tamplates/navbar.html';

const pictures = [
  'lion.jpg',
  'lion3.jpg',
  'lion4.jpg',
  'lion5.jpg',
  'lion6.jpg',
];

const carousel = `
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item container active">
      <div class="row">
        <div class="col-md-6 ">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 ">
          <img class="d-block w-100" src="static/lion.jpg" alt="First slide" style="width:100%; height: 300px;">
        </div>
      </div>
    </div>
    <div class="carousel-item container ">
      <div class="row">
        <div class="col-md-6 ">
          <img class="d-block w-100" src="static/lion5.jpg" alt="First slide" style="width:100%; height: 300px;">
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item container ">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 ">
          <img class="d-block w-100" src="static/lion4.jpg" alt="First slide" style="width:100%; height: 300px;">
        </div>
      </div>
    </div>
    <div class="carousel-item container ">
      <div class="row">
        <div class="col-md-6 ">
          <img class="d-block w-100" src="static/lion5.jpg" alt="First slide" style="width:100%; height: 300px;">
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
`;

function mkCard(img) {
  return `
<div class="card">
  <img class="card-img-top" src="static/${img}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
}

const grid = `
<div class="container">
  <div class ="row">
  <div class="col-12 col-lg-4" > ${mkCard(pictures[0])}</div>
  <div class="col-12 col-lg-4" > ${mkCard(pictures[2])}</div>
  <div class="col-12 col-lg-4" > ${mkCard(pictures[3])}</div>
  </div>
</div>
`;


$(() => {
  $('#root')
    .append(navbar)
    .append(carousel)
    .append(grid);
});