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

    // Realistic Letter Content for Kainat (Genuine & Respectful)
    const letterToKainat = `Kuch log kehte hain ke coding me sirf logic hota hai, jazbaat nahi... Lekin sach ye hai ke jag se maine tumhe jana hai, mere har code aur har khayal ko ek nayi raunaq mil gayi hai.\n\nKainat, main nahi jaanta ke tum mere baare me kya sochti ho, aur main tum par koi zabardasti bhi nahi karna chahta. Mohabbat ya pasand aisi cheez nahi jo zor-zabardasti se paida ho. Lekin main bas itna jaanta hoon ke tum mere liye bohot zyada special ho. Tumhari ek muskurahat, tumhari baatein, aur tumhara meri is choti si kainaat me hona hi mere liye sukoon ka baais hai.\n\nYe digital gulab mere isi khamosh jazbe aur respect ki ek choti si nishani hai jo hamesha aisi hi rahegi. Main bas chahta hoon ke tum jab bhi is page ko dekho, to tumhe ehsaas ho ke is duniya me koi hai jo tumhari bohot dil se qadar karta hai aur tumhe muskurate hue dekhna chahta hai.\n\nTumhara hamesha khair-khwah. ♥`;
    
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
