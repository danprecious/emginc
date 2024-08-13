const ContactForm = () => {
  return (
    <form className="lg:rounded-[5rem] rounded-[2em]   lg:w-[30%] w-full shadow-lg px-10 py-8 lg:py-24 max-w-[30em] dark:bg-gradient-dark">
      <div className="flex justify-center mb-10">
        <p className="text-center text-gradient font-bold text-[1.3em]">Send a message</p>
        </div>
      <div className="my-3">
        <input
          type="text"
          placeholder="Name"
          className="px-2 py-3 border w-full rounded-md bg-transparent dark:border-stone-950 "
        />
      </div>
      <div className="my-3">
        <input
          type="text"
          placeholder="Email"
          className="px-2 py-3 border w-full rounded-md  bg-transparent dark:border-stone-950"
        />
      </div>
      <div className="my-3">
        <textarea
        
          name=""
          id=""
          placeholder="Message"
          className=" border w-full rounded-md px-2 py-3 resize-none h-20 bg-transparent dark:border-stone-950"
        />
      </div>
      <div className="flex justify-center">
        <button className="px-10 text-center py-3 rounded-[2em] hover:grow transition-all bg-gradient text-white">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
