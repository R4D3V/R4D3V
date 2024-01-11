import mail from "../icons/mail.png"
import what from "../icons/what.png"
import insta from "../icons/insta.png"
import tele from "../icons/tele.png"
import phone from "../icons/phone.png"

function Contact() {

  return (
    <section className="mt-[82px]">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center py-5">
           
            <h1 className="mt-2 bold text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch with me.</h1>

            <p className="mt-3  ">Am always here to chat. And respond to you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">

            
            <a href="mailto:raymonjohns@gmail.com"><img src={mail} alt="r4" className="w-[250px] h-[250px] p-3 rounded-full bg-black"/></a>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                <p className="mt-2  ">You can contact me via mail am here to help.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400"> <a href="mailto:raymonjohns@gmail.com">raymonjohns@gmail.com</a> </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  
                  <a href="https://wa.me/qr/MBVANZFXJGPSH1"><img src={what} alt="r4" className="w-[230px] h-[230px]"/></a>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Whatsapp</h2>
                <p className="mt-2  ">You can get through us on Whatsapp.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">
                  <a href="https://wa.me/qr/MBVANZFXJGPSH1">Whatsapp</a>
                </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                
                <a href="tel:+256 751621506"><img src={phone} alt="r4" className="w-[230px] h-[230px]"/></a>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                <p className="mt-2  ">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400"><a href="tel:+256 751621506">Dail me</a></p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
               
                <a href="https://www.instagram.com/r4d3v/"> <img src={insta} alt="r4" className="w-[230px] h-[230px]" /></a>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Instagram Page</h2>
                <p className="mt-2  ">You can also get to me through instagram</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400"><a href="https://www.instagram.com/r4d3v/">Instagram</a></p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                
                <a href="https://www.t.me/r4d3v1"><img src={tele} alt="r4" className="w-[230px] h-[230px]"/></a>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Telegram Support</h2>
                <p className="mt-2  ">You can also get to me through Telegram</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400"><a href="https://www.t.me/r4d3v1">Telegram</a></p>
            </div>
        </div>
    </div>
</section>
  );
}

export default Contact;
