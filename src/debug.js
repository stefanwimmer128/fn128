/**
 * Created on 16.11.16 at 10:18
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

export default function debug(fn128)
{
    return {
        timeout: (time, data = null) =>
            new Promise(resolve =>
                setTimeout(resolve.bind(null, data), time)
            ),
    };
}
