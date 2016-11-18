/**
 * Created on 16.11.16 at 15:00
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function map(test)
{
    test.deepEqual(fn128.map(x => x + 1)([ 0, 1, 2, 3 ]), [ 1, 2, 3, 4 ]);
    test.deepEqual(fn128.map(x => x.id)([ { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 } ]), [ 0, 1, 2, 3 ]);
    
    test.done();
}

export function find(test)
{
    test.deepEqual(fn128.find(x => x >= 2)([ 0, 1, 2, 3 ]), [ 2 ]);
    test.deepEqual(fn128.find(x => x >= 4)([ 0, 1, 2, 3 ]), []);
    
    test.done();
}

export function reject(test)
{
    test.deepEqual(fn128.reject(x => x < 2)([ 0, 1, 2, 3 ]), [ 2, 3 ]);
    test.deepEqual(fn128.reject(x => x >= 2)([ 0, 1, 2, 3 ]), [ 0, 1 ]);
    
    test.done();
}

export function some(test)
{
    test.ok(fn128.some(x => x)([ false, true, false, false ]));
    test.ok(! fn128.some(x => x)([ false, false, false, false ]));
    
    test.done();
}

export function every(test)
{
    test.ok(fn128.every(x => x)([ true, true, true, true ]));
    test.ok(! fn128.every(x => x)([ true, true, false, true ]));
    
    test.done();
}

export function shuffle(test)
{
    const shuffle = [];
    for (let i = 0; i < 16; i++)
        shuffle.push(i);
    
    test.notDeepEqual(fn128.shuffle(shuffle), shuffle);
    
    test.done();
}

export function sort(test)
{
    const sort = [];
    for (let i = 0; i < 16; i++)
        sort.push(i);
    
    const shuffle = fn128.shuffle(sort);
    
    test.deepEqual(fn128.sort((a, b) => a - b)(shuffle), sort);
    
    test.done();
}
