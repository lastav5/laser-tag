import { BadgeCheck, Crown, Target } from "lucide-react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="pulse-ring absolute inset-x-[20%] top-8 h-52 rounded-full bg-[radial-gradient(circle,rgba(84,187,255,0.26),transparent_70%)] blur-3xl" />
      <div className="grid items-center gap-5 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
        <div className="hidden gap-5 lg:grid">
          <div className="glass-panel float-slow rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--neon-teal)]">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-white">יום הולדת עם טקס שיא</p>
                <p className="mt-1 text-sm text-white/58">
                  משחק, עוגה, חדר פרטי וצילומים
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel float-delay rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--neon-blue)]">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-white">ניקוד ומשימות</p>
                <p className="mt-1 text-sm text-white/58">
                  סבבים דינמיים עם חלוקה חכמה לקבוצות
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="laser-frame arena-scan glass-panel relative rounded-[28px] p-3 shadow-[0_24px_120px_rgba(8,14,32,0.64)]">
          <div className="relative overflow-hidden rounded-[22px]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,5,12,0.02),rgba(4,8,18,0.32)_78%,rgba(5,8,17,0.72))]" />
            <Image
              src="/images/hero-laser-tag.png"
              alt="ילדים משחקים לייזר טאג בזירה מוארת בניאון"
              width={1790}
              height={1006}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-md rounded-lg border border-white/12 bg-black/36 px-4 py-3 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#93d8ff]">
                  Arena View
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  זירה חכמה עם אורות ניאון, מסלולי תנועה ותדריך שמכניס את הילדים
                  ישר למשחק.
                </p>
              </div>
              <div className="rounded-lg border border-white/12 bg-black/36 px-4 py-3 backdrop-blur sm:text-left">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6ef7e6]">
                  90 דקות חוויה
                </p>
                <p className="mt-2 text-sm text-white/74">
                  כולל תדריך, סבבים, חדר אירוח וקצב שמרגיש כמו אירוע מושקע באמת.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden gap-5 lg:grid">
          <div className="glass-panel float-delay rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--neon-violet)]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-white">מפעילים מנוסים</p>
                <p className="mt-1 text-sm text-white/58">
                  אנרגיה גבוהה עם שליטה מלאה בזמנים
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel float-slow rounded-lg p-4">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#8bd8ff]">
              קהלים
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              ילדים, קבוצות, בתי ספר ואירועי חברה
            </p>
            <p className="mt-2 text-sm leading-6 text-white/58">
              אותה זירה, חוויה אחרת לגמרי לפי הגיל, הקצב והמטרה של האירוע.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
