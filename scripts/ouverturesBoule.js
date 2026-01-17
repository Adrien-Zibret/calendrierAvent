export function ouvrirBoule(){
    const divsBoule = document.querySelectorAll('.divBoule');
    // création des écouteurs de click sur les boules pour les animations à la selection de la boule
    const imagesBoule = document.querySelectorAll('.imgBoule');
    for (let i = 0; i < imagesBoule.length; i++) {
        imagesBoule[i].addEventListener('click', () => {
            attribuerSelectAnim(imagesBoule[i]);
        })
    }
    const selectAnimList = ["spinNGrow", "balanceNGrow", "bigBalance"]; // Liste des classes des animations de selections
    function attribuerSelectAnim(img) {
        let index = definirIndexAleatoire(selectAnimList.length);
        img.classList.add(selectAnimList[index]);
    }
    function definirIndexAleatoire(max) {
        return (Math.floor(Math.random() * Math.floor(max)));
    }

    // Créations des écouteurs de fin d'animation pour afficher l'anecdote
    for (let i = 0; i < imagesBoule.length; i++) {
        imagesBoule[i].addEventListener('animationend', () => {
            let indexAnecdote = definirIndexAleatoire(24) + 1;
            // on retire toutes les animations
            selectAnimList.forEach((a) => {
                imagesBoule[i].classList.remove(a);
                // et on lui met le scale à 2 avec la classe css scale2 créée pour qu'elle reste grosse
                imagesBoule[i].classList.add('scale2');
            })
            // création d'une div de fond pour l'image
            let div = document.createElement('div');
            div.classList.add('bgAnecdote');
            // On crée et on affiche l'image de l'anecdote
            let anecdote = document.createElement('img');
            anecdote.classList.add('img-fluid', 'imgAnecdote');
            // On lui met l'attribut src correspondant à l'anecdote voulue
            anecdote.src = `assets\\anecdotes\\anecdote${indexAnecdote}.png`; // A voir si elles sont prévu ou aléatoire
            // On la rattache à la div
            div.appendChild(anecdote);
            // puis à la page
            const page = document.getElementById('page');
            page.appendChild(div);
            // display none de l'image au click sur celle-ci grâce à la classe off créée en css
            div.addEventListener('click', () => {
                div.classList.add('off');
                // et remplacement de l'image de la boule par deux images coupées
                imagesBoule[i].classList.add('off');
                const openAnimListG = ['pincePelucheGauche', 'pinceReverseGauche', 'ouvertureGauche']; // Liste des classes d'animation d'ouverture, en double car il y a deux images
                const openAnimListD = ['pincePelucheDroite', 'pinceReverseDroite', 'ouvertureDroite'];
                const openAnimListH = ['ouverturePokeBallH', 'boubleVH']; // //Liste des classes d'animation d'ouverture verticale, en double car il y a deux images
                const openAnimListB = ['ouverturePokeBallB', 'boubleVB'];
                if (divsBoule[i].classList.contains('verticale')) { ////// pour faire la différence entre les ouvertures horizontales et verticales
                    const index = definirIndexAleatoire(openAnimListB.length);
                    // rectification de la direction de la flexbox
                    divsBoule[i].classList.add('flexColumn');
                    // image du haut
                    let imgH = document.createElement('img');
                    divsBoule[i].appendChild(imgH);
                    imgH.classList.add('img-fluid', 'zindex3', openAnimListH[index], 'imgH'); /// à changer
                    imgH.src = `assets\\boulesCoupees\\boule${i + 1}H.png`;
                    // image du bas
                    let imgB = document.createElement('img');
                    divsBoule[i].appendChild(imgB);
                    imgB.classList.add('img-fluid', 'zindex3', openAnimListB[index], 'imgB'); /// à changer
                    imgB.src = `assets\\boulesCoupees\\boule${i + 1}B.png`;
                    // écoute de la fin de l'animation pour afficher le message de la direction
                    imgB.addEventListener('animationend', () => {
                        let bgMessage = document.createElement('div');
                        bgMessage.classList.add('bgMessage');
                        page.appendChild(bgMessage);
                        let message = document.createElement('img');
                        message.classList.add('img-fluid', 'imgAnecdote'); // pour le test
                        message.src = 'assets\\anecdotes\\anecdote1.png'; // pour le test
                        bgMessage.appendChild(message);
                        // au clic sur le bg du message (ou le message) on remet tout à zéro
                        bgMessage.addEventListener('click', () => {
                            bgMessage.classList.add('off');
                            // on supprime les classes d'animation
                            openAnimListB.forEach((b) => {
                                imgB.classList.remove(b);
                            })
                            openAnimListH.forEach((h) => {
                                imgH.classList.remove(h);
                            })
                            // on met les deux image en display none
                            imgB.classList.add('off');
                            imgH.classList.add('off');
                            // et enfin on remet l'image d'origine de la boule au scale 1
                            imagesBoule[i].classList.remove('scale2', 'off');
                        })
                    })
                } else {
                    const index = definirIndexAleatoire(openAnimListD.length);
                    // image gauche
                    let imgG = document.createElement('img');
                    imgG.classList.add('img-fluid', 'zindex3', openAnimListG[index]);
                    imgG.src = `assets\\boulesCoupees\\boule${i + 1}G.png`;
                    divsBoule[i].appendChild(imgG);
                    // image droite
                    let imgD = document.createElement('img');
                    imgD.classList.add('img-fluid', 'zindex3', openAnimListD[index]);
                    imgD.src = `assets\\boulesCoupees\\boule${i + 1}D.png`;
                    divsBoule[i].appendChild(imgD);
                    // écoute de la fin de l'animation pour afficher le message de la direction
                    imgD.addEventListener('animationend', () => {
                        let bgMessage = document.createElement('div');
                        bgMessage.classList.add('bgMessage');
                        page.appendChild(bgMessage);
                        let message = document.createElement('img');
                        message.classList.add('img-fluid', 'imgAnecdote'); // pour le test
                        message.src = 'assets\\anecdotes\\anecdote1.png'; // pour le test
                        bgMessage.appendChild(message);
                        // au clic sur le bg du message (ou le message) on remet tout à zéro
                        bgMessage.addEventListener('click', () => {
                            bgMessage.classList.add('off');
                            // on supprime les classes d'animation
                            openAnimListD.forEach((d) => {
                                imgD.classList.remove(d);
                            })
                            openAnimListG.forEach((g) => {
                                imgG.classList.remove(g);
                            })
                            // on met les deux image en display none
                            imgD.classList.add('off');
                            imgG.classList.add('off');
                            // et enfin on remet l'image d'origine de la boule au scale 1
                            imagesBoule[i].classList.remove('scale2', 'off');
                        })
                    })
                }
            })
        })
    }
}





