console.log('PICTURES')


//BUILD URL
let baseurl = "https://picsum.photos/id/";
let imageId = Math.floor(Math.random() * 1100); 
let imageInfo = '/info';
let imgSize = '/200/300';
let imageUrl = baseurl + imageId + imgSize;
let infoUrl = baseurl + imageId + imageInfo;

//VARIABLES
let image = document.querySelector('.image')

//CONTAINERS
let authorContainer = document.getElementById("author");

//DISPLAY IMAGE
fetch(imageUrl)
    .then (function(results) { 
        if (!results.ok) {
            return new Error(results);
        } 
        console.log(results)
        return results.blob();
    })
    .then(function(photoBlob) {
        let objectURL = URL.createObjectURL(photoBlob);
        image.src = objectURL;
    })
    .catch(function(err) { 
        console.log(err); 
    });

//IMAGE INFO
fetch(infoUrl)
    .then (function(results) {
       return results.json()
    })
    .then (function(json) {
        let imageAuthor = json.author
        displayInfo(imageAuthor)
    })
    
    function displayInfo (photographer) {
        console.log(photographer)
        let display = "Photographer: " + photographer
        authorContainer.textContent = display
    }

    let getNewPhoto = document.querySelector('.btn')
    getNewPhoto.addEventListener('click', refreshPage)

    function refreshPage(){
        window.location.reload();
    } 

