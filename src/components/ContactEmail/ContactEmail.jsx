import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";

import { MdMarkunreadMailbox } from "react-icons/md";
import useSound from "use-sound";
import maily from "../../Sounds/mail.mp3";
const ContactEmail = () => {
      const form = useRef();
  const [MailS] = useSound(maily);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m9lipuo', 'template_6x9g9tq', form.current, 'Uw5kSVxSOhngia-Bq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };




    return (
        <div className="w-full flex justify-center">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col  w-full md:w-[70rem]  bg-accent h-[30rem] items-center justify-center rounded-xl gap-6 px-2 py-2 ">
            <MdMarkunreadMailbox className="text-6xl animate-pulse"/>

            <input type="text" name="user_name" className="input input-ghost w-full max-w-xs shadow-lg  mono_text1 placeholder:text-neutral" Placeholder="Mx. Human Name" />

            <input type="email" name="user_email" className="input input-ghost w-[30rem] max-w-full shadow-lg  mono_text1 placeholder:text-neutral focus:invalid:border-error focus:invalid:ring-error" placeholder="YourHumanEmail @ bigcompanythatsellsdata.com" />


            <div className="w-full flex items-center justify-evenly ">
                <textarea name="message" className="textarea textarea-ghost  w-[30rem] h-40 min-w-fit  min-h-fit resize max-w-full max-h-60 scroll-smooth focus:resize caret-primary shadow-lg  mono_text1 placeholder:text-neutral focus:min-w-fit focus:min-h-fit" placeholder="enter message here " />
                </div>
            <button onClick={MailS}>
            <input type="submit" className="btn btn-primary" value="send" /></button>
        </form>
        </div>
    );
}

export default ContactEmail;