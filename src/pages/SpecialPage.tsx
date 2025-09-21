// src/pages/Horoscope.tsx
import React from "react";
import { useTranslation } from "react-i18next";

// Zodiac symbols (Unicode) + sample horoscopes for this month
const zodiacSigns = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 – Apr 19",
    horoscope:
      "This month brings new beginnings. Focus on your goals and avoid distractions. Energy levels will be high — channel them wisely.",
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 – May 20",
    horoscope:
      "Patience will reward you. Financial opportunities are coming. Maintain balance between work and personal life.",
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 – Jun 20",
    horoscope:
      "Communication is key this month. Expect new connections and collaborations. Take care of your mental health.",
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 – Jul 22",
    horoscope:
      "Family and emotional stability take priority. Trust your intuition when making decisions related to relationships.",
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 – Aug 22",
    horoscope:
      "Recognition is on the way. Your leadership will shine, but remember to listen to others’ opinions too.",
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 – Sep 22",
    horoscope:
      "Time to organize and plan. Health should not be ignored. A great month to refine your long-term vision.",
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 – Oct 22",
    horoscope:
      "Balance is essential. Relationships will be harmonious if you avoid overthinking. Career progress looks promising.",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 – Nov 21",
    horoscope:
      "Transformation is happening. Let go of old patterns. Financial matters improve towards the month’s end.",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 – Dec 21",
    horoscope:
      "Adventure and learning await you. A good month for travel or education. Stay grounded to avoid overspending.",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 – Jan 19",
    horoscope:
      "Hard work pays off now. Focus on long-term stability. Support from seniors or mentors will be valuable.",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 – Feb 18",
    horoscope:
      "Innovation is your strength. Use your creativity to solve problems. Social life will bring you joy.",
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 – Mar 20",
    horoscope:
      "Spiritual growth is highlighted. Trust your dreams and inner guidance. A good month to connect with nature.",
  },
];

const SpecialPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-divine text-white min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-playfair font-bold mb-4">
          {t("horoscope.title", "Monthly Horoscope")}
        </h2>
        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
          {t(
            "horoscope.subtitle",
            "Discover what the stars have in store for you this month."
          )}
        </p>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              className="bg-white text-primary rounded-2xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center text-5xl mb-4 text-orange-500">
                {sign.symbol}
              </div>
              <h3 className="text-2xl font-bold mb-2">{sign.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{sign.dates}</p>
              <p className="text-gray-700">{sign.horoscope}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialPage;
