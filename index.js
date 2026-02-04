const narutoAPI = document.getElementById('narutoAPI');
let nAPI = "https://dattebayo-api.onrender.com/characters";


// Requirement fetch API & Get 
fetch("https://dattebayo-api.onrender.com/characters")
.then(response => response.json())
.then (data => {
    displayCharacter(data);
})
.catch(error => {
    console.error("Error fetching data:", error);
    narutoAPI.textContent = "Failed to load data.";
});

function displayCharacter(characters) {
    index.innerHTML = "";

    postMessage.slice(0,10).forEach (characters => {
        const charElem = document.createElementNS("div");
        charElem.classList.add("chara");

        charElem.innerHTML = `
      <h3>${item.name || item.title}</h3>
      <p>${item.description || "No description available"}</p>
    `;

    app.appendChild(card);


    });
}





searchInput.addEventListner("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allCharacter.filer (char => 
        char.name.toLowercase().includes(query)
    );
    renderCharacters(filtered);
});


