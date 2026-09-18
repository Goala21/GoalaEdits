function Contact() {
  return (
      <div className="flex flex-col justify-center items-center pt-20 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="flex justify-center text-2xl text-white pb-5">Contact me</h1>
        <h2 className="flex justify-center sm:text-md md:text-lg text-neutral-400 underline decoration-1 underline-offset-20 decoration-[#E24E3C] pb-20">You can send me a message through this form!</h2>
          <div>
            <form className="flex flex-col gap-2">
              <label className="text-sm text-neutral-200">Name</label>
                <input className=" w-96 bg-transparent border-b border-white/20 focus:border-[#E24E3C] outline-none py-2 text-white transition-colors" type="text" name="name" placeholder="Your Full Name" />
            </form>
          </div>
          <div>
            <form className="flex flex-col gap-2 pt-5">
              <label className="text-sm text-neutral-200">Email</label>
                <input className=" w-96 bg-transparent border-b border-white/20 focus:border-[#E24E3C] outline-none py-2 text-white transition-colors" type="email" name="email" placeholder="Your Email Address" />
            </form>
          </div>
          <div>
            <form className="flex flex-col gap-2 pt-5">
              <label className="text-sm text-neutral-200">Message</label>
                <textarea className=" w-96 bg-transparent border-b border-white/20 focus:border-[#E24E3C] outline-none py-2 text-white resize-none transition-colors" name="message" placeholder="Your Message" rows={4}></textarea>
            </form> 
          </div>
          <div className="pt-15">
            <button className="bg-[#E24E3C] hover:bg-[#C63F30] text-white font-bold py-3 px-6 rounded transition-colors">Submit</button>
          </div>
        </div>
  );
}

export default Contact;