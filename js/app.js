let CARS = [...DATA];
const carListEl = document.getElementById("carList");

// {
//     "id": "89aed5b8c686ebd713a62873e4cd756abab7a106",
//     "rating": 1,
//     "vip": true,
//     "top": false,
//     "timestamp": "1601652988000",
//   },

insertCards(carListEl, CARS);

function insertCards(whereEl, cars) {
  let html = "";
  cars.forEach((car) => {
    html += createCardElement(car);
  });
  whereEl.innerHTML = ""; //!!!
  whereEl.insertAdjacentHTML("beforeEnd", html);
}

function createCardElement(car) {
  return `<div class="col card mb-2">
    <div class="row g-0">
      <div class="col-4">
        <img width="1" height="1" loading="lazy" class="card-img position-relative" src="${car.img}" alt="${car.make} ${car.model} ${car.year}">
        <p class="status status-vip">${car.vip ? `<p class="status status-vip bg-primary fw-bold text-light position-absolute">VIP</p>` : ''}</p>
        <p class="status status-top">${car.top ? `<p class="status status-top bg-success fw-bold text-light position-absolute">TOP</p>` : ''}</p>
      </div>
      <div class="col-8">
        <div class="card-body">
          <h2 class="card-title text-primary fs-4">${car.make} ${car.model} ${car.engine_volume} (${car.year})</h2>
          <h3 class="card-text card-price fs-4 fw-bold text-success">${car.price} $</h3>

          <div class="car-inf row row-cols-2 ">
          <p class="col card-text card-odo"><i class="fas fa-tachometer-alt"></i>${car.odo} km</p>
          <p class="col card-text card-country"><i class="fas fa-map-marker-alt"></i>${car.country}</p>
          <p class="col card-text card-fuel engine-volume"><i class="fas fa-gas-pump"></i>${car.fuel}, ${car.engine_volume}L</p>
          <p class="col card-text card-transmission"><i class="fas fa-sitemap"></i>${car.transmission}</p>
          </div>

          <h4 class="car-inf card-consuption fs-6 fw-bolder">Fuel Consuption (L/100km)</h4>

          <div class="row row-cols-3 car-inf">
          <p class="col card-text card-odo"><i class="fas fa-road"></i>${car.consume.road}</p>
          <p class="col card-text card-country"><i class="fas fa-city"></i>${car.consume.city}</p>
          <p class="col card-text card-fuel engine-volume"><i class="fas fa-sync"></i>${car.consume.mixed}L</p>
          </div>

          <p class="card-vin border border-2 rounded-end border-primary"><i class="fas fa-car-alt text-light p-2 bg-primary"></i>${car.vin ? car.vin : "This car has no VIN!"}</p>
          <p class="car-inf"><i class="fas fa-fill-drip"></i>${car.color}</p>
          <p class="car-inf seller text-muted"><i class="fas fa-user-tie"></i>${car.seller}</p>

          <div class="cesser-box d-flex">
          <a href="tel:${car.phone}" class="btn btn-outline-success fw-bolder call-link"><i class="fas fa-phone-alt"></i>Call Seller</a>
          </div>

          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-footer">
            <small class="text-muted"><i class="far fa-clock"></i>${car.timestamp}</small>
            <small class="text-muted"><i class="far fa-eye"></i>${car.views}</small>
        </div>
      </div>
    </div>
  </div>`;
}
