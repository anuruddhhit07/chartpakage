
import {ohlcdata} from "./testOHLC"

export interface OHLCV {
	id:number,
	ticker:string,
	timestamp:number,
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}


// Create a class to handle OHLCV data
class TESTOHLCVDATA {
    private data 

    // Load data from JSON file
    constructor() {
        this.data = ohlcdata;
    }

    // Method to fetch data for a specific range
    getDataRange(startIndex: number, endIndex: number): OHLCV[] {
        return this.data.slice(startIndex, endIndex + 1);
    }

    // Method to fetch data for a specific time period
    getDataForPeriod(period: number): OHLCV[] {
        return this.data.slice(-period);
    }

    // Method to fetch data for a specific symbol
   
}

export default TESTOHLCVDATA

// // Usage

// const ohlcvData = new OHLCVData();

// // Fetch data for a specific range
// const rangeData = ohlcvData.getDataRange(0, 99);

// // Fetch data for a specific time period
// const periodData = ohlcvData.getDataForPeriod(30);


