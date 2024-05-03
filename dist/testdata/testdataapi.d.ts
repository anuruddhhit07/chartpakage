export interface OHLCV {
    id: number;
    ticker: string;
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
declare class TESTOHLCVDATA {
    private data;
    constructor();
    getDataRange(startIndex: number, endIndex: number): OHLCV[];
    getDataForPeriod(period: number): OHLCV[];
}
export default TESTOHLCVDATA;
