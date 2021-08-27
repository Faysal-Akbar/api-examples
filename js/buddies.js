const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(Response => Response.json())
    .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.classList.add('buddies');
        p.innerText = `
        Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email : ${buddy.email}
        Location : ${buddy.location.city}
        Country : ${buddy.location.country}

        `;
        buddiesContainer.appendChild(p);
    }
}