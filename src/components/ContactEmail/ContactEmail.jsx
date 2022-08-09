import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";


const ContactEmail = () => {
      const form = useRef();

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
        <div className=" w-full flex  items-center  justify-center h-96 gap-2">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col  sm:w-full md:w-[30rem]  bg-neutral h-80 items-center justify-center rounded-lg ">


                        <input type="text" name="user_name"  className="input input-ghost w-full max-w-xs" Placeholder="Your Name "/>

            <input type="email" name="user_email"  className="input input-ghost w-full max-w-xs"  placeholder="Your Email"/>


            <div className="w-full flex items-center justify-evenly ">
                <textarea name="message"  className="textarea textarea-ghost w-40 resize" placeholder="enter message here"/>
            </div>
            <input type="submit" className="btn btn-primary" value="Send" />
        </form>
        </div>
    );
}

export default ContactEmail;