// Home PAGE//

document.querySelectorAll(".pack").forEach((pack) => {
  const casing = pack.querySelector(".casing-frame");

  pack.addEventListener("click", () => {
    if (pack.classList.contains("rise-up")) return;

    pack.classList.add("rise-up");
    if (casing) casing.classList.add("rise-up");

    pack.addEventListener(
      "animationend",
      () => {
        pack.classList.remove("rise-up");
        if (casing) casing.classList.remove("rise-up");
        window.location.href = pack.dataset.link;
      },
      { once: true }
    );
  });
});
