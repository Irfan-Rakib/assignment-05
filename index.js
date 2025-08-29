// Shared functions
// call & coin funtion
document.getElementById("call-1").addEventListener("click", function () {
  alert("Calling national emergency number 999 ...");
  const coin = document.getElementById("coin").innerText;
  const finalCoin = Number(coin) - 20;
  if (finalCoin >= 0) {
    document.getElementById("coin").innerText = finalCoin;
  } else {
    alert("You haven't enough coins");
  }
});

// heart funtion
document.getElementById("heart-1").addEventListener("click", function () {
  alert("Congrats! you have gotten 1 heart");
  const heart = document.getElementById("heart").innerText;
  const finalHerat = Number(heart) + 1;
  document.getElementById("heart").innerText = finalHerat;
});

// copy function & alart
document.getElementById("copy-1").addEventListener("click", function () {
  alert("Copied hotline: 999");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-2").addEventListener("click", function () {
  alert("Copied hotline: 999");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-3").addEventListener("click", function () {
  alert("Copied hotline: 999");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-4").addEventListener("click", function () {
  alert("Copied hotline: 1994-999999");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-5").addEventListener("click", function () {
  alert("Copied hotline: 109");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-6").addEventListener("click", function () {
  alert("Copied hotline: 999");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-7").addEventListener("click", function () {
  alert("Copied hotline: 16216");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-8").addEventListener("click", function () {
  alert("Copied hotline: 16445");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});
document.getElementById("copy-9").addEventListener("click", function () {
  alert("Copied hotline: 163");
  const copy = document.getElementById("copy").innerText;
  const finalCopy = Number(copy) + 1;
  document.getElementById("copy").innerText = finalCopy;
});

// copied hotline
const buttons = document.querySelectorAll(".copy-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const card = btn.closest(".card");
    const textElement = card.querySelector(".hotline");
    const textToCopy = textElement.textContent.trim();
    try {
      await navigator.clipboard.writeText(textToCopy);
      btn.textContent = "✔ Copied!";
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
      }, 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  });
});
