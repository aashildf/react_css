

// import React from "react";

import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function Footer({ scrollToSection }) {
  return (
    <footer className="w-full bg-[#493927] text-white py-8 border-t border-white/10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl mb-4 tracking-tight text-[#F3E8D8]"
              style={{ fontFamily: "serif" }}
            >
              La Maison Joblòp
            </h3>
            <p className="text-[#E9DFCF] mb-6 leading-relaxed">
              Design av lekker mat siden 2025. 
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]">LENKER</h4>
            <ul className="space-y-3">
              
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#E9DFCF] hover:text-teal-200  transition-colors"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-[#E9DFCF] hover:text-teal-200  transition-colors"
                >
                  Vår meny
                </button>
              </li>
              <li>
               
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#E9DFCF] hover:text-teal-200  transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]">ARRANGEMENTER</h4>
            <ul className="space-y-3 text-[#E9DFCF]">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Private Selskap
                </a>
              </li>
            
              <li>
                <a href="#" className="hover:text-teal-200  transition-colors">
                  Bryllup
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-teal-200  transition-colors">
                  Matlaginskurs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]"> INFORMASJON</h4>
            <ul className="space-y-3 text-[#E9DFCF]">
              <li>
                <a href="#" className="hover:text-teal-200  transition-colors">
                  La Maison Konsern
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-teal-200  transition-colors">
                  Tilkomst / Våre lokaler
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:text-teal-200  transition-colors">
                  Jobb hos oss
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E9DFCF] text-sm">
            &copy; 2025 La Maison Joblòp / All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#E9DFCF]">
            <a href="#" className="hover:text-teal-200  transition-colors">
              Åshild
            </a>
            <span>|</span>
            <a href="#" className="hover:text-teal-200  transition-colors">
             Kodehode
            </a>
            <span>|</span>
            <a href="#" className="hover:text-teal-200  transition-colors">
              2025
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}