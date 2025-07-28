// src/components/ContactPanel.tsx
'use client';
import { Dispatch, SetStateAction } from 'react';

interface ContactPanelProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ContactPanel({ open, setOpen }: ContactPanelProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-300 ease-in-out
          ${open ? 'opacity-50 pointer-events-auto' : 'opacity-0'}
        `}
      />

      {/* Slide-out panel */}
      <aside
        className={`
          absolute top-0 right-0 bottom-0
          w-full max-w-md
          bg-white p-8 overflow-auto
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0 pointer-events-auto' : 'translate-x-full'}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        {/* WhatsApp */}
        <div className="mb-6">
          <p className="font-medium mb-2">Chat on WhatsApp</p>
          <a
            href="https://wa.me/6281381357385759"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block bg-green-500 hover:bg-green-600 text-white py-3 rounded text-center"
          >
            +62 813 5738 5759
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="font-medium mb-2">Send us an Email</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=acoalintl@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block bg-red-500 hover:bg-red-600 text-white py-3 rounded text-center"
          >
            acoalintl@gmail.com
          </a>
        </div>
      </aside>
    </div>
  );
}
