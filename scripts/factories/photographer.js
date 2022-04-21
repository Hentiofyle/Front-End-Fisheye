function photographerFactory(data) {
    const { name, portrait, tagline, city, country, price } = data;

    const picture = `medias/${portrait}`;

       function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        //const h2 = document.createElement( 'h2' );
        //h2.textContent = name;
       
        //article.appendChild(img);
        //article.appendChild(h2);
        article.innerHTML = `
       <img class="photographer_thumbnail__picture"
       src="medias/${portrait}"
       alt="${name}'s thumbnail picture" />
      <h2 id ="personalPage"class="photographer_name">${name}</h2>
      <h3 class="photographer_location">${city}, ${country}</h3>
      <p class="photographer_desc">${tagline}</p>
      <p class="photographer_price">${price}€/jour</p>`
     
        return (article);
    }
    return { name, picture, tagline, city, country, price,  getUserCardDOM }
     
    
}

class Photographer {
   
    constructor(data) {
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._name = data.name
        this._picture = data.portrait
        this._price = data.price
        this._tagline = data.tagline
        this._tags = data.tags

    }
   
    get picture() {
        return `../assets/photographers/${this._picture}`
    }

   
    get localization() {
        return `${this._city}, ${this._country}`
    }
}

let photographers = data.photographers;
        photographers.map(photographe => {
            let sectionPhotographers = document.getElementById('photographers');
            let articlePhotographers = document.createElement('article');
            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul> 
            `

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        })
