import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside className="items-center">
        <img src='/images/Team.png' alt='Logo' className="h-12 w-12"/>
        <p className="text-xl font-semibold text-warning" href="/">GYANKOSH</p>
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
