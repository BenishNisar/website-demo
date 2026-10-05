

gsap.registerPlugin(ScrollTrigger);

      document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('site-header');

    const menuBtn =
        document.getElementById('menu-btn');

    const closeBtn =
        document.getElementById('close-btn');

    const mobileMenu =
        document.getElementById('mobile-menu');

    const mobileLinks =
        document.querySelectorAll('.mobile-link');


    /* HEADER SCROLL */

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add(
                'header-scrolled'
            );
        } else {
            header.classList.remove(
                'header-scrolled'
            );
        }

    };

    updateHeader();

    window.addEventListener(
        'scroll',
        updateHeader,
        {
            passive: true
        }
    );


    /* OPEN MOBILE MENU */

    const openMobileMenu = () => {

        if (!mobileMenu) return;

        mobileMenu.classList.add(
            'active'
        );

        mobileMenu.setAttribute(
            'aria-hidden',
            'false'
        );

        if (menuBtn) {

            menuBtn.setAttribute(
                'aria-expanded',
                'true'
            );

        }

        document.body.classList.add(
            'menu-open'
        );

    };


    /* CLOSE MOBILE MENU */

    const closeMobileMenu = () => {

        if (!mobileMenu) return;

        mobileMenu.classList.remove(
            'active'
        );

        mobileMenu.setAttribute(
            'aria-hidden',
            'true'
        );

        if (menuBtn) {

            menuBtn.setAttribute(
                'aria-expanded',
                'false'
            );

        }

        document.body.classList.remove(
            'menu-open'
        );

    };


    if (menuBtn) {

        menuBtn.addEventListener(
            'click',
            openMobileMenu
        );

    }


    if (closeBtn) {

        closeBtn.addEventListener(
            'click',
            closeMobileMenu
        );

    }


    mobileLinks.forEach(link => {

        link.addEventListener(
            'click',
            closeMobileMenu
        );

    });


    /* ESC CLOSE */

    document.addEventListener(
        'keydown',
        event => {

            if (event.key === 'Escape') {
                closeMobileMenu();
            }

        }
    );

});

        // services
document.addEventListener('DOMContentLoaded', () => {
    const servicesData = [
        {
            title: "SEO & Growth",
            desc: "Improve online visibility with intelligent SEO strategies, technical optimization and performance focused search solutions.",
            features: ["Technical SEO", "Keyword Strategy", "Analytics Tracking"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            badge: "Search Authority"
        },
        {
            title: "Web Development",
            desc: "Engineer lightning-fast, highly responsive, custom web applications and immersive digital experiences built for scale.",
            features: ["Custom Architecture", "Full-Stack Dev", "Performance Speed"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
            badge: "Engineering Core"
        },
        {
            title: "Digital Content",
            desc: "Craft cinematic visual assets, high-converting copy, and generative AI video reels that captivate audiences and build brands.",
            features: ["AI Video & Motion", "Brand Storytelling", "Creative Direction"],
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
            badge: "Visual Excellence"
        },
        {
            title: "Social Media",
            desc: "Build dominant online communities and viral engagement loops through strategic content calendars and multi-channel campaigns.",
            features: ["Community Growth", "Campaign Strategy", "Influencer Sync"],
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
            badge: "Audience Engagement"
        },
        {
            title: "Performance Marketing",
            desc: "Scale revenue predictably with hyper-targeted paid advertising, data-driven funnel optimization, and strict ROAS tracking.",
            features: ["PPC Campaigns", "ROAS Optimization", "Funnel Architecture"],
            image: "https://images.unsplash.com/photo-1533750349033-cdce34c09eb6?auto=format&fit=crop&w=1200&q=80",
            badge: "Revenue Scaling"
        },
        {
            title: "Business Systems",
            desc: "Automate complex operations, streamline workflows, and integrate custom POS, CRM, and ERP platforms for enterprise efficiency.",
            features: ["Custom POS & ERP", "Workflow Automation", "API Integrations"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
            badge: "Enterprise Tech"
        }
    ];

    const tabButtons = document.querySelectorAll('.service-tab-btn');
    const showcaseImg = document.getElementById('showcase-img');
    const showcaseTitle = document.getElementById('showcase-title');
    const showcaseDesc = document.getElementById('showcase-desc');
    const showcaseFeaturesList = document.getElementById('showcase-features-list');
    const showcaseBadgeText = document.getElementById('showcase-badge-text');
    const contentBox = document.getElementById('showcase-content-box');

    if (showcaseImg) showcaseImg.src = servicesData[0].image;

    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index'), 10);
            const data = servicesData[index];

            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            if (typeof gsap !== 'undefined') {
                gsap.to([showcaseImg, contentBox], {
                    opacity: 0,
                    y: 10,
                    duration: 0.18,
                    onComplete: () => {
                        showcaseImg.src = data.image;
                        showcaseTitle.textContent = data.title;
                        showcaseDesc.textContent = data.desc;
                        showcaseBadgeText.textContent = data.badge;

                        showcaseFeaturesList.innerHTML = data.features.map(feat => `
                            <div class="feature-chip">
                                <span class="feature-cross">✦</span>
                                <span>${feat}</span>
                            </div>
                        `).join('');

                        gsap.fromTo([showcaseImg, contentBox],
                            { opacity: 0, y: 12, scale: 0.98 },
                            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out', stagger: 0.04 }
                        );
                    }
                });
            } else {
                showcaseImg.src = data.image;
                showcaseTitle.textContent = data.title;
                showcaseDesc.textContent = data.desc;
                showcaseBadgeText.textContent = data.badge;
                showcaseFeaturesList.innerHTML = data.features.map(feat => `
                    <div class="feature-chip"><span class="feature-cross">✦</span><span>${feat}</span></div>
                `).join('');
            }
        });
    });
});

// services

