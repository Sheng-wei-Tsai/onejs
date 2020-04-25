/* 1. Grab the input*/

document.querySelector('.js-go').addEventListener('click', function(){
  let input = document.querySelector('input').value;
  // console.log(input);
  pushToDom(input)
})
document.querySelector('.js-userinput').addEventListener('keyup', e => {
  let input = document.querySelector('input').value;
  // if the key enter is pressed...
  if(e.which === 13) {
    pushToDom(input); // 如果只有這段，就會把輸入的值，瞬間顯示在螢幕上，但是不希望他一直抓得不需要的事件
  }
})

/* 2. do the data stuff with the API */
let userkey = "sDPUc7Kg9PajyYgQZWBb2nDlu4W69olF";
let url = `https://api.giphy.com/v1/gifs/search?api_key=${userkey}&limit=30&q=funny`
// console.log(url)

let giphyAjaxCall = new XMLHttpRequest();
giphyAjaxCall.open('GET', url);
giphyAjaxCall.send();
giphyAjaxCall.addEventListener('load', function(e){
  let data = e.target.response;
  // console.log(data)
  pushToDom(data);
})




/* 3. show me the GIFs */

// let pushToDom = () => {
//   let container = document.querySelector('.js-container')
//   container.innerHTML = input;
// }

let pushToDom = input => {
  // 使用json.parse 就可以幫你的資料整理成好看的一個object
  let response = JSON.parse(input);
  // console.log(response)
  let imageUrls = response.data;
  // console.log(imageUrls)
    imageUrls.forEach(image => {
    let src = image.images.fixed_height.url
    console.log(src)
    let container = document.querySelector('.js-container')
    container.innerHTML += `<img src="${src}" class="container-image">`;

    })
}