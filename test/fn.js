/**
 * Created on 16.11.16 at 14:59
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function invert(test)
{
    test.ok(fn128.invert(() => false)());
    test.ok(! fn128.invert(() => true)());
    
    test.done();
}
