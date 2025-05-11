import React from 'react';
import { RiLinkedinFill, RiMailFill, RiGithubFill, RiTwitterXFill, RiGlobalFill } from "@remixicon/react";

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ankitkeshri0',
      icon: <RiLinkedinFill className="text-2xl" />
    },
    {
      name: 'Gmail',
      url: 'mailto:ankitkumar9864@gmail.com',
      icon: <RiMailFill className="text-2xl" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chuck-ankit',
      icon: <RiGithubFill className="text-2xl" />
    },
    {
      name: 'X',
      url: 'https://x.com/snobby_coder',
      icon: <RiTwitterXFill className="text-2xl" />
    },
    {
      name: 'Website',
      url: 'https://bento.me/ankit-k',
      icon: <RiGlobalFill className="text-2xl" />
    }
  ];

  return (
    <footer className="w-full py-8 px-4 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              {link.icon}
              <span className="font-[Helvetica_Now_Display]">{link.name}</span>
            </a>
          ))}
        </div>
        <div className="text-center text-white/60 mt-6">
          <p className="font-[Helvetica_Now_Display]">© {new Date().getFullYear()} Ankit Keshri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 