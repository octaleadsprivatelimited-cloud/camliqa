const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-light tracking-[0.15em] mb-4">CAMLIQA</h3>
            <p className="text-primary-foreground/60 font-body font-light text-sm leading-relaxed max-w-sm">
              Premium essentials crafted with intention. Elevating everyday rituals through thoughtful design and natural ingredients.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/40 font-body">Navigate</p>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/40 font-body">Connect</p>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-body tracking-wider">© 2026 Camliqa. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-primary-foreground/40 font-body tracking-wider">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
