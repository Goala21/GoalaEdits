import backwardsShot2 from "./Photos/Backwards-Shot-2.jpg";
import LandscapeShot from "./Photos/Landscape-Shot-Sideways.jpg";
import PortraitShotFront from "./Photos/Portrait-Shot-Front.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="relative h-screen w-full">
        <img 
          src={backwardsShot2} 
          alt="Backwards-Shot-2" 
          className="h-full w-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-black/10">
          <h1 className="text-4xl md:text-6xl text-white text-center px-4">
            Creating Stories from Content
          </h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-50 bg-black/30">
          <Link
            to="/about"
             className="inline-block bg-[#8FA396] hover:bg-[#7C9184] text-white font-bold py-2 px-4 rounded">
              Learn More
          </Link>
        </div>
      </div>


    <div className="bg-[#1B1C1E] py-24 px-6 flex justify-center">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
    
      <div className="border-l-2 border-[#E24E3C] pl-6">
        <h2 className="text-2xl font-medium text-white mb-3">About me</h2>
        <p className="text-neutral-400 leading-relaxed">
          My name is Samuel. I'm passionate about technology and creativity —
          video editing started as a hobby in secondary school, recording
          myself playing games and experimenting with edits, until I decided
          to take it seriously and build a career around video editing,
          content creation, and programming.
        </p>
      </div>
      
      <div className="pl-6 pb-50">
        <img src={PortraitShotFront} alt="Portrait-Shot-Front" className="object-cover w-96 h-96" />
      </div>

      <div className="border-l-2 border-[#E24E3C] pl-6">
        <h2 className="text-2xl font-medium text-white mb-3">Services</h2>

          <p className="text-neutral-400 leading-relaxed">
            I offer many different services, including video editing, content creation, and programming.
            I have my own youtube channel where I make my own content, and I have worked with different clients.
            This website was creating by me using React, TypeScript, Tailwind CSS, and Vite.  
          </p>
      </div>

    <div className="pl-6">
      <img src={LandscapeShot} alt="Landscape-Shot" className=" h-96 w-96 object-cover" />
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;