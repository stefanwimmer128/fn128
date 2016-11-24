/**
 * Created on 15.11.16 at 22:03
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

const fn128 = {};

import core from "./core";
Object.assign(fn128, core(fn128));

import fn from "./fn";
Object.assign(fn128, fn(fn128));

import array from "./array";
Object.assign(fn128, array(fn128));

import debug from "./debug";
Object.assign(fn128, debug(fn128));

import generator from "./generator";
Object.assign(fn128, generator(fn128));

export default fn128;
