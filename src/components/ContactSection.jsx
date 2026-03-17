export default function ContactSection() {
  return (
    <section
      className="relative w-full shrink-0 flex flex-col justify-end items-center"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '640px',
        padding: 'clamp(40px, 15vw, 180px) 40px 80px',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl w-full text-center">
        <h2
          className="text-[#F6F8FB] text-[64px] md:text-[80px] leading-[0.9] tracking-[-2px]"
          style={{ fontFamily: 'var(--font-tilt-warp)' }}
        >
          Let's talk
        </h2>
        <p
          className="text-[#F6F8FB] font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-80"
          style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
        >
          Have a project in mind? I'd love to hear about it.
        </p>

        {/* Email form */}
        <form
          className="flex flex-col sm:flex-row gap-3 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            window.location.href = `mailto:your@email.com?subject=Hello from your site&body=My email: ${email}`;
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/20 backdrop-blur-[25px] text-[#F6F8FB] placeholder-white/60 font-semibold text-[16px] leading-[1.4] tracking-[-0.4px] rounded-md px-4 py-3 outline-none border border-white/20 focus:border-white/60 transition-colors"
            style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
          />
          <button
            type="submit"
            className="bg-[#F6F8FB] text-[#0F0E0E] font-semibold text-[16px] leading-[1.4] tracking-[-0.4px] rounded-md px-6 py-3 hover:bg-white transition-colors cursor-pointer shrink-0"
            style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Reach out
          </button>
        </form>
      </div>
    </section>
  );
}
