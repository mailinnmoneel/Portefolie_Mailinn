function viewGallery(){

    let html = `
        <nav>
            <li id="nav-li"onclick="home()"><a href="Home"></a>Home</li>
            <li id="nav-li"><a href="GitHub"></a>GitHub</li>
            <li id="nav-li" onclick="runGallery()"><a href="ArtGallery"></a>Art Gallery</li>
            <li id="nav-li"><a href="About"></a>About</li>
        </nav>
        <header>
            <h3 onclick="home()">Mailinn Moneel Kiste</h3>
            <div class="container">
                <picture>
                    ${model.gallery[0].picture}
                    <p id="bay-descripion">"Bay stallion" colored pencil on pastelmat</p>
                </picture>    
            </div>
            
        </header>
        <main class="gallery">
        <ol id="gallery-alternatives">
            <li class="galleryli" id="li-gallery" onclick="filterGallery('reset')"><a href="Gallery"></a>Gallery</li>
            <li class="galleryli" onclick="filterGallery('horses')"><a href="Horses"></a>Horses</li>
            <li class="galleryli" onclick="filterGallery('animals')"><a href="Animals"></a>Animals</li>
        </ol>
        <section class="gallery-grid">
    
        `
        if(model.activepictures.length == 0){

            for(var i = 1; i < model.gallery.length; i++){
                
                html+=`
                <picture id="croppedImg">${model.gallery[i].picture}</picture>   
                `
            }
        }
        else{
            for(var i = 1; i < model.activepictures.length; i++){
                
                html+=`
                <picture id="croppedImg">${model.activepictures[i].picture}</picture>
                `
            }
        }
        
    html += `
        </section>
    </main>
    
    <footer>
        <p id="mail">mailinn.kiste@gmail.com</p>
        <ol id="foot-ol">
            <i style="font-size:25px" class="fa fa-github"></i>
            <i style="font-size:25px" class="fa fa-linkedin-square"></i>
            <i style="font-size:25px" class="fa">&#xf16d;</i>
        </ol>
        <p id="c-rights">©Mailinn Moneel Kiste 2021</p>
    </footer>
    `
    return html;
}

function filterGallery(tag){
    model.activepictures = [];
    if(tag != "reset"){
        for(let i = 0; i < model.gallery.length; i++){
            if(model.gallery[i].subject == tag){
                model.activepictures.push(model.gallery[i])
            }
        }
    }
    view();
}

