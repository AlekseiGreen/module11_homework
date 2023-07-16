import {reform} from './index.js';


describe('test for reform C => F', ()=> {
    it('answer 0С => 32F', ()=> {
        expect(reform(0)).toBe(32);
    });
    it('answer 10С => 50F', ()=> {
        expect(reform(10)).toBe(50);
    });
    it('answer -15С => 5F', ()=> {
        expect(reform(-15)).toBe(5);
    });
});