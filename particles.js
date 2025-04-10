function particleStep() {
    // controls aging
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

    let f = (particleCount / Math.pow(dp, 2)) * 0.0025;
    let dirx = (this.x - mouseX) / dp;
    let diry = (this.y - mouseY) / dp;

    this.dx += f * dirx;
    this.dy += f * diry;

    if (this.x > width || this.x < 0) this.dx = -this.dx;
    if (this.y > height || this.y < 0) this.dy = -this.dy;
}

function particleDraw() {
    // draws the particles
    fill(
        this.color.levels[0],
        this.color.levels[1],
        this.color.levels[2],
        255 - this.age
    );
    noStroke();
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
}

// particle object
function makeParticle(px, py, pdx, pdy, particleColor) {
    return {
        x: px,
        y: py,
        dx: pdx,
        dy: pdy,
        age: 0,
        color: particleColor,
        stepfunction: particleStep,
        drawFunction: particleDraw,
    };
}

function checkParticles() {
    // checks if the particles are done
    let allParticlesDone = true;

    for (let i = 0; i < particles.length; i++) {
        particles[i].stepfunction();
        particles[i].drawFunction();

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
        IndexCounter = (IndexCounter + 1) % selfies.length;
        selfieSelection(IndexCounter);
    }
}
