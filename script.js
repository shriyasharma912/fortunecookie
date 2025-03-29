const cookie = document.getElementById("cookie");
const fortuneText = document.getElementById("fortuneText");
const luckyNumber = document.getElementById("luckyNumber");
const shareBtn = document.getElementById("shareBtn");
const newFortuneBtn = document.getElementById("newFortuneBtn");

const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "Your hard work will pay off soon!",
    "Happiness is right around the corner.",
    "Adventure awaits you, embrace it!",
    "You will soon receive good news!",
    "A thrilling time is in your future.",
    "Your dreams are valid—keep chasing them!",
    "The universe is aligning in your favor.",
    "Something you lost will return in an unexpected way.",
    "Your future is bright… don't forget your sunglasses!",
    "A kind word you say today will make a difference tomorrow.",
    "What you seek is already within you.",
    "A side project will turn into something bigger!",
    "Don't be afraid to take that bold step!",
    "Someone special is thinking about you right now.",
    "Love is closer than you think—keep an open heart!",
    "Your love life is about to take an interesting turn!",
    "The next song you hear will reveal something about your love life.",
    "Love is a two-player game, and you're about to find your teammate!",
    "You will soon make an important decision… or just order pizza again.",
    "Your lucky number is… lost somewhere in your last math test.",
    "Don't take life too seriously—nobody makes it out alive anyway.",
    "Your phone knows too much about you. Be nice to it.",
    "The stars have a message for you… but they're typing really slow.",
    "The answer you seek is hidden in plain sight.",
    "Something you lost will be found in the last place you look. Obviously.",
    "Love is in the air… or is that just the smell of Cookies?",
    "The universe just winked at you. Wink back!",
    "Something amazing will happen when you least expect it… so stop expecting it!",
    "Your intuition is strong—trust it! Unless it tells you to text your ex.",
    "A fun adventure is coming soon… but first, a nap.",
    "The universe is giving you a thumbs up 👍!",
    "Your future holds... pizzas. Lots of pizzassss.",
    "A cat somewhere is silently judging you right now.",
    "Something you lost will magically reappear… probably under your bed.",
    "Love is like a WiFi signal—strongest when you're close.",
    "Your fortune was stolen by a mischievous raccoon. Try again later!",
    "Beware of the next Monday—it's closer than it appears.",
    "The road to success is under construction, expect delays.",
    "You’ll soon discover something amazing… like your lost socks.",
    "Your kindness will lead you to great success."
];

// Trigger confetti
function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Cookie click event
function handleClick() {
    // Remove event listener after first click
    cookie.removeEventListener("click", handleClick);

    // Add clicked effect to cookie
    cookie.classList.add("clicked");

    // Show fortune after delay
    setTimeout(() => {
        let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        let luckyNum = Math.floor(Math.random() * 100);

        fortuneText.textContent = `🔮 ${randomFortune}`;
        luckyNumber.textContent = `🍀 Lucky Number: ${luckyNum}`;
        
        fortuneText.style.display = "block";
        luckyNumber.style.display = "block";
        shareBtn.style.display = "inline-block";
        newFortuneBtn.style.display = "inline-block";
        showConfetti();  // Trigger confetti effect
    }, 1000);
}

cookie.addEventListener("click", handleClick);

// New fortune button
newFortuneBtn.addEventListener("click", function () {
    fortuneText.textContent = "Sorry, you can only have one fortune... or can you?";
    luckyNumber.style.display = "none";
    shareBtn.style.display = "none";
    newFortuneBtn.style.display = "none";
    fortuneText.style.display = "block";
});

// Share with friends button
shareBtn.addEventListener("click", function () {
    let pageUrl = window.location.href; // Get current page URL
    let text = `Check out my fortune! \n${fortuneText.textContent} \n🍀 ${luckyNumber.textContent} \n\n#FortuneCookieFun`;
    let shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(pageUrl)}`;
    window.open(shareLink, '_blank');  // Share on WhatsApp
});
