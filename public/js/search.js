// var searchWord = document.getElementById('searchWord');
// var template = document.getElementById('template');

// var searchWord = input.value;

// fetch(`https://places.cit.api.here.com/places/v1/autosuggest?at=-12.0463731,-77.042754&q=${this.state.searchWord}&app_id=OGYLftP8d2ca44VEO7PF&app_code=xil_Gm8hAdrTOIHhwDc2rg`)
// .then(function(response) {
//   return response.json();
//   console.log(response)
// })
// .then((data) => {
//   this.setState({ data });
//   console.log(data)
// })
// .catch(function(error) {
//   console.log('something went wrong');
// })



// console.log(data.result)


// data.results.forEach((elem, i) => {
//           const template = `<a href="/${elem.id}" class="list-group-item list-group-item-action">${elem.name}</a>`;
//           $('#template').append(template);
// });



// data && data.results && data.results.map((item, idx) => (
//     <div key={idx} className="caard">
//       <div>
//         <h5>{item.title}</h5>
//         <img className="icon" src="https://image.ibb.co/fO8VNx/placeholder.png" alt={item.title} />
//         <span>{item.highlightedVicinity}</span>           
//       </div>
//     </div>
//   )).reverse()




const uploadCategories = () =>{
  const searchWord = document.getElementById('searchWord');
  let valSearchWord = searchWord.value;
  $.getJSON(`https://places.cit.api.here.com/places/v1/autosuggest?at=-12.0463731,-77.042754&q=${this.state.valSearchWord}&app_id=OGYLftP8d2ca44VEO7PF&app_code=xil_Gm8hAdrTOIHhwDc2rg`, function(response) {
    response.forEach((elem, i) => {
      const templateCategories = `<div>
                                    <h5>{item.title}</h5>
                                    <img className="icon" src="https://image.ibb.co/fO8VNx/placeholder.png" alt={item.title} />
                                    <span>{item.highlightedVicinity}</span>           
                                  </div>`;
      $('#template').append(templateCategories);
    });
  });
};

uploadCategories();