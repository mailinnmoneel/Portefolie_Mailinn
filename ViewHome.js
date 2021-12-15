
function viewHome(){
    let html = `
        <nav>
            <li id="nav-li"onclick="home()"><a href="Home"></a>Home</li>
            <li id="nav-li"><a href="GitHub"></a>GitHub</li>
            <li id="nav-li" onclick="runGallery()"><a href="ArtGallery"></a>Art Gallery</li>
            <li id="nav-li"><a href="About"></a>About</li>
        </nav>
        <header>
            <h1>Mailinn Moneel Kiste</h1>
            <h4>Web developer student with an art & design background</h4>
            <Picture id="profil-Bilde"><img style="height: 170px;" src="Bilder/bilde_Mailinn.PNG" alt="Profile picture"></Picture>
        </header>
        <main id="home-main">
        <section>
            <h2>About</h2>
            <picture id="wip-bilde"><img style="height: 257px; width: 271px"src="Bilder/wip.jpg" alt="work in progress picture" ></picture>
                <p id="bio">
                    I was born with a passion for animals, nature and drawing which led me to a
                    certificate of apprenticeship in agriculture from Holt high school and a
                    bachelors degree in art at UIA, University in Kristiansand.</p>
                <p id="bio">
                    In my early twenties I discovered my love for gaming. Many nights was spent 
                    sneaking around with a bow and arrow in skyrim or laughing and screaming with my 
                    friends as we tried to outmanouver the enemy team.</p>
                <p id="bio">    
                    Long story short, I am now a happy student at GET Academy who loves to 
                    learn, be creative, write code, design, and find new ways to solve problems.
                </p>
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