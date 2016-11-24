/**
 * Created on 24.11.16 at 14:20
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

export default function core(fn128)
{
    return {
        get version()
        {
            return "${version}";
        },
        
        extend(extend)
        {
            for (const key in extend)
                if (extend.hasOwnProperty(key) && typeof fn128[key] === "undefined")
                    fn128[key] = extend[key];
            
            return fn128;
        },
    };
}