// new section
        // document.addEventListener('DOMContentLoaded', () => {
        //     const isDesktop = window.matchMedia('(pointer: fine) and (min-width: 1025px)').matches;
        //     const interactiveWords = document.querySelectorAll('.interactive-word');
        //     const previewCard = document.getElementById('cursor-preview-card');
        //     const previewImg = document.getElementById('preview-img');
        //     const previewBadgeTxt = document.getElementById('preview-badge-txt');

        //     if (isDesktop && typeof gsap !== 'undefined' && previewCard) {
        //         let mouseX = 0, mouseY = 0, currentOffsetX = 0, currentOffsetY = 0, currentRotate = 0;
        //         let xTo = gsap.quickTo(previewCard, "x", { duration: 0.35, ease: "power3.out" });
        //         let yTo = gsap.quickTo(previewCard, "y", { duration: 0.35, ease: "power3.out" });

        //         window.addEventListener('mousemove', (e) => {
        //             mouseX = e.clientX;
        //             mouseY = e.clientY;
        //             xTo(mouseX + currentOffsetX);
        //             yTo(mouseY + currentOffsetY);
        //         }, { passive: true });

        //         interactiveWords.forEach((word) => {
        //             word.addEventListener('mouseenter', () => {
        //                 previewImg.src = word.getAttribute('data-image');
        //                 previewBadgeTxt.textContent = word.getAttribute('data-label');
        //                 currentRotate = parseFloat(word.getAttribute('data-rotate')) || 0;
        //                 currentOffsetX = parseFloat(word.getAttribute('data-offset-x')) || 0;
        //                 currentOffsetY = parseFloat(word.getAttribute('data-offset-y')) || 0;

        //                 gsap.set(previewCard, { x: mouseX + currentOffsetX, y: mouseY + currentOffsetY });
        //                 gsap.to(previewCard, { autoAlpha: 1, scale: 1, rotation: currentRotate, duration: 0.3, ease: "back.out(1.4)" });
        //             });

        //             word.addEventListener('mouseleave', () => {
        //                 gsap.to(previewCard, { autoAlpha: 0, scale: 0.85, rotation: 0, duration: 0.25, ease: "power2.in" });
        //             });
        //         });
        //     }
        // });


        // octaneTrailSection
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "octaneTrailSection"
            );

        if (!section) return;


        const isDesktop =
            window.matchMedia(
                "(pointer: fine) and (min-width: 1025px)"
            ).matches;


        if (!isDesktop) return;


        const trailItems =
            Array.from(
                section.querySelectorAll(
                    ".octaneTrailImage"
                )
            );


        if (!trailItems.length) return;


        let currentIndex = 0;

        let lastX = 0;
        let lastY = 0;

        let previousX = 0;
        let previousY = 0;

        let lastSpawnTime = 0;

        const minimumDistance = 72;

        const minimumTime = 55;


        function distanceBetween(
            x1,
            y1,
            x2,
            y2
        ) {

            const dx =
                x2 - x1;

            const dy =
                y2 - y1;

            return Math.sqrt(
                dx * dx +
                dy * dy
            );

        }


        function showTrailImage(
            x,
            y,
            velocityX,
            velocityY
        ) {

            const item =
                trailItems[currentIndex];


            currentIndex =
                (
                    currentIndex + 1
                ) %
                trailItems.length;


            gsap.killTweensOf(item);


            const width =
                item.offsetWidth;

            const height =
                item.offsetHeight;


            const direction =
                velocityX >= 0
                    ? 1
                    : -1;


            const speed =
                Math.min(
                    Math.abs(velocityX) +
                    Math.abs(velocityY),
                    70
                );


            const rotation =
                gsap.utils.clamp(
                    -14,
                    14,
                    velocityX * 0.11
                );


            const startRotation =
                rotation -
                direction * 7;


            const driftX =
                gsap.utils.clamp(
                    -30,
                    30,
                    velocityX * 0.42
                );


            const driftY =
                gsap.utils.clamp(
                    -24,
                    24,
                    velocityY * 0.32
                );


            item.style.left =
                `${x - width / 2}px`;

            item.style.top =
                `${y - height / 2}px`;


            gsap.set(
                item,
                {
                    autoAlpha: 1,

                    scale: 0.25,

                    rotation:
                        startRotation,

                    x:
                        -driftX,

                    y:
                        -driftY,

                    zIndex:
                        20 +
                        currentIndex
                }
            );


            const timeline =
                gsap.timeline();


            timeline.to(
                item,
                {
                    scale: 1,

                    rotation:
                        rotation,

                    x: 0,

                    y: 0,

                    duration:
                        0.48,

                    ease:
                        "power4.out"
                }
            );


            timeline.to(
                item,
                {
                    scale: 0.9,

                    rotation:
                        rotation +
                        direction * 3,

                    x:
                        driftX * 0.45,

                    y:
                        driftY * 0.45,

                    autoAlpha: 0,

                    duration:
                        0.65,

                    ease:
                        "power3.inOut"
                },
                0.46
            );

        }


        section.addEventListener(
            "mousemove",
            event => {

                const rect =
                    section.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const currentTime =
                    performance.now();


                const travelled =
                    distanceBetween(
                        x,
                        y,
                        lastX,
                        lastY
                    );


                const velocityX =
                    x - previousX;


                const velocityY =
                    y - previousY;


                previousX = x;
                previousY = y;


                if (
                    travelled <
                        minimumDistance ||
                    currentTime -
                        lastSpawnTime <
                        minimumTime
                ) {
                    return;
                }


                showTrailImage(
                    x,
                    y,
                    velocityX,
                    velocityY
                );


                lastX = x;
                lastY = y;

                lastSpawnTime =
                    currentTime;

            },
            {
                passive: true
            }
        );


        section.addEventListener(
            "mouseenter",
            event => {

                const rect =
                    section.getBoundingClientRect();

                lastX =
                    event.clientX -
                    rect.left;

                lastY =
                    event.clientY -
                    rect.top;

                previousX =
                    lastX;

                previousY =
                    lastY;

            }
        );


        section.addEventListener(
            "mouseleave",
            () => {

                gsap.to(
                    trailItems,
                    {
                        autoAlpha: 0,

                        scale: 0.7,

                        duration: 0.35,

                        stagger: 0.025,

                        ease:
                            "power2.out"
                    }
                );

            }
        );

    }
);





