/**
 * Created on 16.11.16 at 14:58
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function version(test)
{
    test.strictEqual(fn128.version, require("../package.json").version);
    
    test.done();
}
