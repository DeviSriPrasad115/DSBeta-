let currProg = 0;

function updateProg(val) {
    currProg = Math.min(100,Math.max(0,currProg+val));
    const bar = document.querySelector('.progress');
    bar.style.width = `${currProg}%`;
    bar.textContent = `${currProg}%`;
}