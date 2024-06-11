// var addProducts = document.getElementById("addProducts");
// var deletElment = document.getElementById("deletElment");
// var upDateElment = document.getElementById("upDateElment");
// var searchProducts = document.getElementById("searchProducts");
// var arrayProdut = [];
// var wife;

// if (localStorage.getItem("pushArray") != null) {
//   arrayProdut = JSON.parse(localStorage.getItem("pushArray"));

//   dasplay(arrayProdut)

// }

// function add() {
//   if (addTest(productName) == true && addTest(productPrice) == true && addTest(productDesc) == true) {
//     var newProduct = {
//       name: productName.value,
//       price: productPrice.value,
//       desc: productDesc.value,
//       image: productName.value,
//     }
//     arrayProdut.push(newProduct);
//     localStorage.setItem("pushArray", JSON.stringify(arrayProdut))
//     dasplay(arrayProdut)
//     clearDate()
//     // console.log(newProduct);
//     productName.classList.remove("is-invalid");
//     productName.classList.remove("is-valid");
//     productPrice.classList.remove("is-invalid");
//     productPrice.classList.remove("is-valid");
//     productDesc.classList.remove("is-invalid");
//     productDesc.classList.remove("is-valid");
//   }
// }

// addProducts.addEventListener("click", add)

// function dasplay(dater) {
//   var date = ``;
//   for (let i = 0; i < dater.length; i++) {
//     date +=
//       `
//     <div class="col-3 mb-5">
//         <div class="m-auto text-center">
//            <h2 class="fw-light">${dater[i].name}</h2>
//            <img class="w-25" src="images/1 (1).jpg" alt>

//            <h4> ${dater[i].price}</h4>
//            <p>
//            ${dater[i].desc}
//                </p>
//                <button onclick="deletDate(${i})" id="deletElment" class="btn btn-danger mx-2 text-white fw-bolder ">Delete</button>
//                <button onclick="updateIndex(${i})" id="upDateElment" class="btn btn-warning mx-2 text-white fw-bolder">Update</button>
//         </div>
//     </div>

//     `

//   }
//   document.getElementById('datable').innerHTML = date;
// }

// function deletDate(idex) {
//   arrayProdut.splice(idex, 1);
//   localStorage.setItem("pushArray", JSON.stringify(arrayProdut))
//   dasplay(arrayProdut)
// }

// function updateIndex(ind) {
//   wife = ind;
//   productName.value = arrayProdut[ind].name;
//   productPrice.value = arrayProdut[ind].price;
//   productDesc.value = arrayProdut[ind].desc;
//   updateProducts.classList.add("d-flex")
//   updateProducts.classList.remove("d-none")
//   addProducts.classList.add("d-none")
// }

// function updateIndexProducts() {
//   // updateProducts.classList.add("d-flex")
//   addProducts.classList.remove("d-none")
//   updateProducts.classList.add("d-none")
//   arrayProdut[wife].name = productName.value;
//   arrayProdut[wife].price = productPrice.value;
//   arrayProdut[wife].desc = productDesc.value;
//   localStorage.setItem("pushArray", JSON.stringify(arrayProdut))
//   dasplay(arrayProdut)
//   clearDate()
// }

// function searchIndexProducts() {
//   var trem = searchProducts.value;
//   var searchdesc = [];
//   for (let i = 0; i < arrayProdut.length; i++) {
//     if (arrayProdut[i].name.toLowerCase().includes(trem.toLowerCase()) == true) {
//       searchdesc.push(arrayProdut[i])
//     }

//   }

//   dasplay(searchdesc)
// }

// function addTest(element) {

//   var regx = {
//     productName: /^[a-z]{2,17}$/,
//     productPrice: /^[0-9]{2,8}$/,
//     productDesc: /^.{6,22}$/,
//   }

//   if (regx[element.id].test(element.value) == true) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//     return true;

//   }
//   else {
//     element.classList.remove("is-valid");
//     element.classList.add("is-invalid");
//     return false;
//   }

// }

// ==========================================================================================================================

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");

var productsContainer = [];
// console.log("productsContainer11", productsContainer);

if (localStorage.getItem("productsStorage") !== null) {
  productsContainer = JSON.parse(localStorage.getItem("productsStorage"));
  displayProducts();
}

// ================================================================================================

function addProducts() {
  if (
    validateProductName(productNameInput) &&
    validateProductDescription(productDescInput) == true
  ) {
    var product = {
      code: productNameInput.value,
      price: productPriceInput.value,
      desc: productDescInput.value,
      image: `images/products/${productImageInput.files[0]?.name}`,
    };
    console.log("image", productImageInput.files[0]?.name);

    //   console.log("product", product);
    productsContainer.push(product);
    //   console.log("productsContainer22", productsContainer);
    displayProducts();
    clearForm();

    localStorage.setItem("productsStorage", JSON.stringify(productsContainer));
  }
}

