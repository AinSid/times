'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

type PrayerTime = {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

type CityTimes = {
  [date: string]: PrayerTime;
};

type PrayerTimesData = {
  startDate: string;
  times: CityTimes;
};

export default function PrayerTimesPage() {
  const { city } = useParams();
  const cityName = city === 'los-angeles' ? 'Los Angeles' : 
                  city === 'new-york' ? 'New York City' : 
                  city === 'austin' ? 'Austin' :
                  city === 'philadelphia' ? 'Philadelphia' :
                  city === 'san-francisco' ? 'San Francisco' :
                  city === 'seattle' ? 'Seattle' :
                  city === 'karachi' ? 'Karachi' :
                  'Dhaka';

  const [mounted, setMounted] = useState(false);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(`/api/prayer-times?city=${city}`);
        if (!response.ok) {
          throw new Error('Failed to fetch prayer times');
        }
        const data = await response.json();
        setPrayerTimes(data);
        setError(null);
      } catch (err) {
        setError('Failed to load prayer times');
        console.error('Error fetching prayer times:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [city]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    const currentYear2025 = new Date(2025, now.getMonth(), now.getDate());
    const ramadanStart = new Date(2025, 2, 1);
    const ramadanEnd = new Date(2025, 2, 29);
    
    if (currentYear2025 < ramadanStart) {
      return new Date(2024, 2, 1);
    }
    if (currentYear2025 > ramadanEnd) {
      return new Date(2024, 2, 29);
    }
    return new Date(2024, 2, currentYear2025.getDate());
  });

  // Fixed array of dates with correct weekdays
  const dates = [
    { date: '2024-03-01', weekday: 'Saturday' },
    { date: '2024-03-02', weekday: 'Sunday' },
    { date: '2024-03-03', weekday: 'Monday' },
    { date: '2024-03-04', weekday: 'Tuesday' },
    { date: '2024-03-05', weekday: 'Wednesday' },
    { date: '2024-03-06', weekday: 'Thursday' },
    { date: '2024-03-07', weekday: 'Friday' },
    { date: '2024-03-08', weekday: 'Saturday' },
    { date: '2024-03-09', weekday: 'Sunday' },
    { date: '2024-03-10', weekday: 'Monday' },
    { date: '2024-03-11', weekday: 'Tuesday' },
    { date: '2024-03-12', weekday: 'Wednesday' },
    { date: '2024-03-13', weekday: 'Thursday' },
    { date: '2024-03-14', weekday: 'Friday' },
    { date: '2024-03-15', weekday: 'Saturday' },
    { date: '2024-03-16', weekday: 'Sunday' },
    { date: '2024-03-17', weekday: 'Monday' },
    { date: '2024-03-18', weekday: 'Tuesday' },
    { date: '2024-03-19', weekday: 'Wednesday' },
    { date: '2024-03-20', weekday: 'Thursday' },
    { date: '2024-03-21', weekday: 'Friday' },
    { date: '2024-03-22', weekday: 'Saturday' },
    { date: '2024-03-23', weekday: 'Sunday' },
    { date: '2024-03-24', weekday: 'Monday' },
    { date: '2024-03-25', weekday: 'Tuesday' },
    { date: '2024-03-26', weekday: 'Wednesday' },
    { date: '2024-03-27', weekday: 'Thursday' },
    { date: '2024-03-28', weekday: 'Friday' },
    { date: '2024-03-29', weekday: 'Saturday' },
    { date: '2024-03-30', weekday: 'Sunday' }
  ];

  const dateKey = `2024-03-${String(currentDate.getDate()).padStart(2, '0')}`;
  const currentDateInfo = dates.find(d => d.date === dateKey) || dates[0];
  
  const formattedDate = `${currentDateInfo.weekday}, ${new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric'
  }).format(currentDate)}`;

  if (isLoading || !prayerTimes) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff0e6] to-[#ffe6d1]/30">
        <div className="text-foreground/70">Loading prayer times...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff0e6] to-[#ffe6d1]/30">
        <div className="text-red-500">{error}</div>
      </main>
    );
  }

  const times = prayerTimes.times[dateKey] || prayerTimes.times[prayerTimes.startDate];

  const goToPreviousDay = () => {
    const prevDate = new Date(2024, 2, currentDate.getDate() - 1);
    if (prevDate.getDate() >= 1) {
      setCurrentDate(prevDate);
    }
  };

  const goToNextDay = () => {
    const nextDate = new Date(2024, 2, currentDate.getDate() + 1);
    if (nextDate.getDate() <= 29) {
      setCurrentDate(nextDate);
    }
  };

  const getRamadanDay = (date: Date) => {
    if (city === 'karachi' || city === 'dhaka') return 0;
    return date.getDate();
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#fff0e6] to-[#ffe6d1]/30">
      {/* Decorative background elements */}
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffe0cc]/40 rounded-full blur-[130px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[130px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className={`max-w-lg mx-auto px-4 pt-8 pb-6 relative z-10 transition-opacity duration-700 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/"
            className="inline-flex items-center text-primary/90 hover:text-primary transition-colors"
          >
            <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[0.9375rem]">Back</span>
          </Link>
          <h1 className="text-[0.9375rem] text-foreground/90 text-shadow font-medium">{cityName}</h1>
        </div>

        {/* Date Card */}
        <div className="bg-[#fff5ec]/95 backdrop-blur-lg rounded-[1.5rem] border border-border/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5 mb-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={goToPreviousDay}
              disabled={dateKey <= '2024-03-01'}
              className="p-1.5 -ml-1.5 text-primary/90 hover:text-primary transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <h2 className="text-[1.125rem] text-foreground/90 mb-1 text-shadow font-medium">{formattedDate}</h2>
              {city !== 'karachi' && city !== 'dhaka' && (
                <p className="text-primary/90 text-[0.875rem] text-shadow">Ramadan Day {getRamadanDay(currentDate)}</p>
              )}
            </div>
            <button 
              onClick={goToNextDay}
              disabled={dateKey >= '2024-03-30'}
              className="p-1.5 -mr-1.5 text-primary/90 hover:text-primary transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Prayer Times */}
        <div className="bg-[#fff5ec]/95 backdrop-blur-lg rounded-[1.5rem] border border-border/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] divide-y divide-border/40">
          {Object.entries(times).map(([prayer, time]) => (
            <div 
              key={prayer} 
              className="flex items-center justify-between px-10 py-[1.375rem] first:rounded-t-[1.5rem] last:rounded-b-[1.5rem]"
            >
              <span className="text-sm text-foreground/90 capitalize text-shadow">{prayer}</span>
              <span className="text-sm text-foreground/90 text-shadow">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 