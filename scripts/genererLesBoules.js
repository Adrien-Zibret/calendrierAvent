export function genererLesBoules() {
    // Création des id pour les 23 divs contenant les boules pour les placer en CSS
    const divsBoule = document.querySelectorAll('.divBoule');
    for (let i = 0; i < divsBoule.length; i++) {
        divsBoule[i].id = `divBoule${i + 1}`;
    }
    // création et insertion des images dans les divs
    for (let i = 0; i < divsBoule.length; i++) {
        let img = document.createElement('img');
        img.src = `assets\\boulesEntieres\\boule${i + 1}.png`;
        img.alt = 'Une boule de Noël';
        img.classList.add('img-fluid')
        img.classList.add('imgBoule');
        divsBoule[i].appendChild(img);
    }

    // création et insertion des numéros sur les boules
    
    /* const numeroDansLeDesordre = [16, 12, 8, 14, 20, 1, 23, 17, 6, 21, 10, 3, 22, 15, 11, 4, 18, 5, 7, 19, 9, 2, 13];
    for (let i = 0; i < numeroDansLeDesordre.length; i++) {
        let numero = document.createElement('div');
        numero.innerHTML = numeroDansLeDesordre[i];
        numero.classList.add('numero');
        divsBoule[i].appendChild(numero);
    } */
    /*Nouvelle technique*/
    divsBoule.forEach((d) => {
        let numero = document.createElement('div');
        numero.innerHTML = `${d.dataset.id}`;
        numero.classList.add('numero');
        d.appendChild(numero);
    })
}
