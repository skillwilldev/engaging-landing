gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

gsap.from('header', {
    opacity: 0, y: -28, duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: 'header',
        start: 'top 85%',
        once: true,

    }
});

gsap.from('h1', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: 'h1',
        start: 'top 85%',
        once: true,

    }
});


mm.add("(min-width: 768px)", () => {
    gsap.from('.business__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.business__item',
            start: 'top 85%',
            once: true,

        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.business__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.business__item',
            start: 'top 85%',
            once: true,

        }
    });
});



mm.add("(min-width: 768px)", () => {
    gsap.from('.team__item', {
        opacity: 0, y: 40, duration: 1.2,
        stagger: 0.1, ease: 'expo.out',
        scrollTrigger: {
            trigger: '.team__item',
            start: 'top 85%',
            once: true,

        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.team__item', {
        opacity: 0, y: 40, duration: 1.2,
        stagger: 0.1, ease: 'expo.out',
        scrollTrigger: {
            trigger: '.team__item',
            start: 'top 85%',
            once: true,

        }
    });
});
