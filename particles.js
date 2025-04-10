/*
 * GAVIN: I've refactored this to use a Javascript class instead of a straight-up
 * object (or a function-as-a-class). This is the *much* preferred modern Javscript 
 * approach for doing this,
 * and interestingly enough, you'll find that pretty much the only difference is
 * in how it's instantiated. Calling methods uses the same syntax, but I renamed
 * them, too.
 * 
 * IMPORTANTLY, however, neither of these approaches is really optimal.
 * Storing each particle as each class (or, equivalently, an object with methods)
 * has a *lot* of overhead. Much more commonly, our approach when simulating a
 * bunch of equivalent particles is to create parallel arrays, so a list of all
 * their x positions, a list of all their y positions, etc., such that the ith
 * particle has x position xs[i], y position ys[i], etc.. This more "primitive"
 * approach typically results in better performance. Then, instead of each
 * particle having its own step and draw methods, we would have our own functions
 * to iterate over all of our particles with those operations. Just food for
 * thought! I don't know that this is what would fix the slowness of this
 * project.
 */
class Particle {
    constructor(x, y, dx, dy, particleColor) {
        this.x = px;
        this.y = py;
        this.dx = dx;
        this.dy = dy;
        this.age = 0;
        this.particleColor = particleColor;
        // stepfunction: particleStep,
        // drawFunction: particleDraw,
    }
    
    step() {
        this.age += 5;
        this.x += this.dx;
        this.y += this.dy;

        /*
         * TODO: GAVIN: this is fine, i guess. consider
         * this.age = Math.min(this.age, 255)
         */
        if (this.age > 255) {
            this.age = 255;
        }

        // controls the repeller of particles using mouseX & mouseY
        let dp = dist(this.x, this.y, mouseX, mouseY);
        if (dp < 1) dp = 1;

        /**
         * GAVIN: this line is confusing enough to warrant a comment, but if it
         * works, it works.
         */
        let f = (particleCount / Math.pow(dp, 2)) * 0.0025;
        let dirx = (this.x - mouseX) / dp;
        let diry = (this.y - mouseY) / dp;

        this.dx += f * dirx;
        this.dy += f * diry;

        if (this.x > width || this.x < 0) this.dx = -this.dx;
        if (this.y > height || this.y < 0) this.dy = -this.dy;
    }
    
    draw() {
        // draws the particles
        fill(
            // GAVIN: the reference seems to prefer these over direct access
            red(this.color),
            blue(this.color),
            green(this.color),
            255 - this.age
        );
        noStroke();
        ellipse(this.x, this.y, random(1, 5), random(1, 5));
    }
}

/**
 * TODO: GAVIN: This function is called checkParticles, but it also draws them.
 */
function checkParticles() {
    // checks if the particles are done
    let allParticlesDone = true;

    for (let i = 0; i < particles.length; i++) {
        particles[i].step();
        particles[i].draw();

        if (particles[i].age < 255) {
            allParticlesDone = false;
        }
    }

    // controls when a new image appears
    if (allParticlesDone) {
        /*
         * TODO: GAVIN: this is different from how you do essentially the same operation
         * in a few other places, but i think this is the better way. consider matching
         * the others to this.
         */
        /*
         * TODO: GAVIN: also, is this the function that should be responsible for this
         * increment?
         */
        IndexCounter = (IndexCounter + 1) % selfies.length;
        selfieSelection(IndexCounter);
    }
}
