// Define an interface for OHLCV data
interface OHLCV {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

// Import fs module to read JSON file
import * as fs from 'fs';

// Create a class to handle OHLCV data
class OHLCVData {
    private data: OHLCV[] = [];

    // Load data from JSON file
    constructor(filePath: string) {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        this.data = JSON.parse(rawData);
    }

    // Method to fetch data for a specific range
    getDataRange(startIndex: number, endIndex: number): OHLCV[] {
        return this.data.slice(startIndex, endIndex + 1);
    }

    // Method to fetch data for a specific time period
    getDataForPeriod(period: number): OHLCV[] {
        return this.data.slice(-period);
    }

   
}

// Usage
const ohlcvData = new OHLCVData('data.json');

// Fetch data for a specific range
const rangeData = ohlcvData.getDataRange(0, 99);

// Fetch data for a specific time period
const periodData = ohlcvData.getDataForPeriod(30);

// Fetch data for a specific symbol