document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "octaneTrailSection"
            );

        if (!section) return;


        const isDesktop =
            window.matchMedia(
                "(pointer: fine) and (min-width: 1025px)"
            ).matches;


        if (!isDesktop) return;


        const trailItems =
            Array.from(
                section.querySelectorAll(
                    ".octaneTrailImage"
                )
            );


        if (!trailItems.length) return;


        let currentIndex = 0;

        let lastX = 0;
        let lastY = 0;

        let previousX = 0;
        let previousY = 0;

        let lastSpawnTime = 0;

        const minimumDistance = 72;

        const minimumTime = 55;


        function distanceBetween(
            x1,
            y1,
            x2,
            y2
        ) {

            const dx =
                x2 - x1;

            const dy =
                y2 - y1;

            return Math.sqrt(
                dx * dx +
                dy * dy
            );

        }


        function showTrailImage(
            x,
            y,
            velocityX,
            velocityY
        ) {

            const item =
                trailItems[currentIndex];


            currentIndex =
                (
                    currentIndex + 1
                ) %
                trailItems.length;


            gsap.killTweensOf(item);


            const width =
                item.offsetWidth;

            const height =
                item.offsetHeight;


            const direction =
                velocityX >= 0
                    ? 1
                    : -1;


            const speed =
                Math.min(
                    Math.abs(velocityX) +
                    Math.abs(velocityY),
                    70
                );


            const rotation =
                gsap.utils.clamp(
                    -14,
                    14,
                    velocityX * 0.11
                );


            const startRotation =
                rotation -
                direction * 7;


            const driftX =
                gsap.utils.clamp(
                    -30,
                    30,
                    velocityX * 0.42
                );


            const driftY =
                gsap.utils.clamp(
                    -24,
                    24,
                    velocityY * 0.32
                );


            item.style.left =
                `${x - width / 2}px`;

            item.style.top =
                `${y - height / 2}px`;


            gsap.set(
                item,
                {
                    autoAlpha: 1,

                    scale: 0.25,

                    rotation:
                        startRotation,

                    x:
                        -driftX,

                    y:
                        -driftY,

                    zIndex:
                        20 +
                        currentIndex
                }
            );


            const timeline =
                gsap.timeline();


            timeline.to(
                item,
                {
                    scale: 1,

                    rotation:
                        rotation,

                    x: 0,

                    y: 0,

                    duration:
                        0.48,

                    ease:
                        "power4.out"
                }
            );


            timeline.to(
                item,
                {
                    scale: 0.9,

                    rotation:
                        rotation +
                        direction * 3,

                    x:
                        driftX * 0.45,

                    y:
                        driftY * 0.45,

                    autoAlpha: 0,

                    duration:
                        0.65,

                    ease:
                        "power3.inOut"
                },
                0.46
            );

        }


        section.addEventListener(
            "mousemove",
            event => {

                const rect =
                    section.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const currentTime =
                    performance.now();


                const travelled =
                    distanceBetween(
                        x,
                        y,
                        lastX,
                        lastY
                    );


                const velocityX =
                    x - previousX;


                const velocityY =
                    y - previousY;


                previousX = x;
                previousY = y;


                if (
                    travelled <
                        minimumDistance ||
                    currentTime -
                        lastSpawnTime <
                        minimumTime
                ) {
                    return;
                }


                showTrailImage(
                    x,
                    y,
                    velocityX,
                    velocityY
                );


                lastX = x;
                lastY = y;

                lastSpawnTime =
                    currentTime;

            },
            {
                passive: true
            }
        );


        section.addEventListener(
            "mouseenter",
            event => {

                const rect =
                    section.getBoundingClientRect();

                lastX =
                    event.clientX -
                    rect.left;

                lastY =
                    event.clientY -
                    rect.top;

                previousX =
                    lastX;

                previousY =
                    lastY;

            }
        );


        section.addEventListener(
            "mouseleave",
            () => {

                gsap.to(
                    trailItems,
                    {
                        autoAlpha: 0,

                        scale: 0.7,

                        duration: 0.35,

                        stagger: 0.025,

                        ease:
                            "power2.out"
                    }
                );

            }
        );

    }
);

// work

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        const lines =
            gsap.utils.toArray(
                ".trailTextLine"
            );


        lines.forEach(
            (
                line,
                index
            ) => {

                gsap.fromTo(
                    line,
                    {
                        opacity:
                            index < 3
                                ? 0.38
                                : 0.18
                    },
                    {
                        opacity: 1,

                        duration: 1,

                        ease: "none",

                        scrollTrigger: {
                            trigger:
                                ".octaneTrailSection",

                            start:
                                `top+=${index * 65} 70%`,

                            end:
                                `top+=${180 + index * 65} 55%`,

                            scrub: true
                        }
                    }
                );

            }
        );

    }
);


// octane traol

        document.addEventListener("DOMContentLoaded", () => {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

            gsap.registerPlugin(ScrollTrigger);

            const track = document.getElementById("horizontalTrack");
            const pinWrap = document.getElementById("horizontalPinWrap");

            if (!track || !pinWrap) return;

            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 100);

            let tween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: pinWrap,
                    start: "top top",
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            window.addEventListener("load", () => {
                ScrollTrigger.refresh();
            });
        });













document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        const track = document.getElementById("hugeHorizontalTrack");
        const pinSection = document.getElementById("hugePinSection");

        if (track && pinSection && window.innerWidth > 1024) {
            let getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

            gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: pinSection,
                    start: "top top",
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });
        }
    }
});



// clients
    document.addEventListener("DOMContentLoaded", () => {
    // Mouse Glow Effect across full width
    const showcase = document.getElementById("our-clients-section");
    const mouseGlow = document.getElementById("universeMouseGlow");

    if (showcase && mouseGlow) {
        showcase.addEventListener("mousemove", (e) => {
            const rect = showcase.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseGlow.style.left = `${x}px`;
            mouseGlow.style.top = `${y}px`;
        });
    }

    // 3D Globe Canvas Wireframe Animation
    const canvas = document.getElementById("globeCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        let globeAngle = 0;
        function drawGlobe() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const r = canvas.width * 0.38;

            ctx.strokeStyle = "rgba(37, 99, 235, 0.18)";
            ctx.lineWidth = 1;

            // Draw latitude and longitude grid lines
            for (let i = -Math.PI / 2; i <= Math.PI / 2; i += Math.PI / 6) {
                ctx.beginPath();
                let latR = r * Math.cos(i);
                let latY = cy + r * Math.sin(i);
                ctx.ellipse(cx, latY, latR, latR * 0.2, 0, 0, 2 * Math.PI);
                ctx.stroke();
            }

            for (let i = 0; i < Math.PI; i += Math.PI / 6) {
                ctx.beginPath();
                let angle = i + globeAngle;
                ctx.moveTo(cx + r * Math.cos(angle), cy - r);
                ctx.bezierCurveTo(
                    cx + r * 0.4 * Math.cos(angle), cy,
                    cx + r * 0.4 * Math.cos(angle), cy,
                    cx + r * Math.cos(angle), cy + r
                );
                ctx.stroke();
            }

            globeAngle += 0.008;
            requestAnimationFrame(drawGlobe);
        }
        drawGlobe();
    }

    // 3D Orbit Animation & Mouse Interaction
    const cards = document.querySelectorAll(".hologram-card");
    const totalCards = cards.length;
    const radius = window.innerWidth < 900 ? 210 : 340;
    let angleSpeed = 0.0012;
    let baseAngle = 0;

    function animateOrbit() {
        baseAngle += angleSpeed;
        cards.forEach((card, index) => {
            const theta = baseAngle + (index * (2 * Math.PI / totalCards));
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            const scale = (z + radius) / (2 * radius) * 0.35 + 0.85;
            const opacity = (z + radius) / (2 * radius) * 0.4 + 0.6;

            card.style.transform = `translate3d(${x}px, 0px, ${z}px) scale(${scale}) rotateY(${theta * -57.3}deg)`;
            card.style.zIndex = Math.round(z + radius);
            card.style.opacity = opacity;
        });
        requestAnimationFrame(animateOrbit);
    }
    animateOrbit();

    // Interactive Hover Tilt on Stage
    const stage = document.getElementById("ecosystemStage");
    if (stage) {
        stage.addEventListener("mousemove", (e) => {
            const rect = stage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / stage.clientWidth - 0.5;
            const y = (e.clientY - rect.top) / stage.clientHeight - 0.5;
            stage.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
        });
        stage.addEventListener("mouseleave", () => {
            stage.style.transform = `rotateY(0deg) rotateX(0deg)`;
            stage.style.transition = "transform 0.5s ease";
        });
        stage.addEventListener("mouseenter", () => {
            stage.style.transition = "none";
        });
    }
});







