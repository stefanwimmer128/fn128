/**
 * Created on 15.11.16 at 22:03
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import pkg from "../package.json";

const fn128 = {
    get version()
    {
        return pkg.version;
    },
    
    extend: extend =>
        Object.assign(fn128, extend),
};

import fn from "./fn";
Object.assign(fn128, fn(fn128));

import array from "./array";
Object.assign(fn128, array(fn128));

import debug from "./debug";
Object.assign(fn128, debug(fn128));

export default fn128;
