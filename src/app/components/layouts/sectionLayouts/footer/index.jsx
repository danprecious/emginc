import { links } from '@/app/utils/dataStructures';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black px-10 py-20'>
        <div className='row-center mb-12 py-16'> 
            <p className='text-[3rem] text-center lg:w-[70%] font-bold text-white'>
                Promtional <span className='text-secondary'>Marketing</span> Agency That You Can Trust
                </p>
        </div>
        <div className='flex flex-row-reverse lg:flex-row justify-around'>
        <div className='lg:w-[50%] lg:flex items-center justify-center'>
          <h1 className='text-white  lg:text-[4rem]'>Vista<span className='text-secondary'>Vibe</span> <br /> Marketing</h1>
        </div>
         <div className="my-grid lg:w-[60%] md:px-2 justify-center">
          {links.map((link, index) => {
            return (
              <div key={link.name} className="text-white">
                <Link href={link.href} className="font-semibold text-[1.2rem] py-5 mb-5 hover:text-secondary">{link.name}</Link>
                <div className="flex flex-col">
                  {link.subLinks.map((item, index) => {
                    return <Link key={item.id} className="py-3 opacity-50 hover:text-secondary" href={item.href}>{item.name}</Link>;
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