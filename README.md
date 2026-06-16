# Pulse Arena

אתר נחיתה RTL ב-Next.js + Tailwind עבור מתחם לייזר טאג לילדים, ימי הולדת, קבוצות ואירועים.

## פיתוח מקומי

```bash
npm install
npm run dev
```

האתר יעלה ב-`http://localhost:3000`.

## חיבור לידים

1. העתיקו `.env.example` ל-`.env.local`.
2. הגדירו את משתני הסביבה:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

3. הריצו את המיגרציה של Supabase מתוך [supabase/migrations/20260616_create_leads.sql](/Users/stav/Projects/LaserTag/supabase/migrations/20260616_create_leads.sql:1).

ה-API של הלידים נמצא ב-`src/app/api/leads/route.ts`:

- שומר כל ליד לטבלת `leads`
- משאיר את כל האוטומציה שלאחר ההכנסה לטריגרים / פונקציות בתוך Supabase

## נכסים ויזואליים

כל תמונות ה-hero והגלריה נשמרו תחת `public/images`.
