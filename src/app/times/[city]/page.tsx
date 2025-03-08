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

type PrayerTimes = {
  [city: string]: {
    startDate: string;
    times: CityTimes;
  };
};

// Prayer times data from CSV files
const mockPrayerTimes: PrayerTimes = {
  'los-angeles': {
    startDate: '2024-03-01',
    times: {
      '2024-03-01': {
        fajr: '05:12 AM',
        dhuhr: '12:06 PM',
        asr: '04:10 PM',
        maghrib: '05:50 PM',
        isha: '06:59 PM',
      },
      '2024-03-02': {
        fajr: '05:11 AM',
        dhuhr: '12:05 PM',
        asr: '04:11 PM',
        maghrib: '05:51 PM',
        isha: '07:00 PM',
      },
      '2024-03-03': {
        fajr: '05:10 AM',
        dhuhr: '12:05 PM',
        asr: '04:11 PM',
        maghrib: '05:52 PM',
        isha: '07:01 PM',
      },
      '2024-03-04': {
        fajr: '05:09 AM',
        dhuhr: '12:05 PM',
        asr: '04:12 PM',
        maghrib: '05:53 PM',
        isha: '07:02 PM',
      },
      '2024-03-05': {
        fajr: '05:07 AM',
        dhuhr: '12:05 PM',
        asr: '04:13 PM',
        maghrib: '05:54 PM',
        isha: '07:02 PM',
      },
      '2024-03-06': {
        fajr: '05:06 AM',
        dhuhr: '12:05 PM',
        asr: '04:13 PM',
        maghrib: '05:54 PM',
        isha: '07:03 PM',
      },
      '2024-03-07': {
        fajr: '05:05 AM',
        dhuhr: '12:04 PM',
        asr: '04:14 PM',
        maghrib: '05:55 PM',
        isha: '07:04 PM',
      },
      '2024-03-08': {
        fajr: '05:03 AM',
        dhuhr: '12:04 PM',
        asr: '04:15 PM',
        maghrib: '05:56 PM',
        isha: '07:05 PM',
      },
      '2024-03-09': {
        fajr: '06:03 AM',
        dhuhr: '01:04 PM',
        asr: '05:15 PM',
        maghrib: '06:56 PM',
        isha: '08:05 PM',
      },
      '2024-03-10': {
        fajr: '06:02 AM',
        dhuhr: '01:04 PM',
        asr: '05:15 PM',
        maghrib: '06:57 PM',
        isha: '08:06 PM',
      },
      '2024-03-11': {
        fajr: '06:01 AM',
        dhuhr: '01:04 PM',
        asr: '05:16 PM',
        maghrib: '06:58 PM',
        isha: '08:06 PM',
      },
      '2024-03-12': {
        fajr: '05:59 AM',
        dhuhr: '01:03 PM',
        asr: '05:16 PM',
        maghrib: '06:58 PM',
        isha: '08:07 PM',
      },
      '2024-03-13': {
        fajr: '05:58 AM',
        dhuhr: '01:03 PM',
        asr: '05:17 PM',
        maghrib: '06:59 PM',
        isha: '08:08 PM',
      },
      '2024-03-14': {
        fajr: '05:57 AM',
        dhuhr: '01:03 PM',
        asr: '05:18 PM',
        maghrib: '07:00 PM',
        isha: '08:09 PM',
      },
      '2024-03-15': {
        fajr: '05:55 AM',
        dhuhr: '01:02 PM',
        asr: '05:18 PM',
        maghrib: '07:01 PM',
        isha: '08:10 PM',
      },
      '2024-03-16': {
        fajr: '05:54 AM',
        dhuhr: '01:02 PM',
        asr: '05:19 PM',
        maghrib: '07:02 PM',
        isha: '08:10 PM',
      },
      '2024-03-17': {
        fajr: '05:53 AM',
        dhuhr: '01:02 PM',
        asr: '05:19 PM',
        maghrib: '07:02 PM',
        isha: '08:11 PM',
      },
      '2024-03-18': {
        fajr: '05:51 AM',
        dhuhr: '01:02 PM',
        asr: '05:20 PM',
        maghrib: '07:03 PM',
        isha: '08:12 PM',
      },
      '2024-03-19': {
        fajr: '05:50 AM',
        dhuhr: '01:01 PM',
        asr: '05:20 PM',
        maghrib: '07:04 PM',
        isha: '08:13 PM',
      },
      '2024-03-20': {
        fajr: '05:48 AM',
        dhuhr: '01:01 PM',
        asr: '05:21 PM',
        maghrib: '07:05 PM',
        isha: '08:14 PM',
      },
      '2024-03-21': {
        fajr: '05:47 AM',
        dhuhr: '01:01 PM',
        asr: '05:22 PM',
        maghrib: '07:05 PM',
        isha: '08:15 PM',
      },
      '2024-03-22': {
        fajr: '05:45 AM',
        dhuhr: '01:00 PM',
        asr: '05:22 PM',
        maghrib: '07:06 PM',
        isha: '08:15 PM',
      },
      '2024-03-23': {
        fajr: '05:44 AM',
        dhuhr: '01:00 PM',
        asr: '05:23 PM',
        maghrib: '07:07 PM',
        isha: '08:16 PM',
      },
      '2024-03-24': {
        fajr: '05:43 AM',
        dhuhr: '01:00 PM',
        asr: '05:23 PM',
        maghrib: '07:08 PM',
        isha: '08:17 PM',
      },
      '2024-03-25': {
        fajr: '05:41 AM',
        dhuhr: '01:00 PM',
        asr: '05:24 PM',
        maghrib: '07:09 PM',
        isha: '08:18 PM',
      },
      '2024-03-26': {
        fajr: '05:40 AM',
        dhuhr: '12:59 PM',
        asr: '05:24 PM',
        maghrib: '07:09 PM',
        isha: '08:19 PM',
      },
      '2024-03-27': {
        fajr: '05:38 AM',
        dhuhr: '12:59 PM',
        asr: '05:25 PM',
        maghrib: '07:10 PM',
        isha: '08:20 PM',
      },
      '2024-03-28': {
        fajr: '05:37 AM',
        dhuhr: '12:59 PM',
        asr: '05:25 PM',
        maghrib: '07:11 PM',
        isha: '08:20 PM',
      },
      '2024-03-29': {
        fajr: '05:35 AM',
        dhuhr: '12:58 PM',
        asr: '05:25 PM',
        maghrib: '07:12 PM',
        isha: '08:21 PM',
      }
    }
  },
  'new-york': {
    startDate: '2024-03-01',
    times: {
      '2024-03-01': {
        fajr: '05:14 AM',
        dhuhr: '12:08 PM',
        asr: '04:04 PM',
        maghrib: '05:48 PM',
        isha: '07:03 PM',
      },
      '2024-03-02': {
        fajr: '05:12 AM',
        dhuhr: '12:08 PM',
        asr: '04:05 PM',
        maghrib: '05:49 PM',
        isha: '07:04 PM',
      },
      '2024-03-03': {
        fajr: '05:11 AM',
        dhuhr: '12:08 PM',
        asr: '04:06 PM',
        maghrib: '05:50 PM',
        isha: '07:06 PM',
      },
      '2024-03-04': {
        fajr: '05:09 AM',
        dhuhr: '12:08 PM',
        asr: '04:07 PM',
        maghrib: '05:51 PM',
        isha: '07:07 PM',
      },
      '2024-03-05': {
        fajr: '05:07 AM',
        dhuhr: '12:08 PM',
        asr: '04:08 PM',
        maghrib: '05:52 PM',
        isha: '07:08 PM',
      },
      '2024-03-06': {
        fajr: '05:06 AM',
        dhuhr: '12:07 PM',
        asr: '04:09 PM',
        maghrib: '05:53 PM',
        isha: '07:09 PM',
      },
      '2024-03-07': {
        fajr: '05:04 AM',
        dhuhr: '12:07 PM',
        asr: '04:10 PM',
        maghrib: '05:55 PM',
        isha: '07:10 PM',
      },
      '2024-03-08': {
        fajr: '05:03 AM',
        dhuhr: '12:07 PM',
        asr: '04:11 PM',
        maghrib: '05:56 PM',
        isha: '07:11 PM',
      },
      '2024-03-09': {
        fajr: '06:03 AM',
        dhuhr: '01:07 PM',
        asr: '05:11 PM',
        maghrib: '06:56 PM',
        isha: '08:11 PM',
      },
      '2024-03-10': {
        fajr: '06:01 AM',
        dhuhr: '01:07 PM',
        asr: '05:12 PM',
        maghrib: '06:57 PM',
        isha: '08:12 PM',
      },
      '2024-03-11': {
        fajr: '05:59 AM',
        dhuhr: '01:06 PM',
        asr: '05:13 PM',
        maghrib: '06:58 PM',
        isha: '08:13 PM',
      },
      '2024-03-12': {
        fajr: '05:58 AM',
        dhuhr: '01:06 PM',
        asr: '05:14 PM',
        maghrib: '06:59 PM',
        isha: '08:14 PM',
      },
      '2024-03-13': {
        fajr: '05:56 AM',
        dhuhr: '01:06 PM',
        asr: '05:14 PM',
        maghrib: '07:00 PM',
        isha: '08:16 PM',
      },
      '2024-03-14': {
        fajr: '05:54 AM',
        dhuhr: '01:06 PM',
        asr: '05:15 PM',
        maghrib: '07:01 PM',
        isha: '08:17 PM',
      },
      '2024-03-15': {
        fajr: '05:53 AM',
        dhuhr: '01:05 PM',
        asr: '05:16 PM',
        maghrib: '07:02 PM',
        isha: '08:18 PM',
      },
      '2024-03-16': {
        fajr: '05:51 AM',
        dhuhr: '01:05 PM',
        asr: '05:17 PM',
        maghrib: '07:03 PM',
        isha: '08:19 PM',
      },
      '2024-03-17': {
        fajr: '05:49 AM',
        dhuhr: '01:05 PM',
        asr: '05:18 PM',
        maghrib: '07:04 PM',
        isha: '08:20 PM',
      },
      '2024-03-18': {
        fajr: '05:48 AM',
        dhuhr: '01:04 PM',
        asr: '05:19 PM',
        maghrib: '07:05 PM',
        isha: '08:21 PM',
      },
      '2024-03-19': {
        fajr: '05:46 AM',
        dhuhr: '01:04 PM',
        asr: '05:19 PM',
        maghrib: '07:07 PM',
        isha: '08:22 PM',
      },
      '2024-03-20': {
        fajr: '05:44 AM',
        dhuhr: '01:04 PM',
        asr: '05:20 PM',
        maghrib: '07:08 PM',
        isha: '08:24 PM',
      },
      '2024-03-21': {
        fajr: '05:42 AM',
        dhuhr: '01:04 PM',
        asr: '05:21 PM',
        maghrib: '07:09 PM',
        isha: '08:25 PM',
      },
      '2024-03-22': {
        fajr: '05:41 AM',
        dhuhr: '01:03 PM',
        asr: '05:22 PM',
        maghrib: '07:10 PM',
        isha: '08:26 PM',
      },
      '2024-03-23': {
        fajr: '05:39 AM',
        dhuhr: '01:03 PM',
        asr: '05:23 PM',
        maghrib: '07:11 PM',
        isha: '08:27 PM',
      },
      '2024-03-24': {
        fajr: '05:37 AM',
        dhuhr: '01:03 PM',
        asr: '05:23 PM',
        maghrib: '07:12 PM',
        isha: '08:28 PM',
      },
      '2024-03-25': {
        fajr: '05:35 AM',
        dhuhr: '01:02 PM',
        asr: '05:24 PM',
        maghrib: '07:13 PM',
        isha: '08:29 PM',
      },
      '2024-03-26': {
        fajr: '05:33 AM',
        dhuhr: '01:02 PM',
        asr: '05:25 PM',
        maghrib: '07:14 PM',
        isha: '08:31 PM',
      },
      '2024-03-27': {
        fajr: '05:32 AM',
        dhuhr: '01:02 PM',
        asr: '05:26 PM',
        maghrib: '07:15 PM',
        isha: '08:32 PM',
      },
      '2024-03-28': {
        fajr: '05:30 AM',
        dhuhr: '01:01 PM',
        asr: '05:27 PM',
        maghrib: '07:16 PM',
        isha: '08:33 PM',
      },
      '2024-03-29': {
        fajr: '05:28 AM',
        dhuhr: '01:01 PM',
        asr: '05:27 PM',
        maghrib: '07:17 PM',
        isha: '08:34 PM',
      }
    }
  }
};

