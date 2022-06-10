let cur = 0;
const container = document.querySelector("#venus-container");
const divs = container.querySelectorAll("div");
let s = genStyle();
init();

function init() {
  tick();
  window.setTimeout(() => {
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("invisible");
    }
    window.setInterval(next, 1200);
  }, 500);
}

function tick() {
  const prev = preventOverflow(cur - 1);
  const next = preventOverflow(cur + 1);
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    if (i === cur) {
      div.style.transform = transform(s.v1);
    } else if (i === prev) {
      div.style.transform = transform(s.v2);
    } else if (i === next) {
      div.style.transform = transform(s.v3);
    } else {
      div.style.transform = transform(s.v4);
    }
  }
}

/**
 *
 * @param {number} val 1 or -1;
 * @returns
 */
function moveCur(val) {
  cur = preventOverflow(cur + val);
  return;
}

function preventOverflow(val, min = 0, max = divs.length - 1) {
  if (val < min) {
    return max;
  }
  if (val > max) {
    return min;
  }
  return val;
}

function genStyle() {
  const parentWidth = container.clientWidth;
  const parentHeight = container.clientHeight;
  const s = {
    v1: {
      offsetX: 0,
      offsetY: Math.floor(parentHeight / 2),
      scale: 1,
    },
    v2: {
      offsetX: Math.floor(parentWidth / 2) * -1,
      offsetY: 0,
      scale: 0.3,
    },
    v3: {
      offsetX: Math.floor(parentWidth / 2),
      offsetY: 0,
      scale: 0.3,
    },
    v4: {
      offsetX: 0,
      offsetY: Math.floor(parentHeight / 2) * -1,
      scale: 0,
    },
  };
  return s;
}

function transform({ offsetX, offsetY, scale }) {
  return `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`;
}

function prev() {
  moveCur(-1);
  tick();
}

function next() {
  moveCur(1);
  tick();
}
