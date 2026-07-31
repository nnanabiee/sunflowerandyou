const envelope = document.getElementById("openEnvelope");
const ytMusic = document.getElementById("ytMusic");
const musicHint = document.getElementById("musicHint");

// Ganti ID ini kalau mau pakai video/lagu lain
const bgMusic = document.getElementById("bgMusic");

function startMusic() {
    bgMusic.play().catch(() => {});
}

// tombol "pakai headset yaa" juga bisa ditap manual buat mastiin musik jalan
// (fallback kalau autoplay kepencet policy browser, misal dibuka via file://)
musicHint.addEventListener("click", () => {
    startMusic();
});

// =============================
// PINDAH HALAMAN
// =============================

function showPage(id){

    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });

    const target = document.getElementById(id);

    target.classList.add("active");

    // biar halaman baru selalu mulai dari atas, nggak ikut posisi scroll halaman sebelumnya
    target.scrollTop = 0;
    window.scrollTo(0,0);

}

// =============================
// SETELAH AMPLOP DIBUKA
// =============================
if (envelope) {
  envelope.addEventListener("click", () => {
    const envelopeTop = document.querySelector(".envelope-top");
    const envelopeBack = document.querySelector(".envelope-back");
    const envelopeFront = document.querySelector(".envelope-front");
    const letter = document.querySelector(".letter");
    const clickText = document.querySelector(".click-text");
    const envelopeWrapper = document.querySelector(".envelope-wrapper");

    // 1) Stop animasi goyang & sembunyikan teks petunjuk
    if (envelopeWrapper) envelopeWrapper.classList.add("open");
    startMusic();
    if (clickText) {
      clickText.style.transition = ".3s";
      clickText.style.opacity = "0";
    }

    // 2) Segitiga atas kebuka & langsung diturunkan z-index nya agar berada di BELAKANG surat
    if (envelopeTop) {
      envelopeTop.style.transform = "rotateX(180deg)";
      envelopeTop.style.zIndex = "1"; // Bikin surat pasti di DEPAN segitiga
    }

    // 3) Surat NAIK dulu dari dalam kantong amplop
    setTimeout(() => {
      if (letter) {
        letter.style.zIndex = "10"; // Bikin surat melayang di atas segalanya
        letter.style.opacity = "1";
        letter.style.bottom = "120px";
      }
    }, 350);

    // 4) AMPLOPNYA HILANG DULUSAN (Hanya Wadah Amplop, Surat TIDAK ikut hilang)
    setTimeout(() => {
      [envelopeTop, envelopeBack, envelopeFront].forEach((el) => {
        if (el) {
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          el.style.opacity = "0";
          el.style.transform = "scale(0.85)";
        }
      });
    }, 900);

    // 5) SURAT BARU BERGERAK KE TENGAH LAYAR (Setelah amplopnya hilang)
    setTimeout(() => {
      if (letter) {
        letter.classList.add("center-screen");
      }
    }, 1300);

    // 6) Surat diam sejenak di tengah (~0.6 detik), lalu Fade Out
    setTimeout(() => {
      if (letter) {
        letter.style.transition = "opacity 0.5s ease";
        letter.style.opacity = "0";
      }
    }, 2200);

    // 7) Pindah ke Halaman Pertanyaan
    setTimeout(() => {
      showPage("question1-page");
    }, 2700);
  });
}

const q1Yes=document.getElementById("q1Yes");
const q1No=document.getElementById("q1No");
const q1Message=document.getElementById("q1Message");

let q1Scale=1;

q1Yes.onclick=()=>{

    q1Message.innerHTML=
    "yeayy ai woaffs chuu baby muah muah muah";

    setTimeout(()=>{

        showPage("question2-page");

    },1700);

}

q1No.onclick=()=>{

    q1Scale-=0.18;

    if(q1Scale<0){

        q1Scale=0;

    }

    q1No.style.transform=
    `scale(${q1Scale})`;

    q1No.innerHTML=
    "tekan yes ihh mas🥺";

    if(q1Scale<=0.2){

        q1No.style.display="none";

    }

}

const q2Yes=document.getElementById("q2Yes");
const q2No=document.getElementById("q2No");
const q2Message=document.getElementById("q2Message");
const bunny=document.getElementById("sadBunny");

let q2Scale=1;

q2Yes.onclick=()=>{

    q2Message.innerHTML=
    "xixi ai wopyuuuu somach";

setTimeout(()=>{

    showPage("reasons-page");

},1700);

}

q2No.onclick=()=>{

    bunny.classList.add("show-bunny");

    q2Scale-=0.12;

    q2No.style.transform=
    `scale(${q2Scale})`;

    const maxX=150;
    const maxY=80;

    const randomX=Math.random()*maxX-maxX/2;
    const randomY=Math.random()*maxY-maxY/2;

    q2No.style.left=randomX+"px";
    q2No.style.top=randomY+"px";

    if(q2Scale<=0.2){

        q2No.style.display="none";

    }

}

