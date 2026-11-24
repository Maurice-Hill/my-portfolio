import './App.css';
import PCard from './Components/ProductCard.jsx';
import projects from './Data/projects.jsx';
function App() {
  return (
      <div >

        <div className="introductionWrapper">
          <h1 className="portfolioIntroduction"> Maurice Hill</h1>
          <span>I build websites for local businesses</span>
        </div>

        <h2> My Projects </h2>

        <section className="cardsArea">

          {projects.map((project) => (
              <PCard key={project.id} project={project} />))}
                </section>

        <h2> About Me </h2>
          <section className="aboutMe">
          <p>I'm a 17-year-old web developer that started with C# modding for Vintage Story, where I built mods that handled client/server state and packet management.  I like planning my projects out before implementation, the architecture always comes first. </p>
            <p>I moved to web development around 2 months ago and have since built a redesign of a local business and a few projects involving state management through record creation and retrieval.</p>

            </section>
            <section className="contactInfo">
                <a href="https://github.com/Maurice-Hill">Github </a>
                <a href="mailto:tomarionhill@gmail.com"> My Email</a>
            </section>
      </div>

  );
}

export default App

