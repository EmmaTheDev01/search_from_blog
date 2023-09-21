//Key to the API, in this case, I used Unsplash images API
const key = "tCXpW7zSLoeqev2-_XiTU9yBLpnEGlGibO0sgcNzfFA";
//creatign varibles to call our html elements
const input = document.getElementById("search_input");
const search = document.getElementById("btn");
const output = document.getElementById("results");
const show_more = documemt.getElementById("show_more");
const form = document.getElementById("form");

let input_query = "";
let page_number = 1;

//function to search images from API
async function search_images() {
  input_query = input.value;
  let search_url = `https://api.unsplash.com/search/photos?page=${page_number}&query=${input_query}&client_id=${key}`;
  //fetching data
  const res = await fetch(search_url);
  const data = await res.json();
  const result = data.results;
  //Collecting data from API
  if (page == 1) {
    output.innerHTML = "";
  }
  //Displaying API data on the page
  result.map((result) => {
    const image_container = document.createElement("div");
    image_container.classList.add("search_query");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    image_container.appendChild(image);
  });
  //If the search query uotputs more than 1 page of images, show the show more and increment the page number
  page_number++;
  if (page_number > 1) {
    show_more.classList.remove("hidden");
  }
}
//Creating an event to search from a search form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  search_images();
});
//Creating an event to show more
show_more.addEventListener("click", (e) => {
  e.preventDefault();
  search_images();
});
