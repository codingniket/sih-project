import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/Team.png"

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside className="justify-center ">
        <Image src={Logo} alt='Logo' width={80} quality={70} />
        <p className="text-xl font-semibold text-[#f4c430]" href="#">GYANKOSH</p>
      </aside> 
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
