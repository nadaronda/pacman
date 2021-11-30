let pacmanMap = [
"WWWWWWWWWWWWWWWWWWWWWWWWWWWW",
"W............WW............W",
"W.WWWW.WWWWW.WW.WWWWW.WWWW.W",
"W*WWWW.WWWWW.WW.WWWWW.WWWW*W",
"W.WWWW.WWWWW.WW.WWWWW.WWWW.W",
"W..........................W",
"W.WWWW.WW.WWWWWWWW.WW.WWWW.W",
"W.WWWW.WW.WWWWWWWW.WW.WWWW.W",
"W......WW....WW....WW......W",
"WWWWWW.WWWWW.WW.WWWWW.WWWWWW",
"WWWWWW.WWWWW.WW.WWWWW.WWWWWW",
"WWWWWW.WW..........WW.WWWWWW",
"WWWWWW.WW.WWW--WWW.WW.WWWWWW",
"WWWWWW.WW.WooooooW.WW.WWWWWW",
"..........WooooooW..........",
"WWWWWW.WW.WooooooW.WW.WWWWWW",
"WWWWWW.WW.WWWWWWWW.WW.WWWWWW",
"WWWWWW.WW..........WW.WWWWWW",
"WWWWWW.WW.WWWWWWWW.WW.WWWWWW",
"WWWWWW.WW.WWWWWWWW.WW.WWWWWW",
"W............WW............W",
"W.WWWW.WWWWW.WW.WWWWW.WWWW.W",
"W*WWWW.WWWWW.WW.WWWWW.WWWW*W",
"W...WW................WW...W",
"WWW.WW.WW.WWWWWWWW.WW.WW.WWW",
"WWW.WW.WW.WWWWWWWW.WW.WW.WWW",
"W......WW....WW....WW......W",
"W.WWWWWWWWWW.WW.WWWWWWWWWW.W",
"W.WWWWWWWWWW.WW.WWWWWWWWWW.W",
"W..........................W",
"WWWWWWWWWWWWWWWWWWWWWWWWWWWW",
].map((f) => f.split(""));

console.log(pacmanMap);
/*pacmanMap.forEach(element => {
    console.log(element);
    let letras = element.split("");
    console.log(letras);
    return letras;
});*/ //asi consigo separar todas las letras de las columnas

/*ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI);
ctx.stroke();*/
/*ctx.fillStyle="green";
ctx.fillRect(10, 10, 10, 10);*/
class Map {
    constructor(ctx) {
        this.ctx=ctx;
    }
    update() { }
    keyboard_event() { }
    draw(ctx) {
        let total_ratio=502 / level.length;
        let spacing = total_ratio;
        let size = total_ratio;
        ctx.save();
        ctx.translate(50, 0);
        for (let x = 0; x < level.length; x++) {
            for (let y= 0; y < level[x].length; y++) {
                ctx.beginPath();
                if (level[x][y]=="W") {
                    ctx.rect(y*spacing, x*spacing, size, size);
                };
                if (level[x][y]==".") {
                    ctx.arc(y * spacing + size/2 , x * spacing + size/2 , 5 ,0 , 2 * Math.PI);
                };   
             ctx.closePath();
             ctx.fill();
             ctx.stroke();
            }
           ctx.restore();
        }
    }
}
