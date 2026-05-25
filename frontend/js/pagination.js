//pagination
let currentPage = 1;

const limit = 10;

async function loadPage(page){

   const response =
      await fetch(
         `http://localhost:5000/api/poultry?page=${page}&limit=${limit}`
      );

   const data =
      await response.json();

   console.log(data);

}

document
.getElementById("nextBtn")
.addEventListener("click", () => {

   currentPage++;

   loadPage(currentPage);

});
