import {
  Clock3,
  Crosshair,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const whatsappHref = `https://api.whatsapp.com/send?text=${encodeURIComponent(
  "היי, אשמח לקבל פרטים על אירוע לייזר טאג בפולס ארנה",
)}`;

const highlights = [
  {
    icon: Crosshair,
    label: "זירת אקשן חכמה",
  },
  {
    icon: Clock3,
    label: "60-90 דקות של אקשן",
  },
  {
    icon: ShieldCheck,
    label: "צוות מקצועי לאורך המשחק",
  },
  {
    icon: MapPin,
    label: "מתאים לימי הולדת וקבוצות",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="pulse-ring absolute inset-x-[18%] top-10 h-56 rounded-full bg-[radial-gradient(circle,rgba(84,187,255,0.24),transparent_70%)] blur-3xl" />
      <div className="laser-frame glass-panel relative overflow-hidden rounded-[28px] shadow-[0_24px_120px_rgba(8,14,32,0.64)]">
        <div className="relative min-h-[660px] overflow-hidden rounded-[28px]">
          <Image
            src="/images/hero-laser-tag.png"
            alt="ילדים משחקים לייזר טאג בזירה מוארת בניאון"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,10,0.98)_0%,rgba(4,6,14,0.94)_28%,rgba(5,7,14,0.72)_48%,rgba(4,6,12,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.82)_100%)]" />

          <div className="absolute inset-y-0 left-0 z-10 flex w-full items-center p-5 md:p-8 lg:p-10">
            <div className="w-full">
              <div className="max-w-xl text-left drop-shadow-[0_10px_38px_rgba(0,0,0,0.82)]">
                <div className="inline-flex items-center gap-2 text-sm text-white/84">
                  <Crosshair className="h-4 w-4 text-[var(--neon-teal)]" />
                  ארנת אקשן והרפתקה לילדים
                </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                זירה חשוכה,
                <span className="block bg-gradient-to-l from-[#7fe0ff] via-[#8eb4ff] to-[#c9a1ff] bg-clip-text text-transparent">
                  אקשן גדול והרפתקה חיה
                </span>
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-[#d0dcf6] sm:text-lg">
                נכנסים לארנה מלאה בניאון, מתחלקים לקבוצות ויוצאים למשימת פעולה
                מהירה, בטוחה ומלאת אנרגיה.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#aefc2c] px-6 py-3 text-base font-semibold text-[#08110f] shadow-[0_16px_40px_rgba(174,252,44,0.24)] hover:translate-y-[-1px] hover:bg-[#c2ff67]"
              >
                <MessageCircle className="h-5 w-5" />
                להזמנה בוואטסאפ
              </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4 z-20 lg:inset-x-6 lg:bottom-6">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/42 px-4 py-3 text-white/84 backdrop-blur-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-[#aefc2c]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium leading-6">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
