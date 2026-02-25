import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-heading text-xl font-bold tracking-wider text-primary shrink-0 flex items-center">
          <img src="/logo.png" alt="DA Fitness" className="h-8 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = "none"; const next = e.currentTarget.nextElementSibling as HTMLElement; if (next) next.classList.remove("hidden"); }} />
          <span className="hidden">DA FITNESS</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-6 md:flex-1 md:justify-center min-w-0">
          <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Početna</Link>
          <Link to="/program" className="text-muted-foreground hover:text-primary text-sm transition-colors">Program</Link>
          <Link to="/transformacije" className="text-muted-foreground hover:text-primary text-sm transition-colors">Transformacije</Link>
          <Link to="/consultations" className="text-muted-foreground hover:text-primary text-sm transition-colors">Konsultacije</Link>
        </div>
        <p className="text-muted-foreground text-sm shrink-0 text-center md:text-right min-w-0">
          © {new Date().getFullYear()} Dalibor Andrić. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
