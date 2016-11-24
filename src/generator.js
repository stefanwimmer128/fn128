/**
 * Created on 24.11.16 at 14:36
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

export default function generator(fn128)
{
    return {
        resolve(generator)
        {
            const itr = generator();
            
            (function resolve({ done, value, })
            {
                if (! done)
                    value.then(value =>
                        resolve(itr.next(value))
                    );
            })(itr.next());
        },
    };
}
