import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">Nimbus</h3>
          <p className="mt-2 text-sm text-gray-400">
            A powerful task manager built for modern teams. Stay organized. Stay productive.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Product</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Get in Touch</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@nimbusapp.io</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Nimbus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
