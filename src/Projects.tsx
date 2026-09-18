function Projects() {
  return (
    
  <div>
      <h1 className="flex justify-center text-2xl pt-5 text-white">Previous work / Projects</h1>
      <h2 className="flex justify-center sm:text-md md:text-lg text-neutral-400 underline decoration-3 underline-offset-20 decoration-[#E24E3C]">These are some of the projects I've worked on</h2>

      <h3 className="flex justify-center text-2xl text-white pt-20 underline decoration-3 underline-offset-20 decoration-[#E24E3C]">Gaming Videos</h3>
    
    <div className= "flex flex-col justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-5 pl-10 pr-10 pb-20 pt-20">
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/MC_7Ul7nUp0?si=GRUt5lQyxjNQsXBd" className="h-full w-full"></iframe>
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/ydKofumoIpQ?si=4_0HvGERjtnX_go2" className="h-full w-full"></iframe>  
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/DXZhiSUy-XI?si=1e2FmsmbcgGd8mm7" className="h-full w-full"></iframe>  
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/gHocM6RSndE?si=j4IQfSTIctPFZdbF" className="h-full w-full"></iframe>
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/LnTKNxBYByE?si=fQazZWEg37jNBELi" className="h-full w-full"></iframe>
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/XO352uQG_4w?si=cbvOPkd0y1zc906m" className="h-full w-full"></iframe>
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/Fv9GdS6ACtQ?si=lz29_BITjn8z-d8s" className="h-full w-full"></iframe>
      </div>
      <div className = "aspect-video w-full">
        <iframe src="https://www.youtube.com/embed/IYm__9X2_-w?si=-hYBy-Z80S4fr5bJ" className="h-full w-full"></iframe> 
      </div>
    </div>

    <div>
      <p className="flex justify-center text-lg text-neutral-400">You can visit my channel for more content!</p>
      <p className="flex justify-center text-2xl text-white">Go to my channel link:</p>
      <a href="https://www.youtube.com/@Goala21" className="flex justify-center text-2xl text-red-500 hover:text-red-700 pb-5">Goala Edits</a>
    </div>
  </div>
  );
  };


export default Projects;