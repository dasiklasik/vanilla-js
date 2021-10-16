import {multiply, SplitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})


test('sum should be correct', () => {


    let result1 = sum(a, b);
    let result2 = sum(b, c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('myltiply should be correct', () => {

    let result1 = multiply(a, b);
    let result2 = multiply(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting in to words should be correct', () => {
    let sen1 = 'Hello my friend';
    let sen2 = 'JS is programming language';

    const result3 = SplitIntoWords(sen1);
    const result4 = SplitIntoWords(sen2);

    expect(result3.length).toBe(3);
    expect(result3[0]).toBe('hello');
    expect(result3[1]).toBe('my');
    expect(result3[2]).toBe('friend');

    expect(result4.length).toBe(4);
    expect(result4[0]).toBe('js');
    expect(result4[1]).toBe('is');
    expect(result4[2]).toBe('programming');
    expect(result4[3]).toBe('language');
})