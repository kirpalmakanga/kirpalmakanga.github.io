export default function scrollToY(
    scrollTargetY = 0,
    speed = 2000,
    easing = 'easeOutSine'
) {
    const scrollY = window.scrollY;
    const time = Math.max(
        0.1,
        Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
    );
    const easingEquations = {
        easeOutSine: (pos) => {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: (pos) => {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: (pos) => {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
    };

    let currentTime = 0;

    // add animation loop
    function tick() {
        let p, t;
        currentTime += 1 / 60;

        p = currentTime / time;
        t = easingEquations[easing](p);

        if (p < 1) {
            window.requestAnimationFrame(tick);

            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}
