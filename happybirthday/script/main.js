window.addEventListener('load', () => {
    Swal.fire({
        title: 'Udah siapp??',
        imageUrl: 'img/mika/mika_siap.png',
        imageHeight: 200,
        imageAlt: 'Mika Siap',
        showCancelButton: true,
        confirmButtonColor: '#7b2cbf',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Siap!',
        cancelButtonText: 'Ga.',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            Swal.fire({
                title: 'yakin nih? kita mulai ya?',
                imageUrl: 'img/mika/mika_sedih.png', 
                imageHeight: 200,
                imageAlt: 'Mika Sedih',
                showCancelButton: true,
                confirmButtonColor: '#7b2cbf',
                cancelButtonColor: '#9d4edd',
                confirmButtonText: 'Yuk',
                cancelButtonText: 'hmmm yaudah',
            }).then(() => {
                document.querySelector('.song').play();
                animationTimeline();
            });
        }
    });
});

const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

    const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" }
    const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" }

    const tl = new gsap.timeline();

    tl.to(".container", 0.6, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .to(".hbd-chatbox span", { visibility: "visible", stagger: 0.05 })
    .to(".fake-btn", 0.1, { backgroundColor: "#5a189a" }, "+=4")
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "#9d4edd", color: "#fff" })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1.5")
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .from(".idea-6 span", { scale: 3, opacity: 0, rotation: 15, ease: "expo.out", stagger: 0.2 })
    .to(".idea-6 span", { scale: 3, opacity: 0, rotation: -15, ease: "expo.out", stagger: 0.2 }, "+=1.5")
    .fromTo(".baloons img", { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000, duration: 2.5, stagger: 0.2 })
    .from(".profile-picture", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
    .from(".hat", 0.5, { x: 100, y: 350, rotation: -180, opacity: 0 })
    /* Animasi Mika Tambahan */
    .from(".mika-top-left", 0.5, { scale: 0, opacity: 0, rotation: -90, ease: "back.out(1.7)" }, "-=0.5")
    .from(".mika-bottom-right", 0.5, { scale: 0, opacity: 0, rotation: 90, ease: "back.out(1.7)" }, "-=0.3")
    /* --- */
    .from(".wish-hbd span", { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: "elastic.out(1, 0.5)", stagger: 0.1 })
    .fromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#e0aaff", ease: "expo.out", stagger: 0.1 }, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .to(".eight svg", { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4, duration: 1.5, stagger: 0.3 })
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
    .from(".nine p", { opacity: 0, y: -20, duration: 1, stagger: 0.5 })
    .from(".voucher-card", { scale: 0, opacity: 0, duration: 0.8, ease: "back.out(1.7)" })
    .from(".mika-image-tablet", { y: 50, opacity: 0, duration: 0.8 }, "-=0.4")
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1")
    .to(".nine", 0.5, { opacity: 0, y: 20, visibility: "hidden" }, "+=4") 
    .fromTo(".ten", 1.2, { opacity: 0, y: 20 }, { opacity: 1, y: 0, visibility: "visible" });

    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => { tl.restart(); });
}