/*
 * TODO: GAVIN: consider consolidating this into sketch.js. it's not too long.
 * there are also several other ways to do this. for instance, maybe instead of
 * having a `push` on each separate line, you could
 *  - read from an existing list of image urls
 *  - read from an existing list of image filenames, and programmatically 
 *    construct the urls, since a significant amount of each url is repeated 
 *    (and, more importantly, this could be running on any url beside
 *    `localhost`, or hosted on a different port, and should account for that.
 *    I'll leave figuring out how to load resources at relative locations (not 
 *    having to specify a hard-coded constant) as an exercise for you though.)
 *  - programmatically load everything in the images folder (this won't preserve
 *    order, so it's probably not what you want.)
 * and there are many other ways to do this. I want to stress though, that this
 * way of doing it is also fine and correct (with the exception of the URL issue,
 * for instance `localhost` on my machine points at `127.0.0.1`, but this isn't
 * true of all machines, and there could be a situtation where a user opens it
 * directly on `127.0.0.1`, but then these loadImages don't resolve) and that
 * some programmers would be disgusted by this, while others would actually
 * prefer it. The programmatic ways might be a little more agreeable, though.
 */
function pictures(){
    selfies.push({ img: loadImage("http://localhost:8000/images/babypic1.png") });
    selfies.push({ img: loadImage("http://localhost:8000/images/babypic2.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/babypic3.jpg") })
    selfies.push({ img: loadImage("http://localhost:8000/images/13yrpic.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/14yrpic.png") });
    selfies.push({ img: loadImage("http://localhost:8000/images/15yrpic.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/17yrpic.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/18yrpic.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/20yrpic.jpg") });
    selfies.push({ img: loadImage("http://localhost:8000/images/birthdaycake.jpg") });
}
