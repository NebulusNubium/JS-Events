const search = document.getElementById('countryList');
const countries = document.getElementsByClassName('country');

search.addEventListener('input', function () {
    const term = this.value;

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i].textContent;
        if (country.includes(term)) {
            countries[i].style.display = '';
        } else {
            countries[i].style.display = 'none';
        }
    }
});