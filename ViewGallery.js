function viewGallery(){

    let html = `
        <nav>
            <li id="nav-li"onclick="home()"><a href="Home"></a>Home</li>
            <li id="nav-li"><a href="https://github.com/mailinnmoneel/" target="_blank">GitHub</a></li>
            <li id="nav-li" onclick="runGallery()"><a href="ArtGallery"></a>Art Gallery</li>
            <li id="nav-li"><a href="https://www.linkedin.com/in/mailinn-moneel-kiste-a523041b9/" target="_blank">Linkedin</a></li>
        </nav>
        <header>
            <h3 onclick="home()">Mailinn Moneel Kiste</h3>
            <div class="container">
                <picture class="croppedImg">
                    ${model.gallery[0].picture}
                    <p id="bay-descripion">"Bay stallion" colored pencil on pastelmat</p>
                </picture>    
            </div>
        </header>
        <div id="myModal" class="modal">
            <div class="modal-content>
                <button class="close">Close</button>
                <div class="activepicture">
                    <picture>
                        ${(model.activefullsize.length > 0 ? model.activefullsize[0] : "")}
                    </picture>
                </div>
            </div>
        </div>
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
                <picture class="croppedImg" id="${model.gallery[i].id}" 
                    onclick="viewBigPicture(${model.gallery[i].id})"> ${model.gallery[i].picture}
                </picture>  
                `
            }
        }
        else{
            for(var i = 1; i < model.activepictures.length; i++){

                html+=`
                <picture class="croppedImg" id="${model.gallery[i].id}" 
                    onclick="viewBigPicture(${model.gallery[i].id})"> ${model.activepictures[i].picture}
                </picture>
                `
            }
        }
        
    html += `
        </section>
    </main>
    
    <footer>
        <p id="mail">mailinn.kiste@gmail.com</p>
        <ol id="foot-ol">
        <a href="https://github.com/mailinnmoneel/" target="_blank">
            <i style="font-size:25px" class="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mailinn-moneel-kiste-a523041b9/" target="_blank">
            <i style="font-size:25px" class="fa fa-linkedin-square"></i>
        </a>
        <a href="https://www.instagram.com/artbymailinn/" target="_blank">
            <i style="font-size:25px" class="fa">&#xf16d;</i>
        </a>
        </ol>
        <p id="c-rights">©Mailinn Moneel Kiste 2021</p>
    </footer>
    `
    return html;
}
//activepicture
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
//activefullsize **** vi har lært å gi bedre navn på variabler etter dette, ikke spør =)
function viewBigPicture(id){
    let activefullsize = null;
    let bigpicture; 
    smolpicture = document.getElementById(id).innerHTML;
    for(let p = 1; p < model.gallery.length; p++){
        bigpicture = model.gallery[p];
        
        if( bigpicture.id == id){
            activefullsize = bigpicture.fullsizeversion;
            model.activefullsize[0] = activefullsize;
        }
    }
    if(activefullsize == null){
        model.activefullsize = [];
    }
    view();
}

