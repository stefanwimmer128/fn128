/**
 * Created on 15.11.16 at 22:52
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

export default function fn(fn128)
{
    return {
        invert: fn =>
            (...args) =>
                ! fn(...args),
    };
}
