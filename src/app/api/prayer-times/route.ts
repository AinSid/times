import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  const csvFiles: { [key: string]: string } = {
    'los-angeles': 'prayer-times-data - LA.csv',
    'new-york': 'prayer-times-data - NYC.csv',
    'austin': 'prayer-times-data - AUSTIN.csv',
    'philadelphia': 'prayer-times-data - PHL.csv',
    'san-francisco': 'prayer-times-data - SF.csv',
    'seattle': 'prayer-times-data - SEA.csv',
    'karachi': 'prayer-times-data - KHI.csv',
    'dhaka': 'prayer-times-data - DHAKA.csv'
  };

  const fileName = csvFiles[city];
  if (!fileName) {
    return NextResponse.json({ error: 'Invalid city' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    
    // Skip header rows
    const dataLines = lines.slice(2);
    
    const times: { [key: string]: any } = {};
    
    dataLines.forEach(line => {
      if (!line.trim()) return;
      
      const [day, , , fajr, dhuhr, asr, maghrib, isha] = line.split(',');
      const date = `2024-03-${day.padStart(2, '0')}`;
      
      times[date] = {
        fajr: fajr.trim(),
        dhuhr: dhuhr.trim(),
        asr: asr.trim(),
        maghrib: maghrib.trim(),
        isha: isha.trim()
      };
    });
    
    return NextResponse.json({
      startDate: '2024-03-01',
      times
    });
  } catch (error) {
    console.error(`Error reading prayer times for ${city}:`, error);
    return NextResponse.json({ error: 'Failed to read prayer times' }, { status: 500 });
  }
} 