/* =======================================
   DATA ALASAN 1–15
======================================= */

const reasons = [

"rennn jago gambar sama desain :D",

"rennn bikin aku ketawa sama leluconnya",

"rennn bikin aku senyum karena tingkahnya wkwk",

"rennn kalem heheheh tapi setahuku ajaa (ini pas pdkt plis)",

"nada bicaranya renn selalu excited kalau ke aku",

"rennn bicaranya nda pernah pakai nada tinggi ke aku, aku harap akan selalu gitu",

"rennn selalu pakai 3 kata ajaib, tebak",

"rennn sabar bangettt",

"rennn selalu panggil aku \"teh\"",

"rennn malu maluu kalau ketemu (pasa pdkt inimah)",

"rennn gambarin akuu",

"rennn kalau hujan selalu bilang \"ati ati neng, awas jalannya licin\"",

"rennn mode tengil itu ngeselin tapi lucuuu. aku sukaa",

"rennn nemenin ngobrol kalau aku belum mau bobo (ini pas pdkt yagesya, sekarang aku ditinggal turu tok 😒)",

"rennn tinggii AWOAKOWKAOWK",

"rennn bantu bie kalau lagi kesulitan",

"rennn selalu bikin bie jadi lebih tenang kalau lagi ovt",

"rennn pinter cklii",

"rennn dengerin bie kalau cerita, bahkan yang nda penting",

"rennn energinya positif teruss",

"rennn kasih tau hal hal baik ke bie",

"rennn sering kasih nasihat ke bie",

"rennn selalu usahain apapun itu",

"rennn luangin waktu buat bie walau lagi sibuk banget",

"rennn selalu ada jawaban buat pertanyaannya bie",

"rennn selalu balikin moodnya bie (kadang bikin gamoood juga si 😌)",

"rennn nda pernah marah sama bie... jangan marah ke bie ya nanti sedih 😞",

"rennn perlakuin bie dengan baik",

"rennn bikin bie ngerasa lebih baik setiap harinya",

"rennn bikin bie ngerasa layak buat disayangi melalui cara yang lucu lucu :')",

"bie suka mata lucunya rennn",

"bie suka jugaa sorot matanya rennn ngehehe",

"bie juga sukaa senyum manisnya rennn",

"rennn bikin gantungan kunci buat bie!!!",

"rennn pake jepit bintang dari bie :D",

"rennn itu well prepared banget (pas first date aku kaget)",

"rennn kasih rasa aman ke aku",

"rennn nyuapin akuu :D",

"rennn selalu ngabarin pakai video/foto",

"rennn panggil sayang cantik ke bie",

"rennn ngarahin sama fasilitasin bie kalau lagi stuck banget sama akademik D:",

"rennn selalu bilang gnait, i lovee youuu hunny dengan lope ijonya",

"rennn bilang bie cantik wle :p",

"rennn dengan gaya bebeknya lucuuuu sekali wkwk",

"rennn kasih bunga ke bie :D",

"rennn ajak bie jalan jalan terus mam mam",

"rennn suka kiss kepalanya bie, jadi bie nya ngerasa amannn",

"rennn suka kiss tangannya bie, jadi bie nya ngerasa dihargai dan itu AAAAAAAAAAAAAAAA",

"rennn apresiasi bie terus walau cuma pencapaian kecil kecilan hehehe",

"aku suka semuanyaaa, tapi tolong jangan pernah nyerah ke orang satu ini yaa walau ngeselin sikit hehe"
];


/* =======================================
   WARNA BUBBLE
======================================= */

const bubbleColors = [

"reason-green",

"reason-yellow",

"reason-cream"

];


/* =======================================
   MEMBUAT BUBBLE
======================================= */

const reasonContainer = document.getElementById("reasonContainer");
reasons.forEach((reason,index)=>{

    const bubble=document.createElement("div");
    bubble.className="reason-bubble";

    bubble.classList.add(

        bubbleColors[
            index % bubbleColors.length
        ]

    );

    bubble.style.animationDelay=
    (Math.random()*2)+"s";

    bubble.style.animationDuration=
    (3+Math.random())+"s";

    bubble.style.width=
    (160+Math.random()*70)+"px";

    bubble.innerHTML=

    `
        <span class="reason-number">
            ${index+1}
        </span>

        ${reason}
    `;

    reasonContainer.appendChild(bubble);

});

const secretBubble=document.createElement("div");

secretBubble.className="secret-bubble";

secretBubble.innerHTML=`

<div style="font-size:42px;">
🔒
</div>

<br>

50 lainnya masih rahasia wlee :p

`;

reasonContainer.appendChild(secretBubble);

const reasonNext =
document.getElementById("reasonNext");

reasonNext.onclick=()=>{

    showPage("before-bouquet-page");

};
const bouquetYes =
document.getElementById("bouquetYes");

const bouquetNo =
document.getElementById("bouquetNo");

