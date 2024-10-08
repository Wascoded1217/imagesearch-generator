let searchData = document.getElementById('search')
let result = document.getElementById('results')
const handleButton = () =>{
const accessKey = 'RBfeQVf1al9_Y9x0yv6uXxfzWVzndCgbc8C6aQLU0dk';
const apiUrl = `https://api.unsplash.com/search/photos?page=20&query=${searchData.value}`;

fetch(apiUrl, {
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    
  let resultes = ''
  data.results.map((value, index)=>{
    resultes +=`
    <div class="my-container">
   
                <div>
                    <a href="${value.urls.regular}"target="_blank">
                        <img src="${value.urls.small}" alt="">
                    </a>  
                        <!-- <p></p>
                        <span></span> -->
                </div>
          </div>
    `
  })
  result.innerHTML = resultes
    // Handle the API response data here
    console.log(data.results);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


}