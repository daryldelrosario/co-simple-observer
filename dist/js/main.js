const boxes = document.querySelectorAll(".box");
const items = document.querySelectorAll(".item");

const options = {
    threshold: 0.5
};

const boxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, options);

const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("slide-in");
        } else {
            entry.target.classList.remove("slide-in");
        }
    });
}, { threshold: 1 });

boxes.forEach(box => {
    boxObserver.observe(box);
});

items.forEach(item => {
    itemObserver.observe(item);
}, options);