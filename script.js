// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
    const clickedClubCard = element;
    if (clickedClubCard) {
        const clickedClubTitle = clickedClubCard.querySelector('h2').textContent;
        const selectedClub = clubData.find(club => club.name === clickedClubTitle);

        if (selectedClub) {
            displayClubDetails(selectedClub);
        }
    }
}

// Display football club details
function displayClubDetails(club) {
    // Write your code here for task2
    const clubDetailsHTML = `
        <button onclick="window.location.reload();">Back</button>
        <h2>${club.name}</h2>
        <img src="${club.image}" alt="${club.name} logo">
        <p><b>League: </b> ${club.league}</p>
        <p><b>City: </b>${club.city}</p>
        <p><b>Stadium: </b>${club.stadium}</p>
        <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" >View Players</button>
        <p><b>Description: </b>${club.description}</p>
    `;
    clubDetailsContainer.innerHTML = clubDetailsHTML;
};


// Function to view club players
function viewClubPlayers(clubName) {
   // Write your code here for task3
   const selectedClub = clubData.find(club => club.name === clubName);
   const playerDetailsHTML = `
        <button onclick="window.location.reload();">Back</button>
        <h2>${selectedClub.name} Players</h2>
            ${selectedClub.players.map(player => `
                <p><b>Name: </b>${player.name}</p>
                <p><b>Position: </b>${player.position}</p>
                <p><b>Goals: </b>${player.goals}</p>
                <p><b>Assists: </b>${player.assists}</p>
                <hr>
            `).join('')}
            `
    clubDetailsContainer.innerHTML = playerDetailsHTML;
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
    const searchTerm = searchInput.value.toLowerCase();
    const filteredClubs = clubData.filter(club => {
        // Create a string containing club details for searching
        const clubDataString = `${club.name} ${club.league} ${club.city}`.toLowerCase();
        return clubDataString.includes(searchTerm);
    });
    displayClubs(filteredClubs);
};