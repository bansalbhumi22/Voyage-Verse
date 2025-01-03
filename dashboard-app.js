const accessKey = "qDPS6Xpg8ile2T-qeT4noCjFsleUxvmDBZSvS7hYNKY";
const destinationImg = document.querySelector("#destinations"); 

async function fetchImage(query) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=1`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch image for ${query}`);
        }

        const data = await response.json();
        const imgUrl = data.results[0]?.urls?.regular;

        if (imgUrl) {
            
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${imgUrl}" alt="${query}">
                 <h3>${query}</h3>
            `;

           
            
            destinationImg.appendChild(card);
        } else {
            console.error(`No image found for ${query}`);
        }
    } catch (error) {
        console.error(`Error fetching image for ${query}:`, error);
    }
}


const destinations = ["Paris", "New York", "Italy", "Australia", "India", "Egypt", "Japan"];
destinations.forEach(fetchImage);

