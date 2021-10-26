import {people} from "./5-map";
import {helloWords} from "./5-map";

test('should work', () => {
    let messages = helloWords(people);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello, Dasha Samsonovich!')
    expect(messages[1]).toBe('Hello, Sasha Alex!')
    expect(messages[2]).toBe('Hello, Vala Hala!')
})