const card = document.getElementById('card');
        const flipButton = document.getElementById('flip-button');
        const flipBackButton = document.getElementById('flip-back');

        flipButton.addEventListener('click', () => {
            card.classList.add('flipped');
        });

        flipBackButton.addEventListener('click', () => {
            card.classList.remove('flipped');

        });
        function toggleFlip() {
        const card = document.getElementById("flip-button");
        card.classList.toggle("flipped");
}
