/* eslint-disable @next/next/no-img-element */
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  Crosshair,
  MapPin,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

const heroImage = "/images/outrage-lasertag.png";

const whatsappHref = `https://api.whatsapp.com/send?text=${encodeURIComponent(
  "היי, אשמח לקבל פרטים על אירוע לייזר טאג",
)}`;

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "מדריכים מקצועיים",
  },
  {
    icon: Clock3,
    title: "60-90 דקות של אקשן",
  },
  {
    icon: Crosshair,
    title: "ציוד לייזר טאג מתקדם",
  },
  {
    icon: MapPin,
    title: "מגיעים עד אליך לכל מקום",
  },
];

const steps = [
  {
    number: "1",
    icon: CalendarDays,
    title: "בוחרים תאריך",
    copy: "ומשריינים לנו",
  },
  {
    number: "2",
    icon: Truck,
    title: "אנחנו מגיעים",
    copy: "עד אליכם",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "מתארגנים ומקבלים",
    copy: "ציוד מקצועי",
  },
  {
    number: "4",
    icon: Crosshair,
    title: "יוצאים לקרב",
    copy: "מטורף!",
  },
];

const packages = [
  {
    name: "BASIC",
    accentClass: "text-[var(--primary)]",
    price: "990",
    capacity: "עד 10 משתתפים",
    borderClass: "neon-border-green",
    buttonClass: "bg-[var(--primary)] text-[var(--primary-dark)]",
    iconClass: "text-[var(--primary)]",
    items: [
      "90 דקות פעילות",
      "ציוד לייזר טאג מלא",
      "מדריך מקצועי",
      "3-5 משחקים שונים",
      "הגעה עד הבית / פארק",
    ],
  },
  {
    name: "PREMIUM",
    accentClass: "text-[var(--secondary)]",
    price: "1,290",
    capacity: "עד 15 משתתפים",
    borderClass: "border-2 border-[var(--secondary)] shadow-2xl",
    buttonClass: "bg-[var(--secondary)] text-[#271900]",
    iconClass: "text-[var(--secondary)]",
    badge: "החבילה המבוקשת",
    promoLines: ["כל מה שבחבילה הבסיסית", "+ יותר ציוד", "+ יותר זמן משחק"],
    items: ["כל הכלול ב-Basic", "ציוד נוסף לכל שחקן"],
  },
  {
    name: "EVENT",
    accentClass: "text-[var(--accent)]",
    price: "1,590",
    capacity: "חבילת פרימיום",
    borderClass: "neon-border-pink",
    buttonClass: "bg-[var(--accent)] text-[var(--foreground)]",
    iconClass: "text-[var(--accent)]",
    items: ["כל מה שב-PREMIUM", "טורניר עם גביע", "מוזיקה ו-DJ", "צילום משחק"],
  },
];

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwzAxLanfznWoLvRJan14QiyyYIK7Du1M9Lyg229NhTIC9XCmraaENfwbbrDASlLxNDqnpaMmNKMJLhvigWKx_UPnHlMpxObPIJEAVYrUjtv39lDuiFPfQmqAWHxdeTKfX8eRwmHAYJWgWhE15ERn2yH9nSWe0Hak4mSB3tZjd7CEb98kULh0I1x9_16xRr4O_mDE_NMTocLhM-fZ7UC1qWaf0LYu-6nzSCBK7hwblfhtxcIcL4Z4mTyk90BR3CFPp-zIlqNJMab0",
    alt: "Laser tag action 1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCODPiSBJ_reh832_TaYMPGhsl4b29WO1ncVzQnEitFpx4Unt8JNI91Y3myNo4xWmWdEN4DF9yswHFBCXHvVxlDjzHOUkuITbJZZDgZonAPV8JCZIYyiQBGFj1zu1EQecRB7vMe0boEFW4etoWEDFWf5aFRqA9zOG3wBUQ8tEREZO0eMQdAb_YuWXuVmgOWyn7ilk59mNX0-nBmNGiNxPZ10cZbuTdX4J0-mKq7ajzfGU3HehdrLepE3MLUvSlcXTjyishfGhHClJ8",
    alt: "Laser tag gear",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPnWGHjYryvLdt5ktiGRuku_pZN9d9N6VIk321IQBXEyL9_2powM8QtOVnq-hHvwPDbXz9sE3wFQf5zJclxgceRpPZb-4qUJqcgiCtX-0iqbuY9UHSGLkp_JT5qhXiAL4ppRiyM938n6de-_ANBgRFAwupPKmvJhsWzZvmnD5Rz1HS1HTijVKKXwwB7-PAfl0PhNl4tnY-FzrKhgLGAnouO21FZGJqOqhriR_Sq9YJ0u9ZwGmqBfqfIwGuRKxDlmZDvwX97ACVmCU",
    alt: "Team victory",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoPF2BkE9IJredeB4Mqfq3Z8P7T6L2-e44IxPgJzT8LWYmHSxoLrKvMIjrGIAkfLWN9qTP0OeH0u92Ad5I5pzjDjotNTmjbx0KV7nB29c_GxMh0jNDmFiUe9aU0Lm186lPJpCQdBxap8R986wbn3KsYFygXSktCzO9yUOnNt1KhKnxf_5ZvTkl01GjXE3bOMYFwRqaNwud3WRszVycv5iAUn1Yot286n19Ixf2nzsvI8fycsWka8cszql8HsWszHK0ePoFHWO-_j0",
    alt: "Strategic battle",
  },
];

