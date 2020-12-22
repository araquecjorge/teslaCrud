const cars = [
    { id: 1, Brand: "Tesla", Model: "3", Year: 2017, Autonomy: 354 },
    { id: 2, Brand: "Tesla", Model: "S", Year: 2012, Autonomy: 338 },
    { id: 3, Brand: "Tesla", Model: "X", Year: 2015, Autonomy: 322 },
    { id: 4, Brand: "Tesla", Model: "Y", Year: 2020, Autonomy: 370 },
    { id: 5, Brand: "Tesla", Model: "Roadster", Year: 2020, Autonomy: 1000 },
    { id: 6, Brand: "Tesla", Model: "Semi", Year: 2017, Autonomy: 800 },
    { id: 7, Brand: "Tesla", Model: "Cybertruck", Year: 2019, Autonomy: 400 },
    { id: 8, Brand: "Tesla", Model: "Cyberquad", Year: 2019, Autonomy: "Miss" }
  ];
  
  function printCars() {
    const container = document.getElementById("container-cars");
    let html = "";
    cars.forEach((auto) => {
      html += `<tr>
                      <td>${auto.Brand}</td>
                      <td>${auto.Model}</td>
                      <td>${auto.Year}</td>
                      <td>${auto.Autonomy}</td>
                      <td>
                          <button onclick="deleteauto(${auto.id})" class="btn">
                              Eliminar
                          </button>
                      </td>
                  </tr>`;
    });
    container.innerHTML = html;
  }
  
  function deleteauto(id) {
    const index = cars.findIndex((auto) => auto.id == id);
    cars.splice(index,1);
    printCars();
  }
  
  function addauto() {
    const id = cars[cars.length -1].id + 1;
    const inputBrand = document.getElementById('Brand');
    const Brand = inputBrand.value;
    const inputModel = document.getElementById('Model');
    const Model = inputModel.value;
    const inputYear = document.getElementById('Year');
    const Year = inputYear.value;
    const inputAutonomy = document.getElementById('Autonomy');
    const Autonomy = inputAutonomy.value;
    const newauto = {
      Brand,
      Model,
      Year,
      Autonomy,
      id,
    };
    cars.push(newauto);
    printCars();
    document.getElementById('form-auto').reset();
  }
  
  printCars();