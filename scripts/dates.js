export function dateDuJour() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    const dateJour = document.getElementById('dateDuJour');
    const monthList = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    dateJour.innerHTML = `${day} ${monthList[month]} ${year}`;
}
export function noel() {
    let noel = new Date("december 25, 2025 00:00:01");
    noel = noel.toUTCString();
    return noel;
}

export function jourAvantNoel() {
    let today = new Date();
    let noel = new Date("december 25, 2025 00:00:01");
    let delta = noel - today;
    delta = Math.floor(delta / (24 * 60 * 60 * 1000));
    const spanJourAvantNoel = document.getElementById('jourAvantNoel');
    spanJourAvantNoel.innerHTML = `${delta}`;
}