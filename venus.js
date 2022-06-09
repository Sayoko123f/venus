let cur = 0;
const container = document.querySelector("#venus-container");
const divs = container.querySelectorAll("div");
let s = genStyle();

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
      div.style.transform = transform(0, s.v1OffsetY, 1);
    } else if (i === prev) {
      div.style.transform = transform(s.v2OffsetX, 0, 0.3);
    } else if (i === next) {
      div.style.transform = transform(s.v3OffsetX, 0, 0.3);
    } else {
      div.style.transform = transform(0, s.v4OffsetY, 0);
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
  const { parentWidth, parentHeight } = getParentSize();
  const s = {};
  s.v1OffsetY = Math.floor(parentHeight / 2);
  s.v2OffsetX = Math.floor(parentWidth / 2) * -1;
  s.v3OffsetX = Math.floor(parentWidth / 2);
  s.v4OffsetY = Math.floor(parentHeight / 2) * -1;
  return s;
}

function getParentSize() {
  return {
    parentWidth: container.clientWidth,
    parentHeight: container.clientHeight,
  };
}

function transform(x, y, scale = 1) {
  return `translateX(${x}px) translateY(${y}px) scale(${scale})`;
}

function prev() {
  moveCur(-1);
  tick();
}

function next() {
  moveCur(1);
  tick();
}

init();
// document.querySelector("#prev").addEventListener("click", prev);
// document.querySelector("#next").addEventListener("click", next);
