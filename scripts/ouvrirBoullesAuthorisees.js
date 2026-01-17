export function authoriserOuverture() {
    const boules = document.querySelectorAll('.divBoule');
    const today = new Date();
    const currentMonth = today.getMonth();
    if (currentMonth === 10) {
        boules.forEach((b) => {
            if(b.dataset.id <= today.getDate()){
                b.classList.add('youpi');
            }
        })
    }
} 
