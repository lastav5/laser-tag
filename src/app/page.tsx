import {
  BadgeCheck,
  CalendarRange,
  ChevronDown,
  Gamepad2,
  Gift,
  MessagesSquare,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Stars,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { HeroVisual } from "@/components/hero-visual";
import { LeadForm } from "@/components/lead-form";

const benefits = [
  {
    icon: ShieldCheck,
    title: "בטוח, ממוזג ומנוהל",
    copy:
      "זירה מתקדמת, תדריך מלא בתחילת כל משחק ומפעילים שמחזיקים את האנרגיה גבוהה אבל בשליטה.",
  },
  {
    icon: Gift,
    title: "מושלם לימי הולדת",
    copy:
      "שילוב של משחק, טקס עוגה, חדר אירוח פרטי וקצב שמרגיש כמו אירוע שהוכן במיוחד לילד או לילדה שלכם.",
  },
  {
    icon: Users,
    title: "גם לקבוצות ואירועים",
    copy:
      "בתי ספר, תנועות נוער, קבוצות חברים ואירועי חברה עם חלוקה חכמה לקבוצות, סבבים וקונספט משחק.",
  },
  {
    icon: Stars,
    title: "חוויה שנראית פרימיום",
    copy:
      "אורות ניאון, תחנות משימה, מוזיקה נכונה ותחושת כניסה לעולם אחר כבר מהרגע הראשון.",
  },
];

const packages = [
  {
    title: "מסלול סטרט",
    price: "₪1,490",
    highlight: "עד 12 ילדים",
    copy: "למסיבה ממוקדת, זורמת וקלילה עם כל מה שצריך כדי להרים יום הולדת בלי בלגן.",
    features: [
      "60 דקות זירה + תדריך",
      "חדר אירוח ל-30 דקות",
      "מפעיל צמוד לאורך כל הסבב",
      "שתייה קלה וכלי הגשה",
    ],
  },
  {
    title: "מסלול ניאון",
    price: "₪2,390",
    highlight: "הבחירה הכי פופולרית",
    copy:
      "החבילה המלאה למשפחות שרוצות אירוע שמרגיש מושקע מהכניסה ועד רגע העוגה והצילומים.",
    features: [
      "90 דקות חוויה מלאה",
      "2 סבבי משחק + משימה קבוצתית",
      "חדר אירוח פרטי ל-45 דקות",
      "מיתוג אישי על מסכי הכניסה",
    ],
  },
  {
    title: "מסלול ארנה מקס",
    price: "₪3,490",
    highlight: "עד 24 משתתפים",
    copy:
      "לקבוצות גדולות, בר/בת מצווה בוטיק ואירועים שרוצים גם נראות גבוהה וגם תפעול חלק מאחורי הקלעים.",
    features: [
      "90 דקות זירה בבלעדיות חלקית",
      "חלוקה לטורניר עם ניקוד חי",
      "חדר אירוח מורחב וצוות כפול",
      "תוספת וידאו קצר לסיום האירוע",
    ],
  },
];

const flow = [
  {
    step: "01",
    title: "משאירים פרטים",
    copy: "ספרו לנו את התאריך, הגילאים וסוג האירוע. אנחנו חוזרים מהר עם התאמה מדויקת.",
  },
  {
    step: "02",
    title: "בוחרים חבילה",
    copy: "יחד בונים את הקצב: כמה משתתפים, כמה זמן משחק, חדר אירוח ומה חשוב לכם שיהיה באירוע.",
  },
  {
    step: "03",
    title: "מקבלים אישור מסודר",
    copy: "שולחים לכם סיכום ברור, שעת הגעה, מה להביא, ואיך היום עצמו הולך להיראות.",
  },
  {
    step: "04",
    title: "מגיעים ונהנים",
    copy: "אנחנו מחזיקים את ההפקה, הילדים נכנסים לאקשן, ואתם מקבלים אירוע שמרגיש בשליטה מלאה.",
  },
];

const gallery = [
  {
    image: "/images/gallery-birthday.png",
    title: "טקס יום הולדת שנשאר במרכז",
    copy: "חדר אירוח ניאוני, עוגה, מוזיקה וקצב שממשיך את החוויה גם אחרי הסבב.",
  },
  {
    image: "/images/gallery-briefing.png",
    title: "משימות וקבוצות עם אדרנלין",
    copy: "תדריך חכם, מסלול ברור וסיפור משחק שנותן לכל ילד תפקיד.",
  },
  {
    image: "/images/gallery-action.png",
    title: "אקשן מצולם בדיוק נכון",
    copy: "זוויות, תאורה ותנועה שמרגישות כמו חוויה אמיתית ולא אולם משחקים רגיל.",
  },
];

const testimonials = [
  {
    quote:
      "בפעם הראשונה הרגשנו שמישהו באמת מנהל לנו את יום ההולדת. הילדים היו בעננים והכול תקתק.",
    name: "דנה, ראשון לציון",
  },
  {
    quote:
      "הבן שלי חזר הביתה ואמר שזו המסיבה הכי טובה שהייתה לו. הזירה נראית מדהים והצוות היה מעולה.",
    name: "אמיר, רמת גן",
  },
  {
    quote:
      "באנו עם קבוצה גדולה והם ידעו בדיוק איך לחלק, להפעיל ולהשאיר את כולם בתוך המשחק.",
    name: "יעל, מודיעין",
  },
];

const faqs = [
  {
    question: "לאיזה גילאים זה מתאים?",
    answer:
      "רוב ימי ההולדת אצלנו הם לגילאי 7 עד 14, אבל אנחנו מתאימים את רמת המשחק, הקצב ואופי המשימות גם לקבוצות בוגרות יותר.",
  },
  {
    question: "כמה זמן לפני צריך להזמין?",
    answer:
      "בסופי שבוע מומלץ לסגור לפחות שבועיים מראש. באמצע שבוע לעיתים אפשר למצוא מקום גם בהתראה קצרה יותר.",
  },
  {
    question: "יש חדר פרטי לעוגה ולכיבוד?",
    answer:
      "כן. בכל חבילה יש חדר אירוח, ובחבילות המורחבות החדר גדול יותר וכולל זמן אירוח ארוך יותר.",
  },
  {
    question: "מה קורה אם מספר המשתתפים משתנה?",
    answer:
      "אנחנו גמישים. מעדכנים אותנו מראש, ומתאימים את החלוקה לקבוצות ואת התמחור בהתאם לחבילה שבחרתם.",
  },
  {
    question: "אפשר להזמין גם לקבוצות ובתי ספר?",
    answer:
      "בהחלט. יש לנו מסלולים ייעודיים לקבוצות, כיתות, תנועות נוער ואירועי גיבוש עם ניהול זמנים מסודר.",
  },
  {
    question: "מה צריך להביא לאירוע?",
    answer:
      "נעליים סגורות, מצב רוח טוב וכל דבר אישי שתרצו לשלב בחדר האירוח. את תפעול המשחק, הציוד והתדריך אנחנו מספקים.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-18 pt-6 lg:px-10">
          <header className="glass-panel sticky top-4 z-30 rounded-lg px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-[var(--neon-blue)] shadow-[0_0_24px_rgba(84,187,255,0.2)]">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#91cbff]">
                    Pulse Arena
                  </p>
                  <p className="text-sm text-white/76">
                    לייזר טאג לילדים, ימי הולדת, קבוצות ואירועים
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <nav className="hidden items-center gap-2 text-sm text-white/72 lg:flex">
                  {[
                    ["יתרונות", "#benefits"],
                    ["חבילות", "#packages"],
                    ["איך זה עובד", "#how-it-works"],
                    ["גלריה", "#gallery"],
                    ["שאלות נפוצות", "#faq"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="rounded-full border border-transparent px-3 py-2 hover:border-white/12 hover:bg-white/5 hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <a
                  href="#lead-form"
                  className="rounded-full bg-[var(--neon-blue)] px-4 py-2 font-medium text-[#04111f] hover:translate-y-[-1px] hover:bg-[#7fd1ff]"
                >
                  תיאום שיחה
                </a>
              </div>
            </div>
          </header>

          <div className="pb-8 pt-10 lg:pt-14">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/4 px-4 py-2 text-sm text-white/74">
                <Sparkles className="h-4 w-4 text-[var(--neon-teal)]" />
                המקום שבו יום הולדת נראה כמו אירוע ומרגיש כמו משחק ענק
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                חוויית לייזר טאג
                <span className="block bg-gradient-to-l from-[#7fe0ff] via-[#7da0ff] to-[#d19fff] bg-clip-text text-transparent">
                  שהילדים לא מפסיקים לדבר עליה
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#bfd0ef] sm:text-xl">
                זירה immersive בעיצוב כהה, אורות ניאון, צוות שמנהל את הקצב, וחבילות
                חכמות לימי הולדת, קבוצות, בתי ספר ואירועים מיוחדים. הכול מרגיש
                נוצץ, בטוח ומדויק להורים לא פחות מאשר לילדים.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#lead-form"
                  className="inline-flex min-w-44 items-center justify-center rounded-full bg-[var(--neon-blue)] px-6 py-3 text-base font-medium text-[#04111f] shadow-[0_12px_40px_rgba(84,187,255,0.26)] hover:translate-y-[-1px] hover:bg-[#7fd1ff]"
                >
                  בדיקת זמינות מהירה
                </a>
                <a
                  href="#packages"
                  className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-base font-medium text-white hover:border-[var(--line-strong)] hover:bg-white/8"
                >
                  לראות חבילות
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/68">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2">
                  <BadgeCheck className="h-4 w-4 text-[var(--neon-teal)]" />
                  עד 24 משתתפים בכל סבב
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2">
                  <CalendarRange className="h-4 w-4 text-[var(--neon-blue)]" />
                  זמני אירוח גמישים באמצע שבוע ובסופ״ש
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2">
                  <PartyPopper className="h-4 w-4 text-[var(--neon-violet)]" />
                  מותאם לימי הולדת, קבוצות ואירועי חברה
                </span>
              </div>
            </div>

              <div className="mt-10 lg:mt-12">
                <HeroVisual />
              </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["4.9/5", "ממוצע שביעות רצון מהורים ומארגנים"],
                ["90 דק׳", "משך חוויה מומלץ לאירוע מלא"],
                ["7-14", "טווח הגילים הפופולרי ביותר"],
                ["תוך שעה", "זמן חזרה ממוצע בשעות הפעילות"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="glass-panel rounded-lg px-5 py-4 text-center"
                >
                  <p className="font-mono text-2xl font-semibold uppercase tracking-[0.16em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/64">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
              למה הורים בוחרים בנו
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              עיצוב immersive מבחוץ, תפעול שקט ומדויק מבפנים
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#b8c9e8]">
              פולס ארנה נבנה כדי לתת לילדים תחושת wow בלי להפוך את ההורים למפיקי
              אירועים. כל תחנה במסלול נועדה להוריד חיכוך, לשמור על אנרגיה ולייצר
              אירוע שבאמת זורם.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="glass-panel rounded-lg p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-[var(--neon-blue)]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/68">
                  {benefit.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
                חבילות יום הולדת ואירועים
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                בוחרים רמת השקעה, אנחנו בונים את הרגע
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/66">
              כל החבילות כוללות זירת לייזר טאג, ציוד, תדריך ומפעיל. משם כבר
              בוחרים כמה עומק, כמה זמן וכמה wow אתם רוצים באירוע.
            </p>
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {packages.map((pkg, index) => (
              <article
                key={pkg.title}
                className={`glass-panel rounded-lg p-6 ${
                  index === 1
                    ? "border-[var(--line-strong)] shadow-[0_24px_90px_rgba(67,110,255,0.24)]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#93d8ff]">
                      {pkg.highlight}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {pkg.title}
                    </h3>
                  </div>
                  {index === 1 ? (
                    <span className="rounded-full border border-[#8bc4ff]/30 bg-[#54bbff]/12 px-3 py-1 text-xs font-medium text-[#bfe8ff]">
                      מומלץ
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 text-4xl font-semibold tracking-tight text-white">
                  {pkg.price}
                </p>
                <p className="mt-4 min-h-16 text-base leading-7 text-white/68">
                  {pkg.copy}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/72">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-teal)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#lead-form"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-medium text-white hover:border-[var(--line-strong)] hover:bg-white/8"
                >
                  לקבל התאמה למסלול הזה
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
              איך זה עובד
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              תהליך קצר, ברור ובלי כאב ראש
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {flow.map((item) => (
              <article key={item.step} className="glass-panel rounded-lg p-6">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#6ef7e6]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/66">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
                גלריה
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                כך נראית חוויה שלא מרגישה כמו עוד אולם
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/66">
              מהמשחק עצמו ועד חדר האירוח, כל שכבה במקום מתוכננת כדי לתת תחושת
              כניסה לעולם אחר ולהשאיר את הרגעים היפים בדיוק במרכז.
            </p>
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.title}
                className="glass-panel overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/66">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="glass-panel rounded-lg p-6">
                <div className="flex items-center gap-2 text-[#ffd975]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Sparkles
                      key={`${testimonial.name}-${index}`}
                      className="h-4 w-4"
                    />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-white/84">
                  “{testimonial.quote}”
                </p>
                <p className="mt-5 text-sm font-medium text-[#a8cfff]">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-22 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="max-w-xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
              שאלות נפוצות
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              כל מה שרוצים לדעת לפני שסוגרים תאריך
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/66">
              אם יש לכם אירוע קצת אחר, מספר משתתפים חריג או בקשה מיוחדת, פשוט
              כותבים לנו בטופס ואנחנו מתאימים את המסלול.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="faq-item glass-panel rounded-lg p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right">
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-[#88d7ff]" />
                </summary>
                <p className="mt-4 text-base leading-7 text-white/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-22 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="glass-panel rounded-lg p-7 lg:p-8">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#88d7ff]">
                ליד חם
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                רוצים שנחזור אליכם היום?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/68">
                משאירים פרטים, אנחנו בודקים זמינות, מתאימים חבילה ומחזירים לכם
                תשובה ברורה בלי מרדף.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/72">
                <div className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/4 px-4 py-4">
                  <MessagesSquare className="mt-0.5 h-5 w-5 shrink-0 text-[var(--neon-blue)]" />
                  <div>
                    <p className="font-medium text-white">חוזרים מהר ובצורה מסודרת</p>
                    <p className="mt-1 leading-6 text-white/62">
                      עם הצעת מסלול, הערכת מחיר, וכמה מקומות עוד פנויים בתאריך
                      שביקשתם.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/4 px-4 py-4">
                  <Gamepad2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--neon-violet)]" />
                  <div>
                    <p className="font-medium text-white">התאמה לפי סוג אירוע</p>
                    <p className="mt-1 leading-6 text-white/62">
                      יום הולדת, קבוצת חברים, בית ספר או אירוע חברה קטן. לכל קצב יש
                      מבנה אחר.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
