import React from "react";
import { Globe2, Languages, Mail, MapPin, Phone } from "lucide-react";

const Contact = ({ profile, ui }) => {
  const contactDetails = [
    { label: ui.locationLabel, value: profile.location, icon: MapPin },
    {
      label: ui.websiteLabel,
      value: profile.website,
      icon: Globe2,
      href: `https://${profile.website}`,
    },
    {
      label: ui.phoneLabel,
      value: profile.phone,
      icon: Phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { label: ui.languagesLabel, value: profile.languages, icon: Languages },
  ].filter((item) => item.value);
  return (
    <footer
      id="contact"
      className="scroll-mt-24 px-6 py-12 md:scroll-mt-28 md:px-8 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl border-t border-[#5D4037]/25 pt-6 sm:pt-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[0.78fr_1fr] md:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#5D4037] sm:text-xs sm:tracking-[0.28em]"></p>
            <h2 className="text-balance font-serif text-[2.75rem] font-medium leading-[0.95] tracking-[-0.04em] text-[#3E2723] sm:text-5xl md:text-7xl md:leading-none">
              {ui.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#5D4037] sm:mt-6 sm:text-base sm:leading-8">
              {ui.subtitle}
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex min-h-[44px] flex-col items-start gap-3 justify-self-start break-all font-serif text-[clamp(1.75rem,8vw,3.75rem)] font-medium tracking-[-0.04em] text-[#3E2723] decoration-[#5D4037]/30 decoration-1 underline-offset-8 hover:underline sm:flex-row sm:items-center sm:gap-4 sm:break-normal md:justify-self-end"
          >
            <Mail
              className="h-7 w-7 shrink-0 text-[#5D4037] transition group-hover:-translate-y-1 sm:h-8 sm:w-8"
              strokeWidth={1.5}
            />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 grid gap-3 border-t border-[#5D4037]/20 pt-5 sm:mt-10 sm:grid-cols-2 sm:gap-4 sm:pt-6 lg:grid-cols-4">
          {contactDetails.map(({ label, value, icon: Icon, href }) => {
            const content = (
              <>
                <span className="flex items-center gap-2 text-[#8D6E63]">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                  {label}
                </span>
                <span className="mt-1 block text-[#5D4037] normal-case tracking-[0.08em]">
                  {value}
                </span>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] transition hover:text-[#3E2723]"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em]"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-[#5D4037]/20 pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.18em] text-[#8D6E63] sm:flex-row sm:gap-4 sm:pt-6 sm:tracking-[0.2em]"></div>
      </div>
    </footer>
  );
};

export default Contact;