// ================================================================================================

function clearForm() {
  productNameInput.value = null;
  productPriceInput.value = null;
  productDescInput.value = null;
  productNameInput.value = null;
}

// ================================================================================================
function displayProducts() {
  var cartoona = ``;
  for (var i = 0; i < productsContainer.length; i++) {
    cartoona += `
        <div class="col-3">
            <div>
                <h2 class="fw-light">${productsContainer[i].code}</h2>
                <img class="w-25" src="${productsContainer[i].image}" alt />

                <h4>${productsContainer[i].price}</h4>
                <p class="lh-lg">
                ${productsContainer[i].desc}
                </p>
                <button
                    id="deletElment"
                   onclick="deleteProduct(${i})" class="btn btn-danger mx-2 text-white fw-bolder"
                >
                    Delete
                </button>
                <button
                onclick="setFormForUpdate(${i})"
                    id="upDateElment"

                    class="btn btn-warning mx-2 text-white fw-bolder"
                >
                    Update
                </button>
            </div>
        </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartoona;
}

// ================================================================================================
// Delete
function deleteProduct(deleteIndex) {
  //   console.log("deleteProduct");
  productsContainer.splice(deleteIndex, 1);
  displayProducts();
  localStorage.setItem("productsStorage", JSON.stringify(productsContainer));
}
// ================================================================================================
// search
function searchProducts(term) {
  var cartoona = ``;

  for (let i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].code.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      cartoona += `
        <div class="col-3">
            <div>
                <h2 class="fw-light">${productsContainer[i].code}</h2>
                <img class="w-25" src="${productsContainer[i].image}" alt />


                <h4>${productsContainer[i].price}</h4>
                <p class="lh-lg">
                ${productsContainer[i].desc}
                </p>
                <button
                    id="deletElment"
                   onclick="deleteProduct(${i})" class="btn btn-danger mx-2 text-white fw-bolder"
                >
                    Delete
                </button>
                <button
                onclick="setFormForUpdate(${i})"
                    id="upDateElment"
                    class="btn btn-warning mx-2 text-white fw-bolder"
                >
                    Update
                </button>
            </div>
        </div>
    `;
    }
  }
  document.getElementById("rowData").innerHTML = cartoona;
}

// ================================================================================================
// Update

var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

var updateIndex;

function setFormForUpdate(updateItem) {
  updateIndex = updateItem;

  console.log("setFormForUpdate");
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");

  productNameInput.value = productsContainer[updateItem].code;
  productPriceInput.value = productsContainer[updateItem].price;
  productDescInput.value = productsContainer[updateItem].desc;
}

function updateProduct() {
  console.log("updateProduct");

  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");

  productsContainer[updateIndex].code = productNameInput.value;
  productsContainer[updateIndex].price = productPriceInput.value;
  productsContainer[updateIndex].desc = productDescInput.value;

  displayProducts();
  localStorage.setItem("productsStorage", JSON.stringify(productsContainer));
  clearForm();
}

// ================================================================================================
// Validation & Regular Expression

var alertProductName = document.getElementById("alertProductName");
var alertProductDescription = document.getElementById(
  "alertProductDescription"
);

function validateProductName(element) {
  // console.log("validateProductName");
  // console.log("validateProductName", element.value);

  var regx = /^[A-Z][a-z]{2,8}$/;
  var myStr = productNameInput.value;

  // if (regx.test(myStr) == true) {
  if (regx.test(element.value) == true) {
    // else اعمل اللي في ال true اعمل خصائص ده لو مش ب true لو ب myStr ع test انا كده بقول اعمل
    // console.log("match");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    // alertProductName.classList.add("d-none");
    alertProductName.classList.replace("d-block", "d-none");
    return true;
  } else {
    // console.log("no match");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    // alertProductName.classList.remove("d-none");
    alertProductName.classList.replace("d-none", "d-block");
    return false;
  }
}

function validateProductDescription(element) {
  // console.log("validateProductName");
  // console.log("validateProductName", element.value);

  var regx = /^[A-Z][a-z]{2,10}$/;
  var myStr = productNameInput.value;

  // if (regx.test(myStr) == true) {
  if (regx.test(element.value) == true) {
    // else اعمل اللي في ال true اعمل خصائص ده لو مش ب true لو ب myStr ع test انا كده بقول اعمل
    // console.log("match");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    // alertProductDescription.classList.add("d-none");
    alertProductDescription.classList.replace("d-block", "d-none");
    return true;
  } else {
    // console.log("no match");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    // alertProductDescription.classList.remove("d-none");
    alertProductDescription.classList.replace("d-none", "d-block");
    return false;
  }
}
