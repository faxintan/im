import { IM } from '../src/index';
import { Test } from './libs/test';

describe('InstantMessaging Class Test', () => {
    const im = new IM();
    const mTest = new Test();
    const optsTest = { name: 'test' };

    test('registry', () => {
        expect(im.registry('test', mTest, optsTest)).toBe(true);
    });

    test('send', async () => {
        expect.assertions(1);
        await expect(im.send('test/getOptions')).resolves.toBe(optsTest);
    });

    test('getModule', () => {
        expect(im.getModule('test')).toBe(mTest);
    });

    test('unregistry', () => {
        expect(im.unregistry('test')).toBe(true);
        expect(im.getModule('test')).toBeUndefined();
    });
});