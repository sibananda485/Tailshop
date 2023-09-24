import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full py-5 px-2 mt-auto flex justify-around gap-8 text-center bg-cyan-900 text-white xsm:flex-col xsm:text-sm">
        <ul>
          <li className="mb-3">Technology used</li>
          <li className="text-slate-400">React</li>
          <li className="text-slate-400">MongoDB</li>
          <li className="text-slate-400">Express</li>
          <li className="text-slate-400">Node JS</li>
          <li className="text-slate-400">Tailwind</li>
        </ul>
        <ul>
          <li className="mb-3">Developer - @Sibananda sahu</li>
          <li className="text-slate-400">Email</li>
          <li className="text-slate-400">Linked in</li>
          <li className="text-slate-400">Github</li>
          <li className="text-slate-400">Phone</li>
          <li className="text-slate-400">Whatsapp</li>
        </ul>
        <ul>
          <li className="mb-3">Other Projects</li>
          <li className="text-slate-400">TechStack</li>
          <li className="text-slate-400">Usability hub</li>
          <li className="text-slate-400">Bca notes</li>
          <li className="text-slate-400">Text Utils</li>
          <li className="text-slate-400">Portfolio</li>
        </ul>
      </div>
      <div className="w-full p-5 flex justify-center gap-16 text-2xl bg-cyan-950 text-white xsm:mb-12">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </>
  );
}
