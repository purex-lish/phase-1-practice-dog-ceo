console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Challenge 1: Fetch and Display Dog Images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            // Iterate over each image URL received and create <img> elements
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img); // Append each image to the container
            });
        })
        .catch(error => console.log(error));
    // Challenge 2: Fetch and Display Dog Breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            // Iterate over each breed key in the response and create <li> elements
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed; // Set the breed name as text content of <li>
                dogBreedsList.appendChild(li); // Append each <li> to the dog breeds list
            });
        })
        .catch(error => console.log(error));

    // Challenge 3: Change Font Color on Click
    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change font color of clicked <li>
        }
    });

    // Challenge 4: Filter Breeds by Starting Letter
    const breedDropdown = document.getElementById('breed-dropdown');
    const allBreedsList = document.querySelectorAll('#dog-breeds li');

    breedDropdown.addEventListener('change', function () {
        const selectedLetter = breedDropdown.value.toLowerCase();

        allBreedsList.forEach(breed => {
            const breedName = breed.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breed.style.display = 'block'; // Show the breed if starts with selected letter
            } else {
                breed.style.display = 'none'; // Hide the breed if it doesn't start with selected letter
            }
        });
    });
});

