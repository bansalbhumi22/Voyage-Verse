const accessKey = "qDPS6Xpg8ile2T-qeT4noCjFsleUxvmDBZSvS7hYNKY";
const destinationImg = document.querySelector("#destinations"); 
const places = ["Paris", "New York", "Italy", "Australia", "India", "Egypt", "Japan"];

async function fetchImages() {
    try {
        
        const imageFetchPromises = places.map(async (place) => {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${place}&client_id=${accessKey}&per_page=1`
            );
            if (!response.ok) {
                throw new Error(`Failed to fetch image for ${place}`);
            }

            const data = await response.json();
            const imgUrl = data.results[0]?.urls?.regular;

            return { place, imgUrl };
        });

        
        const imagesData = await Promise.all(imageFetchPromises);

        
        imagesData.forEach(({ place, imgUrl }) => {
            if (imgUrl) {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${imgUrl}">
                    <h3>${place}<h3>
                `;
                destinationImg.appendChild(card);
            }
        });
    } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
    }
}


fetchImages();

const signInBtn= document.querySelector("#sign-in");
const signUpBtn= document.querySelector("#sign-up");

function signInPage(){
    window.location.href= "sign-in-page-index.html";
}

function signUpPage(){
    window.location.href="sign-in-page-index.html";
}

signInBtn.addEventListener("click",signInPage);
signUpBtn.addEventListener("click",signUpPage);