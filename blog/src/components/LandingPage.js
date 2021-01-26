import pfp from "./media/default_pfp.jpg";
import "./LandingPage.css";

export const Landing = () => {


    return (
        <div class="LandingPage">
            <div class="TitleBar">
                <img id="headshot" src={pfp} alt="Placeholder profile headshot" />
                <h1 id="title">Placeholder Title</h1>
            </div>
            <div class="AboutSection">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, dolor at imperdiet viverra, odio nibh convallis tellus, a consequat arcu sapien in tellus. Suspendisse potenti. Nulla placerat purus non erat vehicula iaculis. Pellentesque fringilla maximus hendrerit. Phasellus tortor nisi, accumsan ornare massa vel, efficitur dictum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus erat, sagittis eu pellentesque vitae, pretium sit amet diam.</p>
            </div>
            <div class="PortfolioandBlog">
                <h2>Portfolio</h2>
                <a href="#">Essentialism</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">Human Rights First</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>Blog</h2>
            </div>
        </div>
    )
}