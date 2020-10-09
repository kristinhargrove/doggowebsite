//waits until the page is loaded because of the defer in the html

//this fetchs the breeds list frm the API 
fetch('https://dog.ceo/api/breeds/list')
    .then(function(response) {
        return response.json(); //parses the Json
    })
    .then(function(data) { //callback setup with the data from the API call
        let breeds = data.message; //data that we need (list of breeds)

        let breedList = document.getElementById('breed-list'); // grabs the selet element from the HTML so it could be targetted & assigns it to variable 

        breeds.forEach(function(breed) { //callback function -
            let breedElement = document.createElement('option'); // ctag for each breed
            breedElement.setAttribute('value', breed); //set the option value the breed name
            breedElement.innerHTML = breed; //set inner html to the breed name
            breedList.appendChild(breedElement); // append to the breed list, which is the select box
        });
        

        breedList.addEventListener('change', function(event) {
            var breedName = event.target.value;
            fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
                .then(function(response) {
                    return response.json();
                })
                .then (function(data) {
                    let dogImage = document.createElement('img');
                    dogImage.setAttribute('src', data.message);
                    document.body.appendChild(dogImage);
                })
        })
/*
        let button = document.getElementById('generate');

        button.addEventListener('click', function() {
            button.innerHTML = "Generating Doggo...";
            fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
                .then(function(response) {
                    return response.json();
                })
                .then (function(data) {
                    let dogImage = document.createElement('img');
                    dogImage.setAttriubute('src', data.message);
                    document.body.appendChild(dogImage);
                    button.innerHTML = "Generate Doggo...";
                })
        })

        */

    })

//now we have a drop down on the page of the different breed list

//below code creates the doggo button
/*

button.addEventListener('', function() {
    button.innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/${breedName}/image/random`')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let dogImage = document.createElement('img');
            dogImage.setAttribute('src', data.message);
            document.body.appendChild(dogImage);
            button.innerHTML = "Generate Doggo...";
        })
})

*/