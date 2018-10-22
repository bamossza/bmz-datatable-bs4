import {interval, Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {v4} from 'uuid';

export class BmzUtils {

    constructor() {
    }

    static strToLower(str: string): string {
        return typeof str === 'string' ? str.toLowerCase() : str;
    }

    static strToUpper(str: string): string {
        return typeof str === 'string' ? str.toUpperCase() : str;
    }

    static trim(str: string): string {
        return typeof str === 'string' ? str.replace(/^\s+|\s+$/gm, '') : str;
    }

    static whatTime(): Observable<Date> {
        return interval(1000).pipe(map(() => new Date())).pipe(share());
    }

    static strPadRight(str: string, maxLength: number, fillString: string): string {
        return typeof str === 'string' ? str.padEnd(maxLength, fillString) : str;
    }

    static PI(): number {
        return 3.141592653589793;
    }

    static abs(number: number): number {
        return typeof number === 'number' ? Math.abs(number) : 0;
    }

    static uuidv4(): string {
        return v4();
    }

    static mergeArray(arrMain: Array<any>, arrMerge: Array<any>): Array<any> {
        return [...arrMain, ...arrMerge];
    }

    static sumValueArray(numArr: Array<number>): number {
        return numArr.reduce((s, n) => s + n);
    }

    static sstrPadLeft(str: string, maxLength: number, fillString: string): string {
        return typeof str === 'string' ? str.padStart(maxLength, fillString) : str;
    }
}
