var photos = document.querySelectorAll(".photo")
var container = document.getElementById('cursor-container');
var scrollContainer = document.getElementById('scroll-text-container');
const span = document.querySelector('.karaoke span');
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', function (event) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    updateCirclePosition();
});

document.addEventListener('scroll', function () {
    updateCirclePosition();
});

function updateCirclePosition() {
    container.style.left = cursorX + window.scrollX + 'px';
    container.style.top = cursorY + window.scrollY + 'px';
}
photos.forEach(function (photo) {
    var arrow = document.getElementById("arrow")
    photo.addEventListener('mouseenter', function () {
        container.style.transform = 'translate(-50%, -50%) scale(4)'
        arrow.style.display = 'block';
    });
    photo.addEventListener('mouseleave', function () {
        container.style.transform = 'translate(-50%, -50%) scale(1)';
        arrow.style.display = 'none';
    });
});

const sp = document.querySelector('.karaoke span');
const targetEl = document.getElementById('text-gradient');
let isVisible = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isVisible = true;
        } else {
            isVisible = false;
        }
    });
});

observer.observe(targetEl);

window.addEventListener('scroll', () => {
    if (isVisible) {
        const rect = targetEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        const progress = (windowHeight - rect.top) / (windowHeight + elementHeight);
        const scalingFactor = 0.1; // Adjust this value to control the speed (0.1 means 10% speed)
        const backgroundPosition = progress * 100;
        sp.style.backgroundPosition = `${-backgroundPosition}% center`;
    }
});


let lastScrollTop = 0;
const runningText = document.getElementById('running-text');

window.addEventListener('scroll', function () {
    let rect = runningText.getBoundingClientRect();
    let scrollTop = rect.top;
    runningText.style.transform = `matrix3d(1, 0, 0, 0,
                                                     0, 1, 0, 0,
                                                     0, 0, 1, 0,
                                                     ${-scrollTop}, 0, 0, 1)`;
});
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function changeBackgroundOnScroll() {
    var targetElement = document.querySelector('footer');
    if (isElementInViewport(targetElement)) {
        document.body.style.backgroundColor = '#fff';
    } else {
        document.body.style.backgroundColor = '';
    }
}
window.addEventListener('scroll', changeBackgroundOnScroll);




window.addEventListener('scroll', function () {
    var first_moving_images = document.getElementById('first-moving-images')
    var second_moving_images = document.getElementById('second-moving-images')
    var third_moving_images = document.getElementById('third-moving-images')
    var fourth_moving_images = document.getElementById('fourth-moving-images')
    var moving_images_wrapper = document.getElementById('moving-images-wrapper')
    let rect = moving_images_wrapper.getBoundingClientRect();
    let scrollTop = rect.top;
    
    first_moving_images.style.transform = `rotate(45deg) translate(0%, -120%) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,${scrollTop/10}, 0, 0, 1)`;
    second_moving_images.style.transform = `rotate(45deg) translate(-45%, -91%) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,${-scrollTop/10}, 0, 0, 1)`;
    third_moving_images.style.transform = `rotate(45deg) translate(-100%, -62%) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,${(scrollTop)/10}, 0, 0, 1)`;
    fourth_moving_images.style.transform = `rotate(45deg) translate(-110%, -33%) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,${(-scrollTop)/10}, 0, 0, 1)`;
});