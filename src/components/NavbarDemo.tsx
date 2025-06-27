"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full" id="navbar">
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody className="bg-[#0f0f1a] text-white">
          <NavbarLogo />
          <NavItems
            items={navItems}
            className="text-white"
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex items-center gap-4">
           
            <NavbarButton
              variant="primary"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-md"
              onClick={() =>
                (window.location.href = "mailto:arnavbhandari1609@gmail.com")
              }
            >
              Say Hi 👋
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav className="bg-[#0f0f1a] text-white">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              >
                Resume
              </NavbarButton>
              <NavbarButton
                variant="primary"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                onClick={() => {
                  window.location.href = "mailto:arnavbhandari1609@gmail.com";
                  setIsMobileMenuOpen(false);
                }}
              >
                Say Hi 👋
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