export default function PrayerTimesPage() {
  const { city } = useParams();
  const cityName = city === 'los-angeles' ? 'Los Angeles' : 'New York City';
  const cityData = mockPrayerTimes[city as keyof typeof mockPrayerTimes];
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted to true after a brief delay to ensure initial state is invisible
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const [currentDate, setCurrentDate] = useState(() => {
    // Get current device date
    const now = new Date();
    
    // Convert to 2025 date for comparison
    const currentYear2025 = new Date(2025, now.getMonth(), now.getDate());
    
    // Ramadan 2025 date range
    const ramadanStart = new Date(2025, 2, 1); // March 1, 2025
    const ramadanEnd = new Date(2025, 2, 29); // March 29, 2025
    
    // If current date is before Ramadan, use start date
    if (currentYear2025 < ramadanStart) {
      return new Date(2024, 2, 1);
    }
    
    // If current date is after Ramadan, use end date
    if (currentYear2025 > ramadanEnd) {
      return new Date(2024, 2, 29);
    }
    
    // If current date is within Ramadan, use that date
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
    { date: '2024-03-29', weekday: 'Saturday' }
  ];

  // Get current date info
  const dateKey = `2024-03-${String(currentDate.getDate()).padStart(2, '0')}`;
  const currentDateInfo = dates.find(d => d.date === dateKey) || dates[0];
  
  const formattedDate = `${currentDateInfo.weekday}, ${new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric'
  }).format(currentDate)}`;

  // Get prayer times for current city and date
  const times = cityData.times[dateKey] || cityData.times[cityData.startDate];

  // Function to navigate to previous day
  const goToPreviousDay = () => {
    const prevDate = new Date(2024, 2, currentDate.getDate() - 1); // Stay in March
    if (prevDate.getDate() >= 1) {
      setCurrentDate(prevDate);
    }
  };

  // Function to navigate to next day
  const goToNextDay = () => {
    const nextDate = new Date(2024, 2, currentDate.getDate() + 1); // Stay in March
    if (nextDate.getDate() <= 29) {
      setCurrentDate(nextDate);
    }
  };

  // Calculate Ramadan day based on March 1st start date
  const getRamadanDay = (date: Date) => {
    return date.getDate(); // Since March 1st is Day 1, the date is the Ramadan day
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
              <p className="text-primary/90 text-[0.875rem] text-shadow">Ramadan Day {getRamadanDay(currentDate)}</p>
            </div>
            <button 
              onClick={goToNextDay}
              disabled={dateKey >= '2024-03-29'}
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