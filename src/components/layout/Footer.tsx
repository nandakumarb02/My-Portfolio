import { Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:nandakumarb02@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nanda-kumar-balasubramanian",
      label: "LinkedIn"
    },
    {
      icon: ExternalLink,
      href: "https://behance.net/nandakumarb",
      label: "Behance"
    }
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              NANDA KUMAR
            </h3>
            <p className="text-muted-foreground">
              UI/UX Designer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:bg-accent/10 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <IconComponent className="h-5 w-5 group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> © {currentYear}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            Designing purposeful interfaces that just work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;