let bouquetScale=1;
bouquetYes.onclick=()=>{

    showPage("bouquet-page");

};
bouquetNo.onclick=()=>{

    bouquetScale-=0.15;

    bouquetNo.style.transform=
    `scale(${bouquetScale})`;

    bouquetNo.innerHTML=
    "klik yes woii";

    if(bouquetScale<=0.25){

        bouquetNo.disabled=true;

        setTimeout(()=>{

            bouquetYes.click();

        },500);

    }

}

const bouquetArea=
document.getElementById("bouquetArea");

const flowerOptions=
document.querySelectorAll(".bouquet-flower");

flowerOptions.forEach(flower=>{

flower.onclick=()=>{

const img=document.createElement("img");

img.src=flower.src;

img.className="selectedFlower";

// posisi acak tapi tetap di dalam area (biar nggak kepotong pas dipindah ke final page)
const areaW = bouquetArea.clientWidth;
const areaH = bouquetArea.clientHeight;

img.style.left =
Math.min(areaW-90, 40 + Math.random()*(areaW-140)) + "px";

img.style.top =
Math.min(areaH-90, 60 + Math.random()*(areaH-220)) + "px";

bouquetArea.appendChild(img);

enableDrag(img);

}

});

function enableDrag(element){

    let isDown = false;
    let offsetX = 0;
    let offsetY = 0;

    // =========================
    // DESKTOP
    // =========================

    element.addEventListener("mousedown",(e)=>{

        isDown = true;

        offsetX = e.offsetX;
        offsetY = e.offsetY;

    });

    document.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        const rect = bouquetArea.getBoundingClientRect();

        element.style.left =
        (e.clientX - rect.left - offsetX) + "px";

        element.style.top =
        (e.clientY - rect.top - offsetY) + "px";

    });

    document.addEventListener("mouseup",()=>{

        isDown = false;

    });

    // =========================
    // MOBILE
    // =========================

    element.addEventListener("touchstart",(e)=>{

        isDown = true;

        const rect = element.getBoundingClientRect();

        offsetX =
        e.touches[0].clientX - rect.left;

        offsetY =
        e.touches[0].clientY - rect.top;

    });

    document.addEventListener("touchmove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const rect = bouquetArea.getBoundingClientRect();

        element.style.left =
        (e.touches[0].clientX - rect.left - offsetX) + "px";

        element.style.top =
        (e.touches[0].clientY - rect.top - offsetY) + "px";

    },{ passive:false });

    document.addEventListener("touchend",()=>{

        isDown = false;

    });

}

const finalBouquet=
document.getElementById("finalBouquet");

document
.getElementById("finishBouquet")
.onclick=()=>{

    // .final-bouquet sekarang cuma "jendela" pendek yang di-crop (lihat style.css)
    // supaya nggak ada jarak kosong besar di atas bunga. Isi aslinya
    // (.final-bouquet-inner) dibikin PERSIS sama ukurannya (dalam px asli) dengan
    // bouquetArea, ditempel rata bawah, biar koordinat bunga nggak geser sedikit pun
    // — cuma bagian bawahnya aja yang kelihatan lewat jendela itu.
    const bqRect = bouquetArea.getBoundingClientRect();

    let bouquetInner = finalBouquet.querySelector(".final-bouquet-inner");

    if(!bouquetInner){
        bouquetInner = document.createElement("div");
        bouquetInner.className = "final-bouquet-inner";
        finalBouquet.appendChild(bouquetInner);
    }

    finalBouquet.style.width = bqRect.width + "px";

    bouquetInner.style.width = bqRect.width + "px";
    bouquetInner.style.height = bqRect.height + "px";

    bouquetInner.innerHTML=
    bouquetArea.innerHTML;

    showPage("final-page");

    startConfetti();

    typingTextSpan.innerHTML="";

    typingMessage.classList.remove("done-typing");

    typingIndex=0;

    setTimeout(typeWriter,1200);

}

function startConfetti(){

const duration=7000;

const end=Date.now()+duration;

(function frame(){

confetti({

particleCount:4,

spread:70,

origin:{y:.6}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}
/* =======================================
   TYPEWRITER
======================================= */

const typingMessage =
document.getElementById("typingMessage");

const typingTextSpan =
document.getElementById("typingTextSpan");

const typingText = `selamat merayakan hari lahir yaaa kak!
aku bersyukur bisa bertemu kamu, dan 
semoga kita masih punya banyak cerita 
yang akan kita jalani bersama.

semoga nanti,
tahun depan,
dan tahun-tahun setelahnya...
aku masih bisa nemenin ulang tahun renn yaaw

— bie yang cakeup`;

let typingIndex = 0;

function typeWriter(){

    if(typingIndex < typingText.length){

        typingTextSpan.textContent += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter,50);

    } else {

        // biar kursor blink berhenti begitu tulisan selesai
        typingMessage.classList.add("done-typing");

    }

}
