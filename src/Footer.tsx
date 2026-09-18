function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1B1C1E] px-6 py-8 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <p className="text-md font-bold text-white border-t-2 border-[#E24E3C] pt-3 w-fit">
          © 2026 Goala Edits
        </p>
        <p className="text-md font-bold text-neutral-200">All rights reserved</p>
      </div>

      <div className="flex flex-col items-center leading-relaxed text-sm text-neutral-200">
        <p>Email: darkzodiacyt@gmail.com</p>
        <p>Mob: +356 7936 6286</p>
        <p>Location: Malta</p>
      </div>
    </footer>
  );
}

export default Footer;