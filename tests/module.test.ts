import { IM } from '../src/index';
import { Test } from './libs/test';
import { Report } from './libs/Report';

describe('Module Class Init Test', () => {
    const im = new IM();
    const mTest = new Test();
    const mReport = new Report();
    const optsTest = { name: 'test' };

    // report rely test's options，so it will send request to test to get it's options
    test('rely module to init', (done) => {
        expect.assertions(3)

        // registry report before test
        expect(im.registry('report', mReport)).toBe(true);
        expect(im.registry('test', mTest, optsTest)).toBe(true);

        setTimeout(() => {
            expect(mReport.getOptions()).toBe(optsTest);
            done();
        }, 0);
    });
});