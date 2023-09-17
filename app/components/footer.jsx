import Link from 'next/link';
import {BsGithub} from 'react-icons/bs';
export default function Footer()
{
  return(
    <footer className="footer items-center p-4 bg-neutral text-neutral-content px-5">
    <aside className="items-center grid-flow-col">
      <p>Copyright © 2023 - All right reserved LetsCode</p>
    </aside> 
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://github.com/codingniket" className='fill-current'><BsGithub className='h-6 w-6 text-warning' /></Link>
        <Link href="https://github.com/ak3264114" className='fill-current'><BsGithub className='h-6 w-6 text-white' /></Link>
        <Link href="https://github.com/AksHub0352" className='fill-current'><BsGithub className='h-6 w-6 text-primary' /></Link>
        <Link href="https://github.com/pawankumar10306" className='fill-current'><BsGithub className='h-6 w-6 text-info' /></Link>
        <Link href="https://github.com/sattwikeeg100" className='fill-current'><BsGithub className='h-6 w-6 text-accent' /></Link>
        <Link href="https://github.com/Shreyaa5" className='fill-current'><BsGithub className='h-6 w-6 text-error' /></Link>
    </nav>
  </footer>
  )   
}