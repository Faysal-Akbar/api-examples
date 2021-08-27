const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const divContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        divContainer.appendChild(div);

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetail(data[0]));
 }

 const displayCountryDetail = country => {
    const divContainer2 = document.getElementById('country-detail');
    divContainer2.innerHTML = `
    <h3>Country : ${country.name}</h3>
    <p>Population : ${country.population}</p>
    <img width="200px" src="${country.flag}">
    `
 }