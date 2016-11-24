/**
 * Created on 15.11.16 at 22:30
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

export default function array(fn128)
{
    return {
        each: fn =>
            arr =>
            {
                for (const i in arr)
                    fn(arr[i], i, arr)
            },
        
        reduce: (fn, start_pre) =>
            (arr, start = start_pre) =>
            {
                let ret = start;
                
                fn128.each((val, i, arr) =>
                    void (ret = fn(val, ret, i, arr))
                )(arr);
                
                return ret;
            },
        
        map: fn =>
            fn128.reduce((val, ret, i, arr) =>
                [ ...ret, fn(val, i, arr) ],
                []
            ),
        
        filter: fn =>
            fn128.reduce((val, ret, i, arr) =>
                fn(val, i, arr) ? [ ...ret, val ] : ret,
                [],
            ),
        
        find: fn =>
            arr =>
            {
                const ret = fn128.filter(fn)(arr)[0];
                
                return typeof ret === "undefined" ? [] : [ ret ];
            },
        
        reject: fn =>
            fn128.filter(fn128.invert(fn)),
        
        some: fn =>
            fn128.reduce((val, ret, i, arr) =>
                ! ret ? fn(val, i, arr) : ret,
                false
            ),
        
        every: fn =>
            fn128.reduce((val, ret, i, arr) =>
                ret ? fn(val, i, arr) : ret,
                true
            ),
        
        shuffle: arr =>
        {
            const ret = [ ...arr ];
            
            for (let i = 0; i < ret.length - 2; i++)
            {
                const j = (Math.random() * ( ret.length - i ) | 0) + i;
                
                [ ret[i], ret[j] ] = [ ret[j], ret[i] ];
            }
            
            return ret;
        },
        
        sort: fn =>
            arr =>
            {
                if (arr.length <= 1)
                    return arr;
                
                let ret = 0;
                for (let i = 1; i < arr.length; i++)
                    if (fn(arr[ret], arr[i]) > 0)
                        ret = i;
                
                const next = [];
                for (let i = 0; i < arr.length; i++)
                    if (i !== ret)
                        next.push(arr[i]);
                
                return [ arr[ret], ...fn128.sort(fn)(next) ];
            },
    };
}
