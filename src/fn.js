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
        
        curry: fn =>
            function curry(arg, args = [])
            {
                args.push(arg);
                
                if (args.length === fn.length)
                    return fn(...args);
                
                return arg =>
                    curry(arg, args);
            },
        
        uncurry: fn =>
            (...args) =>
            {
                let ret = fn;
                
                for (const arg of args)
                    ret = ret(arg);
                
                return ret;
            },
    };
}
