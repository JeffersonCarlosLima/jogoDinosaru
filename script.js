const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let position = 0;
let inJump = false;

function handKeySpaceUP(event) {
    if (event.keyCode === 32) {
        if (!inJump) {
            jumpDino()
        }
    }
}

function jumpDino() {
    inJump = true;
    let upInterval = setInterval(() => {
        if (position >= 200) {

            clearInterval(upInterval);

            let downIntervalDino = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downIntervalDino);
                    inJump = false;
                } else {

                    position -= 20;
                    dino.style.bottom = position + 'px';

                }
            }, 30);

        } else {

            position += 20;
            dino.style.bottom = position + 'px';

        }
    }, 20);

}

function generateCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000; // Alterado para let
    const randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);

    let runCactus = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(runCactus);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60  &&  position < 60) {   

            clearInterval(runCactus);
            document.body.innerHTML = '<h1 class="gameOver">Fim de Game</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(generateCactus, randomTime);
}

generateCactus();
document.addEventListener('keyup', handKeySpaceUP);