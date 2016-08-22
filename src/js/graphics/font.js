var defs = {
    a: matrix([
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,0,1]
    ]),
    b: matrix([
        [1,1,1],
        [1,0,1],
        [1,1,0],
        [1,0,1],
        [1,1,1]
    ]),
    c: matrix([
        [1,1,1],
        [1,0,0],
        [1,0,0],
        [1,0,0],
        [1,1,1]
    ]),
    d: matrix([
        [1,1,0],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,1,1]
    ]),
    e: matrix([
        [1,1,1],
        [1,0,0],
        [1,1,0],
        [1,0,0],
        [1,1,1]
    ]),
    f: matrix([
        [1,1,1],
        [1,0,0],
        [1,1,0],
        [1,0,0],
        [1,0,0]
    ]),
    g: matrix([
        [1,1,1],
        [1,0,0],
        [1,0,0],
        [1,0,1],
        [1,1,1]
    ]),
    h: matrix([
        [1,0,1],
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,0,1]
    ]),
    i: matrix([
        [1,1,1],
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [1,1,1]
    ]),
    /*j: [
        [0,0,1],
        [0,0,1],
        [0,0,1],
        [1,0,1],
        [1,1,1]
    ],*/
    k: matrix([
        [1,0,1],
        [1,0,1],
        [1,1,0],
        [1,0,1],
        [1,0,1]
    ]),
    l: matrix([
        [1,0,0],
        [1,0,0],
        [1,0,0],
        [1,0,0],
        [1,1,1]
    ]),
    m: matrix([
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,0,1],
        [1,0,1]
    ]),
    n: matrix([
        [1,1,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,0,1]
    ]),
    o: matrix([
        [1,1,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,1,1]
    ]),
    p: matrix([
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [1,0,0],
        [1,0,0]
    ]),
    r: matrix([
        [1,1,1],
        [1,0,1],
        [1,1,0],
        [1,0,1],
        [1,0,1]
    ]),
    s: matrix([
        [1,1,1],
        [1,0,0],
        [1,1,1],
        [0,0,1],
        [1,1,1]
    ]),
    t: matrix([
        [1,1,1],
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [0,1,0]
    ]),
    u: matrix([
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,1,1]
    ]),
    v: matrix([
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [0,1,0]
    ]),
    w: matrix([
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [0,1,0,1,0]
    ]),
    x: matrix([
        [1,0,1],
        [1,0,1],
        [0,1,0],
        [1,0,1],
        [1,0,1]
    ]),
    y: matrix([
        [1,0,1],
        [1,0,1],
        [1,1,1],
        [0,1,0],
        [0,1,0]
    ]),
    /*'\'': matrix([
        [1]
    ]),*/
    /*'.': matrix([
        [0],
        [0],
        [0],
        [0],
        [1]
    ]),*/
    ' ': matrix([
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0]
    ]),
    '-': [
        [0,0],
        [0,0],
        [1,1],
        [0,0],
        [0,0]
    ],
    ':': matrix([
        [0],
        [1],
        [ ],
        [1],
        [ ]
    ]),
    '?': matrix([
        [1,1,1],
        [1,1,1],
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ]),
    '!': matrix([
        [0,1,0,1,0],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [0,0,1,0,0]
    ]),
    '/': matrix([
        [0,0,1],
        [0,0,1],
        [0,1,0],
        [1,0,0],
        [1,0,0]
    ]),
    '1': matrix([
        [1,1,0],
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [1,1,1]
    ]),
    '2': matrix([
        [1,1,1],
        [0,0,1],
        [1,1,1],
        [1,0,0],
        [1,1,1]
    ]),
    '3': matrix([
        [1,1,1],
        [0,0,1],
        [0,1,1],
        [0,0,1],
        [1,1,1]
    ]),
    '4': matrix([
        [1,0,0],
        [1,0,0],
        [1,0,1],
        [1,1,1],
        [0,0,1]
    ]),
    '5': matrix([
        [1,1,1],
        [1,0,0],
        [1,1,0],
        [0,0,1],
        [1,1,0]
    ]),
    '6': matrix([
        [1,1,1],
        [1,0,0],
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]),
    '7': matrix([
        [1,1,1],
        [0,0,1],
        [0,1,0],
        [0,1,0],
        [0,1,0]
    ]),
    '8': matrix([
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]),
    '9': matrix([
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [0,0,1],
        [1,1,1]
    ]),
    '0': matrix([
        [1,1,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,1,1]
    ]),
    '(': matrix([
        [0,1],
        [1],
        [1],
        [1],
        [0,1]
    ]),
    ')': matrix([
        [1, 0],
        [0, 1],
        [0, 1],
        [0, 1],
        [1]
    ])
};

function drawText(r, t, x, y, s, c){
    r.fillStyle = c;

    for(var i = 0 ; i < t.length ; i++){
        var def = defs[t.charAt(i)];

        for(var row = 0 ; row < def.length ; row++){
            for(var col = 0 ; col < def[row].length ; col++){
                if(def[row][col]){
                    r.fillRect(x + col * s, y + row * s, s, s);
                }
            }
        }

        x += def[0].length * s + s;
    }
}

function requiredCells(t, s){
    var r = 0;
    for(var i = 0 ; i < t.length ; i++){
        r += defs[t.charAt(i)][0].length + 1;
    }
    return r - 1;
}

function button(t){
    return cache(440, 100, function(c, r){
        r.fillStyle = '#444';
        r.fillRect(0, 90, 440, 10);

        r.fillStyle = '#fff';
        r.fillRect(0, 0, 440, 90);

        drawText(r, '::' + t + '()', 100, 20, 10, '#000');

        r.beginPath();
        r.moveTo(40, 20);
        r.lineTo(80, 45);
        r.lineTo(40, 70);
        r.fill();
    });
}
