import React from 'react';

export function ResumeDownload() {
  return (
    <div className="text-center my-10">
      <a
        href="/cv-gustavo.pdf"
        download="Curriculo-GustavoDavid.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        📄 Baixar Currículo (PDF)
      </a>
    </div>
  );
}
