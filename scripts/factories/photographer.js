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

//class Photographer {
   
  //  constructor(data) {
   //     this._id = data.id
    //    this._city = data.city
    //    this._country = data.country
    //    this._name = data.name
    //    this._picture = data.portrait
    //    this._price = data.price
    //    this._tagline = data.tagline
    //    this._tags = data.tags

    }
   
}
