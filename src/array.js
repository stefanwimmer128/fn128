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
                
                arr.each((val, i, arr) =>
                    void (ret = fn(val, i, arr))
                );
                
                return ret;
            },
        
        map: fn =>
            fn128.reduce((val, ret, i, arr) =>
                [ ...ret, fn(val, i, arr) ],
                []
            ),
        
        filter: fn =>
            fn128.reduce((val, ret, i, arr) =>
                fn(val, i, arr) ? [ ...ret, val ] : [],
                [],
            ),
        
        find: fn =>
            arr =>
                [ fn128.filter(fn)(arr)[0] ],
        
        reject: fn =>
            fn128.find(fn128.invert(fn)),
        
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
    };
}
