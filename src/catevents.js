document.querySelector('#egg')
    .addEventListener('click', function () {

        console.log(this.isSpinning);
        if(this.isSpinning != true) {
            this.isSpinning = true;
            this.emit('spinPls');
        } else {
            this.isSpinning = false;
            this.emit('stopSpinningPls');
        }
    });

document.querySelector('#gradientBox')
    .addEventListener('click', function () {
        console.log("ur petting a cat cube");
        console.log(this.isSpinning);
        if(this.isSpinning != true) {
            this.isSpinning = true;
            this.emit('spinPlsBox');
        } else {
            this.isSpinning = false;
            this.emit('stopSpinningPlsBox');
        }
    });


document.querySelector('#cat')
    .addEventListener('mouseenter', function () {
        console.log('You looked at the cat!');
    })
    .addEventListener('mouseleave', function() {
        console.log('You looked away from the cat :(');
    });

function meow() {
}

(function randomizeMeowInterval() {
    var randTime = Math.round(Math.random() * (10000)) + 2000;
    setTimeout(function() {
        meow();
        randomizeMeowInterval();
    }, randTime);
}());