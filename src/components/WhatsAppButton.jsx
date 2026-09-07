export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat en WhatsApp"
      href="https://wa.me/584127563518"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
      style={{ animation: 'gentle-pulse 3s ease-in-out infinite' }}
    >
      <span className="material-symbols-outlined text-[28px]">chat</span>
    </a>
  );
}
