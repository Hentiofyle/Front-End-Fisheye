   async function getPhotographers() {
 
   await fetch('http://localhost:5501/data/photographers.json')
    .then(function (res){
        if(res.ok){
            return res.json()
        }
     }

    .then(function(data){
           
        data.photographer.forEach((photographer) => {
                let photographerModel = new Photographer(photographer);
                element.innerHTML += photographerModel.getUserCardDOM(); 
            });

}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
