import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-heading text-xl font-bold tracking-wider text-primary">
          DA FITNESS
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Početna</Link>
          <Link to="/program" className="text-muted-foreground hover:text-primary text-sm transition-colors">Program</Link>
          <Link to="/consultations" className="text-muted-foreground hover:text-primary text-sm transition-colors">Konsultacije</Link>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Dalibor Andrić. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
