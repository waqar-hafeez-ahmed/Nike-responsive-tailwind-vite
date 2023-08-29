import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section id="contact-us" className="bg-black py-8 w-full text-white">
      <div className="max-container mt-20  max-xl:px-20 max-md:px-10 flex-col">
        <div className=" flex  justify-between  max-lg:flex-col flex-1 gap-10 ">
          <div className="flex flex-col max-w-sm ">
            <img src={footerLogo} alt="logo" width={150} />
            <p className="font-montserrat mt-4 text-white-400">
              Get Shoes ready Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minima voluptatem nihil!
            </p>
            <div className="flex gap-6 mt-8">
              {socialMedia.map((icon) => (
                <div key={icon.alt} className="bg-white  rounded-full p-3">
                  <img src={icon.src} alt={icon.alt} width={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            {footerLinks.map((link) => (
              <div key={link.title} className="max-sm:mt-10">
                <h3 className="text-3xl font-palanquin mb-2">{link.title}</h3>
                <ul>
                  {link.links.map((list) => (
                    <li key={list.name} className="text-lg text-white-400 mt-3">
                      {list.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex mt-20 font-montserrat justify-between max-sm:flex-col max-sm:items-center ">
          <div className="flex gap-2 items-start">
            <img src={copyrightSign} alt="copyrights" />
            <p className="text-lg text-white-400">
              Copyrights. All reserved to Nike.
            </p>
          </div>
          <p className="text-lg text-white-400">Terms and conditions.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer