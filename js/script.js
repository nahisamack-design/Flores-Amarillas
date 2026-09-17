/* =====================================================
   SCRIPT GENERAL DEL PROYECTO
   ===================================================== */


/* =====================================================
   INDEX.HTML
   ===================================================== */

const startButton =
    document.getElementById("startButton");


if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            startButton.textContent =
                "ABRIENDO... 🌻";

            startButton.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    window.location.href =
                        "flores.html";

                },
                700
            );

        }
    );

}


/* =====================================================
   FLORES.HTML
   ===================================================== */


/* ---------- PARTÍCULAS ---------- */

const particleContainer =
    document.getElementById("particles");


if (particleContainer) {

    function createParticle() {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            8 +
            Math.random() * 14 +
            "s";

        particle.style.animationDelay =
            Math.random() * 5 +
            "s";

        particleContainer.appendChild(
            particle
        );

        setTimeout(
            () => {

                particle.remove();

            },
            24000
        );

    }


    setInterval(
        createParticle,
        500
    );

}


/* ---------- SCROLL REVEAL ---------- */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                        }

                    }
                );

            },
            {
                threshold: .15
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(element);

        }
    );

}


/* ---------- INTRO ---------- */

const intro =
    document.getElementById("intro");


if (intro) {

    setTimeout(
        () => {

            intro.classList.add(
                "intro-visible"
            );

        },
        250
    );

}


/* ---------- PARALLAX ARQUITECTURA ---------- */

const architectureBg =
    document.getElementById(
        "architectureBg"
    );


if (architectureBg) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                    - .5
                ) * 14;


            const y =
                (
                    event.clientY /
                    window.innerHeight
                    - .5
                ) * 14;


            architectureBg.style.transform =
                `scale(1.08)
                 translate(${x}px, ${y}px)`;

        }
    );

}


/* ---------- TARJETAS 3D ---------- */

const cards =
    document.querySelectorAll(".card");


if (cards.length > 0) {

    cards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        (
                            x /
                            rect.width
                            - .5
                        ) * 10;


                    const rotateX =
                        (
                            y /
                            rect.height
                            - .5
                        ) * -10;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


/* ---------- MUSEO 3D ---------- */

const museum =
    document.getElementById("museum");


if (museum) {

    museum.addEventListener(
        "mousemove",
        event => {

            const rect =
                museum.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    x /
                    rect.width
                    - .5
                ) * 3;


            const rotateX =
                (
                    y /
                    rect.height
                    - .5
                ) * -3;


            museum.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    museum.addEventListener(
        "mouseleave",
        () => {

            museum.style.transform =
                "";

        }
    );

}


/* ---------- BOTÓN HACIA FINAL ---------- */

const flowerButton =
    document.getElementById(
        "flowerButton"
    );


if (flowerButton) {

    flowerButton.addEventListener(
        "click",
        () => {

            flowerButton.textContent =
                "PREPARANDO LAS FLORES... 🌻";

            flowerButton.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    window.location.href =
                        "final.html";

                },
                900
            );

        }
    );

}


/* =====================================================
   FINAL.HTML
   ===================================================== */


/* ---------- FLORES ALREDEDOR ---------- */

const flowerField =
    document.getElementById(
        "flowerField"
    );


if (flowerField) {

    const flowerPositions = [

        [5, 4, 42],
        [13, 15, 34],
        [22, 7, 52],
        [31, 24, 36],

        [8, 88, 46],
        [18, 77, 34],
        [29, 94, 54],
        [38, 83, 40],

        [47, 5, 44],
        [55, 18, 33],
        [65, 8, 55],

        [48, 95, 45],
        [59, 82, 35],
        [71, 92, 55],

        [78, 5, 38],
        [88, 17, 52],
        [94, 30, 34],

        [82, 88, 44],
        [91, 75, 32],
        [96, 60, 48],

        [10, 38, 27],
        [16, 62, 29],
        [80, 35, 29],
        [87, 52, 27]

    ];


    flowerPositions.forEach(
        (position, index) => {

            const flower =
                document.createElement(
                    "div"
                );

            flower.className =
                "yellow-flower";

            flower.textContent =
                "🌻";

            flower.style.top =
                position[0] + "%";

            flower.style.left =
                position[1] + "%";

            flower.style.fontSize =
                position[2] + "px";

            flower.style.animationDelay =
                (index * .12) + "s";

            flowerField.appendChild(
                flower
            );

        }
    );


    /* ---------- MOVIMIENTO DE FLORES ---------- */

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                    - .5
                ) * 10;


            const y =
                (
                    event.clientY /
                    window.innerHeight
                    - .5
                ) * 10;


            flowerField.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    /* ---------- PÉTALOS ---------- */

    function createPetal() {

        const petal =
            document.createElement(
                "div"
            );

        petal.className =
            "petal";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.animationDuration =
            5 +
            Math.random() * 7 +
            "s";

        petal.style.opacity =
            .3 +
            Math.random() * .6;

        document.body.appendChild(
            petal
        );


        setTimeout(
            () => {

                petal.remove();

            },
            13000
        );

    }


    setInterval(
        createPetal,
        500
    );


    /* ---------- DESTELLOS ---------- */

    function createSpark() {

        const spark =
            document.createElement(
                "div"
            );

        spark.className =
            "spark";

        spark.style.left =
            Math.random() * 100 + "vw";

        spark.style.top =
            15 +
            Math.random() * 75 +
            "vh";

        document.body.appendChild(
            spark
        );


        setTimeout(
            () => {

                spark.remove();

            },
            2200
        );

    }


    setInterval(
        createSpark,
        350
    );

}


/* =====================================================
   BOTÓN VOLVER AL INICIO
   ===================================================== */

const restartButton =
    document.getElementById(
        "restartButton"
    );


if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "index.html";

        }
    );

}
