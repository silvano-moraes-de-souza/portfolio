// Propriedade Intelectual: Silvano Moraes de Souza
const WhatsAppIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

const GithubIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>;
const LinkedinIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

export default function Footer() {
  return (
    <footer className="w-full mt-4 pt-4 pb-10 relative overflow-hidden border-t border-white/10 dark:border-white/5 bg-[#0e7490] dark:bg-[#0a0a0c] flex flex-col items-center justify-center gap-10">
      
      {/* Luz de fundo decorativa */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-400/5 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        <a href="https://www.linkedin.com/in/silvano-moraes-de-souza/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 dark:bg-surface-container-low border border-white/20 dark:border-white/5 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400 dark:hover:border-primary transition-all duration-300 hover:-translate-y-2">
          <LinkedinIcon size={28} className="text-white dark:text-slate-400 group-hover:text-cyan-300 dark:group-hover:text-primary transition-colors" />
        </a>
        <a href="https://wa.me/5515999999999" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="group flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 dark:bg-surface-container-low border border-white/20 dark:border-white/5 shadow-lg hover:shadow-emerald-500/30 hover:border-emerald-400 dark:hover:border-tertiary transition-all duration-300 hover:-translate-y-2">
           <WhatsAppIcon size={28} className="text-white dark:text-slate-400 group-hover:text-emerald-300 dark:group-hover:text-tertiary transition-colors" />
        </a>
        <a href="https://www.instagram.com/silvanomsouza/" target="_blank" rel="noopener noreferrer" title="Instagram" className="group flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 dark:bg-surface-container-low border border-white/20 dark:border-white/5 shadow-lg hover:shadow-pink-500/30 hover:border-pink-400 dark:hover:border-secondary transition-all duration-300 hover:-translate-y-2">
          <InstagramIcon size={28} className="text-white dark:text-slate-400 group-hover:text-pink-300 dark:group-hover:text-secondary transition-colors" />
        </a>
        <a href="https://github.com/silvanomoraes" target="_blank" rel="noopener noreferrer" title="GitHub" className="group flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 dark:bg-surface-container-low border border-white/20 dark:border-white/5 shadow-lg hover:shadow-white/20 hover:border-white dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
          <GithubIcon size={28} className="text-white dark:text-slate-400 group-hover:text-white dark:group-hover:text-white transition-colors" />
        </a>
      </div>

      <div className="font-mono text-sm md:text-base text-center text-white dark:text-white/40 tracking-[0.2em] uppercase relative z-10 px-6 leading-relaxed">
        <span className="text-2xl md:text-3xl">©</span> {new Date().getFullYear()} <strong className="text-white dark:text-slate-300">Silvano Moraes de Souza</strong> <span className="text-white">Soluções de dados, Automação, Programação e UX.</span>
      </div>

    </footer>
  );
}
