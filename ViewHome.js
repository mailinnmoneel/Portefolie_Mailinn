
function viewHome(){
    let html = `
        <nav>
            <li id="nav-li"onclick="home()"><a href="Home"></a>Home</li>
            <li id="nav-li"><a href="https://github.com/mailinnmoneel/" target="_blank">GitHub</a></li>
            <li id="nav-li" onclick="runGallery()"><a href="ArtGallery"></a>Art Gallery</li>
            <li id="nav-li"><a href="#About">About</a></li>
        </nav>
        <header>
            <h1>Mailinn Moneel Kiste</h1>
            <h4>Web developer student with an art & design background</h4>
            <Picture id="profil-Bilde"><img style="height: 170px;" src="Bilder/bilde_Mailinn.PNG"></Picture>
        </header>
        <main id="home-main">
        <section>
            <h2 id="About">About</h2>
            <picture id="wip-bilde"><img style="height: 257px; width: 271px"src="Bilder/wip.jpg" alt="work in progress picture" ></picture>
                <p id="bio">Mailinn loves creating beatutiful images and coming up with solutions for new designs. 
                    She is residing in Skien, south in Norway, and is a student at GET Academy, where she studies 
                    IT-development with languages like HTML, CSS, Javascript and C#.</p>
                
                <p id="bio">She was born with a passion for drawing animals and nature, and has a 
                bachelors degree in art from UIA, University in Kristiansand.</p>
                
                <p id="bio">Mailinn hopes to help creating elegant and beautiful webpages and apps in the future.</p>
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