const testimonials = [
  {
    quote:
      '"היה פשוט מטורף! הילדים לא הפסיקו לדבר על זה גם ימים אחרי. שירות ברמה הכי גבוהה שיש!"',
    name: "אורית, רמת גן",
    initial: "א",
  },
  {
    quote:
      '"הגיעו בזמן, הפעילו בצורה מקצועית ונתנו לילדים חוויה שלא ישכחו. שווה כל שקל!"',
    name: "דניאל, פתח תקווה",
    initial: "ד",
  },
  {
    quote: '"ארגון ברמה גבוהה, ציוד מעולה ומדריך מדהים. הילדים היו בעננים!"',
    name: "יעל, תל אביב",
    initial: "י",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[rgba(19,19,19,0.9)] shadow-md backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 md:px-6">
          <div className="text-[20px] font-black uppercase tracking-[-0.04em] text-[var(--foreground)]">
            OUTRAGE
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="border-b-2 border-[var(--foreground)] pb-1 text-base font-bold text-[var(--foreground)]"
            >
              בית
            </a>
            <a
              href="#how-it-works"
              className="text-base text-white/72 transition-colors hover:text-[var(--primary)]"
            >
              איך זה עובד
            </a>
            <a
              href="#packages"
              className="text-base text-white/72 transition-colors hover:text-[var(--primary)]"
            >
              חבילות
            </a>
            <a
              href="#faq"
              className="text-base text-white/72 transition-colors hover:text-[var(--primary)]"
            >
              שאלות נפוצות
            </a>
            <a
              href="#contact"
              className="text-base text-white/72 transition-colors hover:text-[var(--primary)]"
            >
              צור קשר
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <MessageSquare className="h-5 w-5 text-[var(--primary)] transition-opacity hover:opacity-80" />
            <a
              href="#contact"
              className="rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-bold text-[var(--primary-dark)] transition-opacity hover:opacity-90"
            >
              להזמין תאריך
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--outline-variant)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                alt="Children playing laser tag"
                className="h-full w-full object-cover object-center"
                src={heroImage}
              />
            </div>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(19,19,19,0.1)_0%,rgba(19,19,19,0.45)_34%,rgba(19,19,19,0.82)_58%,rgba(19,19,19,0.96)_100%)]" />

            <div className="relative z-10 px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-12 lg:py-24">
              <div className="ml-auto max-w-2xl text-right">
            <h1 className="mb-4 text-[32px] font-extrabold leading-none sm:text-[44px] lg:text-[56px]">
              יום הולדת שילדים
              <br />
              <span className="text-[var(--primary)]">לא ישכחו!</span>
            </h1>

            <p className="mb-10 max-w-lg text-lg leading-8 text-white/72">
              אנחנו מגיעים עד אליך עם זירת קרב לייזר טאג מקצועית, ציוד מתקדם
              ומדריכים - חוויה מלאה של אקשן!
            </p>

            <div className="mb-10 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              {heroFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-[var(--outline-variant)] bg-[rgba(32,31,31,0.5)] p-4 backdrop-blur-sm transition-colors hover:border-[var(--primary)]"
                >
                  <feature.icon className="mx-auto mb-2 h-9 w-9 text-[var(--primary)]" />
                  <p className="text-xs font-bold">{feature.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-end gap-4 md:flex-row-reverse md:justify-end">
              <a
                href="#contact"
                className="neon-glow-green inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-10 py-4 text-lg font-black text-[var(--primary-dark)] transition-all hover:brightness-110"
              >
                <CalendarDays className="h-5 w-5" />
                להזמין תאריך עכשיו
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--outline)] bg-transparent px-8 py-4 text-lg font-bold text-[var(--foreground)] transition-all hover:bg-[var(--surface-2)]"
              >
                מענה מהיר בוואטסאפ
                <MessageCircle className="h-5 w-5 text-green-500" />
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#0e0e0e] py-20">
        <div className="mx-auto max-w-[1200px] px-4 text-center md:px-6">
          <h2 className="mb-16 text-[32px] font-bold tracking-[-0.04em] sm:text-[40px]">
            איך זה עובד?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--surface-3)]">
                  <step.icon className="h-10 w-10 text-[var(--primary)]" />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-[var(--primary-dark)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-white/64">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="overflow-hidden bg-[var(--background)] py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <h2 className="mb-16 text-center text-[32px] font-bold tracking-[-0.04em] sm:text-[40px]">
            החבילות שלנו
          </h2>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`flex h-full flex-col rounded-xl bg-[var(--surface)] p-8 transition-transform duration-300 hover:translate-y-[-10px] ${pkg.borderClass} ${index === 1 ? "relative z-10 scale-105" : ""}`}
              >
                {pkg.badge ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--secondary)] px-4 py-1 text-xs font-bold text-[#412d00]">
                    {pkg.badge}
                  </div>
                ) : null}

                <div className="mb-8 text-center">
                  <span className={`text-sm font-black uppercase tracking-[0.2em] ${pkg.accentClass}`}>
                    {pkg.name}
                  </span>
                  <p className="mt-1 text-xs text-white/62">{pkg.capacity}</p>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-[56px] font-black leading-none text-[var(--foreground)]">
                      {pkg.price}
                    </span>
                    <span className="mr-1 text-xl font-bold">₪</span>
                  </div>
                </div>

                {pkg.promoLines ? (
                  <div className="mb-6 rounded-lg bg-[rgba(254,183,0,0.1)] p-4 text-center">
                    {pkg.promoLines.map((line, lineIndex) => (
                      <p
                        key={line}
                        className={
                          lineIndex === 0
                            ? "font-bold text-[var(--secondary)]"
                            : "text-sm text-white/70"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}

                <ul className="mb-10 flex-grow space-y-4">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/72">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 ${pkg.iconClass}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full rounded-lg py-3 text-center font-black transition-all hover:brightness-110 ${pkg.buttonClass}`}
                >
                  הזמינו עכשיו
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-white/62">
            *ניתן להוסיף משתתפים נוספים בתוספת תשלום
          </p>
        </div>
      </section>

      <section id="gallery" className="bg-[#0e0e0e] py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <h2 className="mb-12 text-center text-[32px] font-bold tracking-[-0.04em] sm:text-[40px]">
            חוויות אמיתיות
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="group aspect-square overflow-hidden rounded-lg border border-[var(--outline-variant)]"
              >
                <img
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <h2 className="mb-16 text-center text-[32px] font-bold tracking-[-0.04em] sm:text-[40px]">
            מה ההורים אומרים?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-xl bg-[var(--surface-2)] p-8"
                style={{ borderRight: "4px solid var(--primary)" }}
              >
                <span className="absolute left-4 top-4 text-4xl font-black text-[var(--primary)] opacity-20">
                  ”
                </span>
                <p className="mb-6 text-base leading-7 text-[var(--foreground)] italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-4)] font-bold text-[var(--primary)]">
                    {testimonial.initial}
                  </div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img alt="Children playing laser tag" className="h-full w-full object-cover" src={heroImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[rgba(19,19,19,0.8)] to-[var(--background)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6">
          <LeadForm />
        </div>
      </section>

      <footer className="border-t border-[var(--outline-variant)] bg-[#0e0e0e] py-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-3 md:px-6">
          <div className="text-center md:text-right">
            <div className="mb-2 text-[20px] font-black uppercase text-[var(--foreground)]">
              OUTRAGE
            </div>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              <a
                href="#"
                className="text-white/72 transition-colors hover:text-[var(--primary)]"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/72 transition-colors hover:text-[var(--primary)]"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="text-white/72 transition-colors hover:text-[var(--primary)]"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav id="faq" className="flex flex-col items-center justify-center gap-4 text-base md:flex-row">
            <a className="text-white/72 transition-colors hover:text-[var(--primary)]" href="#">
              Privacy Policy
            </a>
            <a className="text-white/72 transition-colors hover:text-[var(--primary)]" href="#">
              Terms of Service
            </a>
            <a className="text-white/72 transition-colors hover:text-[var(--primary)]" href="#">
              Safety Rules
            </a>
          </nav>

          <div className="text-center text-sm text-white/72 md:text-left">
            © 2024 OUTRAGE LASER TAG. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
