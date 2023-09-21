//Key to the API, in this case, I used Unsplash images API
const key = "tCXpW7zSLoeqev2-_XiTU9yBLpnEGlGibO0sgcNzfFA";
//creatign varibles to call our html elements
const input = document.getElementById("search_input");
const search = document.getElementById("btn");
const output = document.getElementById("results");
const show_more = document.getElementById("show_more");
const form = document.getElementById("form");

let input_query = "";
let page_number = 1;

// Function to search images from API
async function search_images() {
  const input_query = input.value;
  const search_url = `https://api.unsplash.com/search/photos?page=${page_number}&query=${input_query}&client_id=${key}`;
  // Fetching data
  const res = await fetch(search_url);
  const data = await res.json();
  const results = data.results;
  // Clearing output if page number is 1
  if (page_number === 1) {
    output.innerHTML = "";
  }
  // Displaying API data on the page
  results.forEach((result) => {
    const image_output = document.createElement("div");
    image_output.classList.add("search_query");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const title = document.createElement("h2");
    title.innerText = result.title;
    const description = document.createElement("p");
    description.innerHTML = result.description;
    image_output.appendChild(image);
    image_output.appendChild(title);
    image_output.appendChild(description);
    output.appendChild(image_output);
  });
  // If the search query outputs more than 1 page of images, show the "Show More" button and increment the page number
  page_number++;
  if (page_number > 1) {
    show_more.style.display("block");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  search_images();
});
show_more.addEventListener("click", (e) => {
  e.preventDefault();
  search_images();
});
