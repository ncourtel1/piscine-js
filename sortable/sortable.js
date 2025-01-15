const apiURL = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";
let heroes = [];
let filteredHeroes = [];
let sortDirection = {};
let pageSize = 20;
let currentPage = 1;

// Charger les données depuis l'API
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        heroes = data;
        filteredHeroes = [...heroes];
        renderTable();
    })
    .catch(error => console.error("Erreur de chargement:", error));

// Afficher les données dans le tableau
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * pageSize;
    const end = pageSize === "all" ? filteredHeroes.length : start + parseInt(pageSize);

    filteredHeroes.slice(start, end).forEach(hero => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${hero.images.xs}" alt="${hero.name}"></td>
            <td>${hero.name}</td>
            <td>${hero.biography.fullName || "N/A"}</td>
            <td>${hero.powerstats.intelligence ?? "N/A"}</td>
            <td>${hero.appearance.race || "N/A"}</td>
            <td>${hero.appearance.gender || "N/A"}</td>
            <td>${hero.appearance.height[1] || "N/A"}</td>
            <td>${hero.appearance.weight[1] || "N/A"}</td>
            <td>${hero.biography.placeOfBirth || "N/A"}</td>
            <td>${hero.biography.alignment || "N/A"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction de tri améliorée
function sortTable(key) {
    const keys = key.split('.');
    const direction = sortDirection[key] ? -1 : 1;
    sortDirection[key] = !sortDirection[key];

    filteredHeroes.sort((a, b) => {
        const aValue = keys.reduce((obj, k) => obj?.[k] ?? '', a);
        const bValue = keys.reduce((obj, k) => obj?.[k] ?? '', b);

        // Gestion des valeurs manquantes (toujours en bas)
        if (!aValue && bValue) return 1;
        if (!bValue && aValue) return -1;
        if (!aValue && !bValue) return 0;

        // Conversion des valeurs avec unités (poids, taille)
        const numA = parseFloat(aValue.replace(/[^0-9.-]/g, ""));
        const numB = parseFloat(bValue.replace(/[^0-9.-]/g, ""));

        if (!isNaN(numA) && !isNaN(numB)) {
            return (numA - numB) * direction;
        }

        // Tri alphabétique par défaut
        return aValue.localeCompare(bValue) * direction;
    });

    renderTable();
}

// Recherche instantanée
document.getElementById('searchInput').addEventListener('input', event => {
    const searchText = event.target.value.toLowerCase();
    filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(searchText));
    renderTable();
});

// Changement de taille de page
document.getElementById('pageSize').addEventListener('change', event => {
    pageSize = event.target.value === "all" ? "all" : parseInt(event.target.value);
    renderTable();
});