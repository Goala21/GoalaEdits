import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#1B1C1E] z-50">

      <div className="grid grid-cols-3 items-center pt-2 pb-5 px-4">
        <div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" /> : <Menu size={30} color="white" />}
          </button>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="text-xl md:text-4xl text-neutral-200 hover:text-neutral-50 transition-colors underline underline-offset-4 decoration-2 decoration-[#E24E3C]"
          >
            Goala Edits
          </Link>
        </div>

        <div></div>
      </div>

      <div className="hidden md:flex justify-center pb-5">
        <ul className="flex gap-10">
          <li><Link to="/about" className="text-neutral-300 hover:text-white text-xl transition-colors">About me</Link></li>
          <li><Link to="/projects" className="text-neutral-300 hover:text-white text-xl transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="text-neutral-300 hover:text-white text-xl transition-colors">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full z-50 flex flex-col md:hidden gap-4 py-4 bg-[#1B1C1E] border-t border-white/10">
          <li><Link to="/" className="text-neutral-300 hover:text-white text-xl px-6" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="text-neutral-300 hover:text-white text-xl px-6" onClick={() => setIsOpen(false)}>About me</Link></li>
          <li><Link to="/projects" className="text-neutral-300 hover:text-white text-xl px-6" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" className="text-neutral-300 hover:text-white text-xl px-6" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;