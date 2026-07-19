document.addEventListener("DOMContentLoaded", () => {
    // Screen 1: Terminal Log Transitions
    setTimeout(() => document.getElementById('log1').classList.remove('hidden'), 1000);
    setTimeout(() => document.getElementById('log2').classList.remove('hidden'), 2200);
    setTimeout(() => document.getElementById('log3').classList.remove('hidden'), 3500);
    setTimeout(() => document.getElementById('log4').classList.remove('hidden'), 4800);
    
    setTimeout(() => {
        document.getElementById('promptText').classList.remove('hidden');
    }, 5800);

    setTimeout(() => {
        document.getElementById('screen1').classList.add('hidden');
        document.getElementById('screen2').classList.remove('hidden');
    }, 9500);

    // Button Click - Bloom Rose & Hearts
    const bloomBtn = document.getElementById('bloomBtn');
    bloomBtn.addEventListener('click', (e) => {
        for(let i=0; i<12; i++) {
            createHeart(e.clientX, e.clientY);
        }

        setTimeout(() => {
            document.getElementById('screen2').classList.add('hidden');
            document.getElementById('screen3').classList.remove('hidden');
            
            setTimeout(() => {
                document.getElementById('stem').classList.add('grow');
                document.getElementById('petal').classList.add('bloom');
            }, 200);
        }, 600);
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = ['♥', '💖', '🌸', '✨'][Math.floor(Math.random() * 4)];
        heart.style.left = (x + (Math.random() * 80 - 40)) + 'px';
        heart.style.top = (y + (Math.random() * 80 - 40)) + 'px';
        heart.style.fontSize = (Math.random() * 10 + 16) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 2500);
    }

    // Realistic Long Letter Content
    const letterToKainat = `Kuch log kehte hain ke coding me koi emotions nahi hote, bas rukhe-sukhe logic hote hain... Lekin jab se tum meri zindagi me aayi ho, mere har code ka matlab badal gaya hai. \n\nKainat, tum bilkul apne naam ki tarah ho—meri poori duniya, jisme har ek sitara tumhari muskurahat se chamakta hai. Agar main koi program likhoon, to uski sab se khoobsurat line tum ho. Agar main koi web page design karoon, to uski saari raunaq tumse hai. Tumhe sochna kisi sukoon se kam nahi hai, aur tumse baat karne ki ek koshish bhi mere dil ki dharkan ko tez kar deti hai.\n\nYe digital gulab shayad waqt ke sath purana na ho, bilkul us jazbe ki tarah jo mere dil me tumhare liye hai. Main bas ye kehna chahta hoon ke tum mere liye bohot zyada special ho, aur meri is choti si kainaat ka sab se haseen hissa ho.\n\nAlways & forever yours. ♥`;
    
    const readBtn = document.getElementById('readBtn');
    readBtn.addEventListener('click', () => {
        document.getElementById('screen3').classList.add('hidden');
        document.getElementById('screen4').classList.remove('hidden');
        typeWriter(letterToKainat, 0);
    });

    function typeWriter(text, i) {
        if (i < text.length) {
            if(text.charAt(i) === '\n') {
                document.getElementById("typewriterText").innerHTML += '<br>';
            } else {
                document.getElementById("typewriterText").innerHTML += text.charAt(i);
            }
            setTimeout(() => { typeWriter(text, i + 1); }, 45);
        } else {
            document.getElementById('letterCursor').style.display = 'none';
        }
    }

    document.getElementById('closeBtn').addEventListener('click', () => {
        document.getElementById('screen4').classList.add('hidden');
        document.getElementById('screen3').classList.remove('hidden');
        document.getElementById("typewriterText").innerHTML = "";
        document.getElementById('letterCursor').style.display = 'inline-block';
    });
});
