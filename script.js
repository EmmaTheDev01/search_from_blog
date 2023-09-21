const key = "tCXpW7zSLoeqev2-_XiTU9yBLpnEGlGibO0sgcNzfFA";

const input = document.getElementById("search_input");
const search = document.getElementById("btn");
const output = document.getElementById("results");
const show_more = documemt.getElementById("show_more");

let input_query = "";
let page_number = 1;

 async function search_images(){
    input_query = input.value;
    let search_url = `https://api.unsplash.com/search/photos?page=${page_number}&query=${input_query}&client_id=${key}`;

    const res = await fetch(search_url);
    const data = await res.json();
    const result = data.results;

    if(page == 1){
        output.innerHTML = "";
    }
    result.map(result => {
        
        const image_container = document.createElement("div");
        image_container.classList.add("search_query");  
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        image_container.appendChild(image);
    });
    page_number++;
    if(page_number>1){
        show_more.classList.remove("hidden");
    }
}

