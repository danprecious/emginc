import { links } from '@/app/utils/dataStructures';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-purple-950 px-10 py-10 bg-gradient-dark'>
        <div className='row-center mb-12 py-16'> 
            <p className='text-[3rem] text-center lg:w-[70%] font-bold text-white'>
                Promtional Marketing Agency That You Can Trust
                </p>
        </div>
        <div className='flex flex-row-reverse lg:flex-row justify-around'>
        <div className=''>
          <h1 className='text-gradient  lg:text-[4rem]'>VistaVibe <br /> Marketing</h1>
        </div>
         <div className="my-grid lg:w-[50%] md:px-8 ">
          {links.map((link, index) => {
            return (
              <div key={link.name} className="text-white">
                <p className="font-semibold text-[1.2rem] py-5 text-gradient">{link.name}</p>
                <div className="flex flex-col">
                  {link.subLinks.map((item, index) => {
                    return <Link key={item.id} className="py-3 text-sm" href={item.href}>{item.name}</Link>;
                  })}
                </div>
              </div>
            );
          })}

          </div>
        </div>

    </footer>
)
}

export default Footer;