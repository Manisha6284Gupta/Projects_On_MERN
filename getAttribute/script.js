const imageEl = document.getElementById("imageGallery").querySelectorAll("img")


// create an array to  store images by author manisha



//Use getAttribute to filter images by author 

imageEl.forEach((img) =>{
   const author = img.getAttribute("src");
   console.log(author);
})


