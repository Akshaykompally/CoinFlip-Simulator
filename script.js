document.getElementById("click").addEventListener("click", flipCoin);

function flipCoin() {
    const coin = document.getElementById("twosides");
    const resultText = document.getElementById("result");
    let flipCount = 5;

    // Reset result text
    resultText.textContent = '';

    // Start flipping the coin
    const interval = setInterval(() => {
        // Rotate the coin
        coin.style.transform = `rotateY(${Math.random() * 360}deg)`;

        flipCount--;

        // Stop flipping after 5 flips
        if (flipCount <= 0) {
            clearInterval(interval);

            // Determine the final result after 5 flips
            const finalResult = Math.random() < 0.5 ? "Heads" : "Tails";
            resultText.textContent = finalResult;

            // Ensure coin ends on the right face
            coin.style.transform = finalResult === "Heads" ? "rotateY(0deg)" : "rotateY(180deg)";
        }
    }, 200); // Adjust the speed of the flip
}
