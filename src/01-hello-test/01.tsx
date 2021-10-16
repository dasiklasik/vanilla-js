export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}


const sentense = 'Hello my friends';

export const SplitIntoWords = (sentense: string) => {
    return sentense.toLowerCase().split(' ');
}