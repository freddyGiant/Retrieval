/*
 * TODO: GAVIN: consider consolidating this into sketch.js. it's not too long.
 * there are also several other ways to do this. for instance, maybe instead of
 * having a `push` on each separate line, you could
 *  - read from an existing list of image filenames
 *  - programmatically load everything in the images folder (this won't preserve
 *    order, so it's probably not what you want.)
 * and there are many other ways to do this. I want to stress though, that this
 * way of doing it is also fine and correct and that
 * some programmers would be disgusted by this, while others would actually
 * prefer it. The programmatic ways might be a little more agreeable, though.
 * 
 * IMPORTANTLY THOUGH: I changed this code to use relative paths instead of an
 * absolute url (which p5's loadImage supports either way). This simple change 
 * means this code will work independently of what IP it's being hosted on
 * (given the path to the images is what it's expecting. Whether this would
 * work with everything moved into a subdirectory remains to be seen through
 * experimentation (i'm not sure how clever loadImage is)).
 */
function pictures(){
    selfies.push({ img: loadImage("/images/babypic1.png") });
    selfies.push({ img: loadImage("/images/babypic2.jpg") });
    selfies.push({ img: loadImage("/images/babypic3.jpg") })
    selfies.push({ img: loadImage("/images/13yrpic.jpg") });
    selfies.push({ img: loadImage("/images/14yrpic.png") });
    selfies.push({ img: loadImage("/images/15yrpic.jpg") });
    selfies.push({ img: loadImage("/images/17yrpic.jpg") });
    selfies.push({ img: loadImage("/images/18yrpic.jpg") });
    selfies.push({ img: loadImage("/images/20yrpic.jpg") });
    selfies.push({ img: loadImage("/images/birthdaycake.jpg") });
}