document.addEventListener("DOMContentLoaded", () => {
    // 3D Canvas Connected Nodes & Sphere Simulation on Left Side
    const canvas = document.getElementById("contactGlobeCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let w = (canvas.width = canvas.parentElement.clientWidth);
        let h = (canvas.height = canvas.parentElement.clientHeight);

        window.addEventListener("resize", () => {
            if (canvas.parentElement) {
                w = canvas.width = canvas.parentElement.clientWidth;
                h = canvas.height = canvas.parentElement.clientHeight;
            }
        });

        // Generate 3D Orbital Nodes
        const nodes = [];
        const numNodes = 40;
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                theta: Math.random() * Math.PI * 2,
                phi: Math.acos((Math.random() * 2) - 1),
                radius: 110 + Math.random() * 30,
                speed: 0.005 + Math.random() * 0.005
            });
        }

        let globeRotation = 0;

        function render3DModel() {
            ctx.clearRect(0, 0, w, h);
            const cx = w / 2;
            const cy = h / 2;

            globeRotation += 0.01;

            // Render 3D Wireframe Globe Latitudes & Longitudes
            ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
            ctx.lineWidth = 1;

            for (let lat = -Math.PI / 3; lat <= Math.PI / 3; lat += Math.PI / 6) {
                ctx.beginPath();
                let rOrbit = 120 * Math.cos(lat);
                let yOrbit = cy + 120 * Math.sin(lat);
                ctx.ellipse(cx, yOrbit, rOrbit, rOrbit * 0.3, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Project and draw nodes in 3D space
            const projectedNodes = nodes.map(node => {
                node.theta += node.speed;
                // 3D Rotation formula around Y axis
                const x3d = node.radius * Math.sin(node.phi) * Math.cos(node.theta + globeRotation);
                const y3d = node.radius * Math.cos(node.phi);
                const z3d = node.radius * Math.sin(node.phi) * Math.sin(node.theta + globeRotation);

                // Perspective projection
                const fov = 350;
                const scale = fov / (fov + z3d);
                return {
                    x: cx + x3d * scale,
                    y: cy + y3d * scale,
                    z: z3d,
                    scale: scale
                };
            });

            // Draw connecting lines for nearby nodes
            for (let i = 0; i < projectedNodes.length; i++) {
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    let dx = projectedNodes[i].x - projectedNodes[j].x;
                    let dy = projectedNodes[i].y - projectedNodes[j].y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 90) {
                        ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - dist / 90) * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
                        ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes points
            projectedNodes.forEach(node => {
                ctx.fillStyle = node.z > 0 ? "#2563eb" : "rgba(37, 99, 235, 0.4)";
                ctx.beginPath();
                ctx.arc(node.x, node.y, 3 * node.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(render3DModel);
        }
        render3DModel();
    }
});




// cntact
document.addEventListener("DOMContentLoaded", () => {
    // 1. 3D Connected Intelligence Core Canvas Animation
    const canvas = document.getElementById("contactGlobeCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let w = (canvas.width = canvas.parentElement.clientWidth);
        let h = (canvas.height = canvas.parentElement.clientHeight);

        window.addEventListener("resize", () => {
            if (canvas.parentElement) {
                w = canvas.width = canvas.parentElement.clientWidth;
                h = canvas.height = canvas.parentElement.clientHeight;
            }
        });

        const nodes = [];
        const numNodes = 28;
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                theta: Math.random() * Math.PI * 2,
                phi: Math.acos((Math.random() * 2) - 1),
                radius: 80 + Math.random() * 30,
                speed: 0.003 + Math.random() * 0.004
            });
        }

        let globeRotation = 0;
        function renderIntelligenceCore() {
            ctx.clearRect(0, 0, w, h);
            const cx = w / 2;
            const cy = h / 2 - 20;

            globeRotation += 0.006;

            ctx.strokeStyle = "rgba(248, 196, 52, 0.12)";
            ctx.lineWidth = 1;

            for (let lat = -Math.PI / 3; lat <= Math.PI / 3; lat += Math.PI / 6) {
                ctx.beginPath();
                let rOrbit = 90 * Math.cos(lat);
                let yOrbit = cy + 90 * Math.sin(lat);
                ctx.ellipse(cx, yOrbit, rOrbit, rOrbit * 0.3, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            const projectedNodes = nodes.map(node => {
                node.theta += node.speed;
                const x3d = node.radius * Math.sin(node.phi) * Math.cos(node.theta + globeRotation);
                const y3d = node.radius * Math.cos(node.phi);
                const z3d = node.radius * Math.sin(node.phi) * Math.sin(node.theta + globeRotation);

                const fov = 350;
                const scale = fov / (fov + z3d);
                return {
                    x: cx + x3d * scale,
                    y: cy + y3d * scale,
                    z: z3d,
                    scale: scale
                };
            });

            for (let i = 0; i < projectedNodes.length; i++) {
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    let dx = projectedNodes[i].x - projectedNodes[j].x;
                    let dy = projectedNodes[i].y - projectedNodes[j].y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 75) {
                        ctx.strokeStyle = `rgba(248, 196, 52, ${(1 - dist / 75) * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
                        ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            projectedNodes.forEach(node => {
                ctx.fillStyle = node.z > 0 ? "#F8C434" : "rgba(248, 196, 52, 0.4)";
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2.5 * node.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(renderIntelligenceCore);
        }
        renderIntelligenceCore();
    }

    // 2. Dynamic Project Type Conditional Logic & Readiness Calculator
    const typeRadios = document.querySelectorAll('input[name="project_type"]');
    const conditionalBox = document.getElementById('conditionalFieldsBox');
    const budgetSelect = document.getElementById('budgetRange');
    const timelineSelect = document.getElementById('projectTimeline');
    const goalChips = document.querySelectorAll('.goal-chip');
    const goalsInput = document.getElementById('projectGoalsInput');

    const sumType = document.getElementById('sumType');
    const sumBudget = document.getElementById('sumBudget');
    const sumTimeline = document.getElementById('sumTimeline');
    const sumGoals = document.getElementById('sumGoals');

    const readinessFill = document.getElementById('readinessFill');
    const readinessLabel = document.getElementById('readinessLabel');

    let selectedGoals = [];

    function updateConditionalFields(typeVal) {
        sumType.textContent = typeVal;
        let html = '';
        if (typeVal.includes('Ecommerce')) {
            html = `
                <div class="form-row-grid" style="margin-bottom:0;">
                    <div class="form-input-group">
                        <label>Expected SKU / Product Count</label>
                        <select name="ecommerce_skus">
                            <option value="1-50">1 - 50 Products</option>
                            <option value="51-500">51 - 500 Products</option>
                            <option value="500+">500+ (Enterprise Catalog)</option>
                        </select>
                    </div>
                    <div class="form-input-group">
                        <label>Existing Store URL (If applicable)</label>
                        <input type="text" name="existing_store_url" placeholder="https://yourbrand.com">
                    </div>
                </div>
            `;
        } else if (typeVal.includes('Automation')) {
            html = `
                <div class="form-row-grid" style="margin-bottom:0;">
                    <div class="form-input-group">
                        <label>Target Operational Workflow</label>
                        <input type="text" name="ai_workflow" placeholder="e.g. Customer Support, Lead Scoring">
                    </div>
                    <div class="form-input-group">
                        <label>Current Software Stack</label>
                        <input type="text" name="current_stack" placeholder="e.g. HubSpot, Shopify, MySQL">
                    </div>
                </div>
            `;
        } else if (typeVal.includes('SEO')) {
            html = `
                <div class="form-row-grid" style="margin-bottom:0;">
                    <div class="form-input-group">
                        <label>Target Location / Market</label>
                        <input type="text" name="seo_target_market" placeholder="e.g. US, UK, Global">
                    </div>
                    <div class="form-input-group">
                        <label>Current Website URL</label>
                        <input type="text" name="seo_url" placeholder="https://domain.com">
                    </div>
                </div>
            `;
        } else {
            html = `
                <div class="form-row-grid" style="margin-bottom:0;">
                    <div class="form-input-group">
                        <label>Project Stage</label>
                        <select name="project_stage">
                            <option value="New Idea">New Idea / Concept</option>
                            <option value="Existing Product">Existing Product / Redesign</option>
                            <option value="Scaling">Scaling Established Platform</option>
                        </select>
                    </div>
                    <div class="form-input-group">
                        <label>Existing Website / Domain</label>
                        <input type="text" name="website_url" placeholder="https://domain.com">
                    </div>
                </div>
            `;
        }
        conditionalBox.innerHTML = html;
        conditionalBox.classList.add('active');
        calculateReadiness();
    }

    typeRadios.forEach(radio => {
        if (radio.checked) updateConditionalFields(radio.value);
        radio.addEventListener('change', (e) => {
            updateConditionalFields(e.target.value);
        });
    });

    goalChips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('selected');
            const goal = chip.getAttribute('data-goal');
            if (chip.classList.contains('selected')) {
                selectedGoals.push(goal);
            } else {
                selectedGoals = selectedGoals.filter(g => g !== goal);
            }
            goalsInput.value = selectedGoals.join(', ');
            sumGoals.textContent = selectedGoals.length ? selectedGoals.join(', ') : 'None selected';
            calculateReadiness();
        });
    });

    budgetSelect.addEventListener('change', (e) => {
        sumBudget.textContent = e.target.value;
        calculateReadiness();
    });

    timelineSelect.addEventListener('change', (e) => {
        sumTimeline.textContent = e.target.value;
        calculateReadiness();
    });

    function calculateReadiness() {
        let score = 25;
        if (budgetSelect.value) score += 25;
        if (timelineSelect.value) score += 25;
        if (selectedGoals.length > 0) score += 25;

        readinessFill.style.width = score + '%';
        readinessLabel.textContent = 'Readiness: ' + score + '%';
    }

    // 3. Form Validation & Submission Handling
    const form = document.getElementById('octaneContactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnSpinner = document.getElementById('btnSpinner');
    const successBox = document.getElementById('successBox');
    const successServiceType = document.getElementById('successServiceType');
    const resetBtn = document.getElementById('resetBtn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                const group = input.closest('.form-input-group') || input.closest('.form-checkbox-group');
                if (!input.value || (input.type === 'checkbox' && !input.checked)) {
                    isValid = false;
                    if (group) group.classList.add('has-error');
                } else {
                    if (group) group.classList.remove('has-error');
                }
            });

            if (!isValid) return;

            submitBtn.disabled = true;
            if (btnSpinner) btnSpinner.style.display = 'block';

            setTimeout(() => {
                if (btnSpinner) btnSpinner.style.display = 'none';
                form.style.display = 'none';
                successServiceType.textContent = sumType.textContent;
                successBox.style.display = 'flex';
            }, 1000);
        });

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                form.reset();
                form.style.display = 'block';
                successBox.style.display = 'none';
                submitBtn.disabled = false;
                selectedGoals = [];
                goalChips.forEach(c => c.classList.remove('selected'));
                goalsInput.value = '';
                sumBudget.textContent = 'Not selected';
                sumTimeline.textContent = 'Not selected';
                sumGoals.textContent = 'None selected';
                calculateReadiness();
            });
        }
    }
});




// new
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".studio-reveal-anim");
    revealElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        el.style.transition = `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${(index % 4) * 0.06}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${(index % 4) * 0.06}s`;
        observer.observe(el);
    });
});
// mARQUEE



// hero
document.addEventListener('DOMContentLoaded', () => {

    const bulb = document.querySelector('.hero-object');

    if (!bulb) return;

    const radiusX = 18;
    const radiusY = 12;

    let angle = 0;

    function animateBulbOrbit() {

        angle += 0.012;

        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        gsap.set(bulb, {
            x: x,
            y: y,
            rotation: Math.sin(angle) * 1.2
        });

        requestAnimationFrame(animateBulbOrbit);
    }

    animateBulbOrbit();

});


// agency satatement
document.addEventListener("DOMContentLoaded", () => {

    const rotatingWord =
        document.getElementById("rotatingWord");

    if (!rotatingWord) return;

    const words = [
        "growth",
        "brands",
        "platforms",
        "experiences",
        "results"
    ];

    let currentIndex = 0;

    function changeWord() {

        const nextIndex =
            (currentIndex + 1) % words.length;

        gsap.to(rotatingWord, {
            yPercent: -110,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",

            onComplete: () => {

                rotatingWord.textContent =
                    words[nextIndex];

                gsap.set(rotatingWord, {
                    yPercent: 110,
                    opacity: 0
                });

                gsap.to(rotatingWord, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.55,
                    ease: "power3.out"
                });

                currentIndex = nextIndex;
            }
        });

    }

    setInterval(changeWord, 2200);

});


// brand logos

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
            document.querySelectorAll(
                ".octaneLogoCard"
            );


        if (!cards.length) return;


        /*
         TEMPORARY DEMO LOGOS

         Later replace these URLs
         with actual WebOctane client logos
        */

        const logos = [

            "https://cdn.simpleicons.org/nike/111111",

            "https://cdn.simpleicons.org/adidas/111111",

            "https://cdn.simpleicons.org/shopify/111111",

            "https://cdn.simpleicons.org/wordpress/111111",

            "https://cdn.simpleicons.org/google/111111",

            "https://cdn.simpleicons.org/meta/111111",

            "https://cdn.simpleicons.org/amazon/111111",

            "https://cdn.simpleicons.org/spotify/111111",

            "https://cdn.simpleicons.org/slack/111111",

            "https://cdn.simpleicons.org/notion/111111",

            "https://cdn.simpleicons.org/figma/111111",

            "https://cdn.simpleicons.org/github/111111",

            "https://cdn.simpleicons.org/hubspot/111111",

            "https://cdn.simpleicons.org/mailchimp/111111",

            "https://cdn.simpleicons.org/stripe/111111",

            "https://cdn.simpleicons.org/paypal/111111"

        ];


        let logoPointer = 0;


        /*
         INITIAL LOGOS
        */

        cards.forEach(
            (
                card,
                index
            ) => {

                const img =
                    card.querySelector(
                        ".octaneChangingLogo"
                    );


                if (!img) return;


                img.src =
                    logos[
                        index %
                        logos.length
                    ];


                gsap.to(
                    img,
                    {
                        opacity: 1,

                        scale: 1,

                        duration: 0.7,

                        delay:
                            index * 0.08,

                        ease:
                            "power3.out"
                    }
                );

            }
        );


        logoPointer =
            cards.length;


        /*
         CHANGE ONE CARD
         AT A TIME
        */

        function changeLogo() {

            const randomCard =
                cards[
                    Math.floor(
                        Math.random() *
                        cards.length
                    )
                ];


            const img =
                randomCard.querySelector(
                    ".octaneChangingLogo"
                );


            if (!img) return;


            gsap.to(
                img,
                {
                    opacity: 0,

                    scale: 0.78,

                    y: 10,

                    duration: 0.32,

                    ease:
                        "power2.in",

                    onComplete: () => {

                        img.src =
                            logos[
                                logoPointer %
                                logos.length
                            ];


                        logoPointer++;


                        gsap.set(
                            img,
                            {
                                y: -10,

                                scale: 0.78
                            }
                        );


                        gsap.to(
                            img,
                            {
                                opacity: 1,

                                scale: 1,

                                y: 0,

                                duration: 0.55,

                                ease:
                                    "power3.out"
                            }
                        );

                    }

                }
            );

        }


        /*
         AUTOMATIC CHANGE
        */

        setInterval(
            changeLogo,
            1800
        );

    }
);


// cards 

document.addEventListener("DOMContentLoaded", () => {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    const stage =
        document.getElementById(
            "woRadialStage"
        );


    const track =
        document.getElementById(
            "woRadialWheel"
        );


    const cards =
        gsap.utils.toArray(
            ".wo-card-mount"
        );


    if (
        !stage ||
        !track ||
        !cards.length
    ) {
        return;
    }


    const mm =
        gsap.matchMedia();


    mm.add(
        "(min-width: 1025px)",
        () => {

            const getScrollDistance = () => {

                return Math.max(
                    0,
                    track.scrollWidth -
                    window.innerWidth +
                    window.innerWidth * 0.08
                );

            };


            function updateCards() {

                const viewportCenter =
                    window.innerWidth / 2;


                cards.forEach(
                    card => {

                        const rect =
                            card.getBoundingClientRect();


                        const center =
                            rect.left +
                            rect.width / 2;


                        const normalized =
                            (
                                center -
                                viewportCenter
                            ) /
                            (
                                window.innerWidth /
                                2
                            );


                        const limited =
                            gsap.utils.clamp(
                                -1.2,
                                1.2,
                                normalized
                            );


                        const rotation =
                            limited * 11;


                        const y =
                            Math.abs(
                                limited
                            ) * 38;


                        const scale =
                            1 -
                            Math.min(
                                Math.abs(
                                    limited
                                ),
                                1
                            ) * 0.04;


                        gsap.set(
                            card,
                            {
                                rotation:
                                    rotation,

                                y:
                                    y,

                                scale:
                                    scale,

                                transformOrigin:
                                    "center center",

                                force3D:
                                    true
                            }
                        );

                    }
                );

            }


            gsap.set(
                track,
                {
                    x: 0
                }
            );


            updateCards();


            const tween =
                gsap.to(
                    track,
                    {
                        x: () =>
                            -getScrollDistance(),

                        ease:
                            "none",

                        scrollTrigger: {

                            id:
                                "woCardsScroll",

                            trigger:
                                stage,

                            start:
                                "top 72px",

                            end: () =>
                                `+=${
                                    getScrollDistance() +
                                    1000
                                }`,

                            pin:
                                true,

                            scrub:
                                1.1,

                            anticipatePin:
                                1,

                            invalidateOnRefresh:
                                true,


                            snap: {

                                snapTo:
                                    value => {

                                        const steps =
                                            cards.length -
                                            1;


                                        if (
                                            steps <= 0
                                        ) {
                                            return value;
                                        }


                                        return (
                                            Math.round(
                                                value *
                                                steps
                                            ) /
                                            steps
                                        );

                                    },

                                duration: {
                                    min: 0.25,
                                    max: 0.6
                                },

                                delay: 0.06,

                                ease:
                                    "power2.inOut"

                            },


                            onUpdate:
                                updateCards,


                            onRefresh:
                                updateCards

                        }

                    }
                );


            return () => {

                tween.kill();


                const trigger =
                    ScrollTrigger.getById(
                        "woCardsScroll"
                    );


                if (trigger) {
                    trigger.kill();
                }


                gsap.set(
                    track,
                    {
                        clearProps:
                            "transform"
                    }
                );


                cards.forEach(
                    card => {

                        gsap.set(
                            card,
                            {
                                clearProps:
                                    "transform"
                            }
                        );

                    }
                );

            };

        }
    );


    window.addEventListener(
        "load",
        () => {

            ScrollTrigger.refresh();

        },
        {
            once: true
        }
    );

});



// ideas set videoos secyion
document.addEventListener("DOMContentLoaded", () => {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section =
        document.querySelector(".wo-ideas-section");

    const title =
        document.querySelector(".wo-ideas-title");

    const card =
        document.querySelector(".wo-ideas-video-card");

    const video =
        document.querySelector(".wo-ideas-video");

    if (!section || !card) {
        return;
    }


    /* HEADING REVEAL */

    if (title) {

        gsap.fromTo(
            title,
            {
                y: 55,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 78%",
                    once: true
                }
            }
        );

    }


    /* VIDEO CARD SMOOTH ENTRANCE */

    gsap.fromTo(
        card,
        {
            y: 180,
            scale: 0.92,
            opacity: 0
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,

            duration: 1.35,

            ease: "power4.out",

            scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true
            }
        }
    );


    /* SUBTLE VIDEO SCALE */

    if (video) {

        gsap.fromTo(
            video,
            {
                scale: 1.08
            },
            {
                scale: 1,

                duration: 1.6,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true
                }
            }
        );

    }

});





// last sectoj
document.addEventListener("DOMContentLoaded", () => {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const cards =
        gsap.utils.toArray(
            ".wo-final-card"
        );

    if (!cards.length) {
        return;
    }

    gsap.fromTo(
        cards,
        {
            y: 90,
            opacity: 0,
            scale: 0.96
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,

            duration: 1.05,

            stagger: 0.14,

            ease: "power4.out",

            scrollTrigger: {
                trigger:
                    ".wo-final-links-section",

                start:
                    "top 78%",

                once: true
            }
        }
    );

});



// contact

document.addEventListener("DOMContentLoaded", () => {

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
        return;
    }


    /*
    |--------------------------------------------------------------------------
    | Hero
    |--------------------------------------------------------------------------
    */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    heroTimeline
        .from(".hero_line", {
            yPercent: 105,
            opacity: 0,
            duration: 1.05,
            stagger: 0.12
        })
        .from(
            ".contact_hero .contact_reveal",
            {
                y: 24,
                opacity: 0,
                duration: 0.75,
                stagger: 0.1
            },
            "-=0.5"
        );


    /*
    |--------------------------------------------------------------------------
    | Project Section
    |--------------------------------------------------------------------------
    */

    gsap.from(".project_intro", {
        scrollTrigger: {
            trigger: ".project_section",
            start: "top 76%"
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
    });


    ScrollTrigger.batch(".form_reveal", {

        start: "top 88%",

        once: true,

        onEnter: elements => {

            gsap.from(elements, {
                y: 28,
                opacity: 0,
                duration: 0.7,
                stagger: 0.07,
                ease: "power3.out"
            });

        }

    });


    /*
    |--------------------------------------------------------------------------
    | Direct Contact
    |--------------------------------------------------------------------------
    */

    gsap.utils.toArray(".direct_section .contact_reveal").forEach(element => {

        gsap.from(element, {

            scrollTrigger: {
                trigger: element,
                start: "top 88%"
            },

            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | Process Header
    |--------------------------------------------------------------------------
    */

    gsap.from(".process_header", {

        scrollTrigger: {
            trigger: ".process_section",
            start: "top 72%"
        },

        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"

    });


    /*
    |--------------------------------------------------------------------------
    | Process Rows
    |--------------------------------------------------------------------------
    */

    gsap.utils.toArray(".process_row").forEach((row, index) => {

        gsap.from(row, {

            scrollTrigger: {
                trigger: row,
                start: "top 88%"
            },

            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.03,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | Final CTA
    |--------------------------------------------------------------------------
    */

    gsap.from(".cta_title", {

        scrollTrigger: {
            trigger: ".contact_cta",
            start: "top 78%"
        },

        y: 55,
        opacity: 0,
        scale: 0.985,
        duration: 1,
        ease: "power3.out"

    });


    gsap.from(".cta_bottom", {

        scrollTrigger: {
            trigger: ".contact_cta",
            start: "top 68%"
        },

        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out"

    });

});





// about
document.addEventListener("DOMContentLoaded", function () {

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /*
    |--------------------------------------------------------------------------
    | ALWAYS KEEP CONTENT VISIBLE
    |--------------------------------------------------------------------------
    */

    gsap.set([
        ".reveal_item",
        ".service_block",
        ".process_row",
        ".why_row",
        ".team_member",
        ".working_panel_text",
        ".final_link_card",
        ".image_reveal"
    ], {
        opacity: 1,
        visibility: "visible"
    });


    if (reduceMotion) {
        return;
    }


    /*
    |--------------------------------------------------------------------------
    | HERO
    |--------------------------------------------------------------------------
    */

    const heroLines = document.querySelectorAll(
        ".hero_title_line > span"
    );

    if (heroLines.length) {

        gsap.from(heroLines, {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out"
        });

    }


    const heroLabel = document.querySelector(".hero_label");

    if (heroLabel) {

        gsap.from(heroLabel, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        });

    }


    const heroCopy = document.querySelector(".about_hero_copy");

    if (heroCopy) {

        gsap.from(heroCopy, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out"
        });

    }


    /*
    |--------------------------------------------------------------------------
    | NORMAL REVEALS
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".reveal_item").forEach(function (item) {

        gsap.from(item, {

            scrollTrigger: {
                trigger: item,
                start: "top 92%",
                toggleActions: "play none none none"
            },

            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | IMAGES
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".image_reveal").forEach(function (wrapper) {

        const img = wrapper.querySelector("img");

        gsap.from(wrapper, {

            scrollTrigger: {
                trigger: wrapper,
                start: "top 90%",
                toggleActions: "play none none none"
            },

            y: 40,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out"

        });


        if (img) {

            gsap.from(img, {

                scrollTrigger: {
                    trigger: wrapper,
                    start: "top 90%"
                },

                scale: 1.04,
                duration: 1.1,
                ease: "power3.out"

            });

        }

    });


    /*
    |--------------------------------------------------------------------------
    | SERVICES
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".service_block").forEach(function (card) {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 92%"
            },

            y: 35,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | PROCESS
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".process_row").forEach(function (row) {

        gsap.from(row, {

            scrollTrigger: {
                trigger: row,
                start: "top 94%"
            },

            y: 28,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | WHY WEBOCTANE
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".why_row").forEach(function (row) {

        gsap.from(row, {

            scrollTrigger: {
                trigger: row,
                start: "top 92%"
            },

            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | TEAM
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".team_member").forEach(function (member) {

        gsap.from(member, {

            scrollTrigger: {
                trigger: member,
                start: "top 92%"
            },

            y: 30,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | WORKING WITH US
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".working_panel").forEach(function (panel) {

        const content = panel.querySelector(".working_panel_text");

        if (!content) {
            return;
        }

        gsap.from(content, {

            scrollTrigger: {
                trigger: panel,
                start: "top 85%"
            },

            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | FINAL CARDS
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll(".final_link_card").forEach(function (card) {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 92%"
            },

            y: 35,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out"

        });

    });


    /*
    |--------------------------------------------------------------------------
    | REFRESH AFTER IMAGES LOAD
    |--------------------------------------------------------------------------
    */

    window.addEventListener("load", function () {

        ScrollTrigger.refresh();

    });

});



// ser
