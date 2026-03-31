(function () {
  const now = Date.now();
  const start = Date.UTC(2026, 2, 31, 0, 0, 0); // 2026-03-31T00:00:00Z
  const end = Date.UTC(2026, 3, 2, 0, 0, 0);    // 2026-04-02T00:00:00Z

  if (now < start || now >= end) {
    return;
  }

  const hideBanner = window.location.hostname === "hub.jmonkeyengine.org";

  window.CrabBonkConfig = {
    assetBase: "https://rcrabengine.github.io/CrabBonk/crab-bonk-assets/",
    bottomOffset: 48
  };

  const script = document.createElement("script");
  script.src = "https://rcrabengine.github.io/CrabBonk/crab-bonk.js";
  script.async = true;
  script.onload = () => console.log("CrabBonk loaded!");
  script.onerror = () => console.error("Failed to load CrabBonk");
  document.head.appendChild(script);

  function addBanner() {
    if (hideBanner) {
      return;
    }

    const link = document.createElement("a");
    link.href = "https://hub.jmonkeyengine.org/t/jmonkeyengine-is-dead-long-live-rcrabengine/49445";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "jMonkeyEngine is rebranding to rCrabEngine — click to discover more";

    Object.assign(link.style, {
      pointerEvents: "none",
      position: "fixed",
      left: "0",
      right: "0",
      bottom: "0",
      display: "block",
      padding: "6px 3px",
      background: "#111",
      color: "#fff",
      textAlign: "center",
      textDecoration: "none",
      fontFamily: "sans-serif",
      fontSize: "10px",
      zIndex: "999999",
      opacity: "0.7"
    });

    link.addEventListener("mouseenter", () => {
      link.style.textDecoration = "underline";
    });

    link.addEventListener("mouseleave", () => {
      link.style.textDecoration = "none";
    });

    document.body.appendChild(link);
  }

  if (document.body) {
    addBanner();
  } else {
    window.addEventListener("DOMContentLoaded", addBanner);
  }
})();
