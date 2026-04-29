export default function AboutSection() {
  const sharedStyle = {
    fontFamily: 'var(--font-geist)',
    fontFeatureSettings: "'ss01' on, 'ss03' on",
  };

  return (
    <section
      className="w-full flex flex-col md:flex-row md:justify-center md:items-start gap-10"
      style={{ padding: 'clamp(64px, 10vw, 120px) 40px' }}
    >
      <span
        className="shrink-0 text-[#F6F8FB] font-semibold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.02em] md:w-50"
        style={sharedStyle}
      >
        About
      </span>

      <div
        className="flex-1 flex flex-col gap-5 text-[#F6F8FB] font-regular text-[18px] md:text-[18px] leading-[1.4] tracking-[-0.02em]"
        style={sharedStyle}
      >
        <p>
          I'm a Graduate Engineer at Commonwealth Bank of Australia, where I work with Machine
          Learning and Backend systems. In my spare time I enjoy working on design and photography.
          In this site I write about projects I'm working on as well as general topics I'm
          interested in.
        </p>
        <p>
          If you feel our collaboration would be a good fit, feel free to contact me at:{' '}
          <a
            href="mailto:contact.mayukhsaha@gmail.com"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            contact[dot]mayukhsaha[at]gmail[dot]com
          </a>
        </p>
      </div>
    </section>
  );
}
