const icons = [
  "/icons/brand-python.svg",
  "/icons/brand-golang.svg",
  "/icons/brand-c-sharp.svg",
  "/icons/brand-javascript.svg",
  "/icons/brand-typescript.svg",
  "/icons/brand-react.svg",
  "/icons/brand-aws.svg",
  "/icons/sql.svg",
  "/icons/brand-git.svg",
];

const container = document.getElementById("icons-container");

async function loadIcons() {
  for (let i = 0; i < icons.length; i++) {
    try {
      const response = await fetch(icons[i]);
      const svg = await response.text();
      const div = document.createElement("div");
      div.innerHTML = svg;
      const svgElement = div.querySelector("svg");
      svgElement?.setAttribute("width", "72");
      svgElement?.setAttribute("height", "72");
      svgElement?.classList.add("text-blue-100");
      if (svgElement) container?.appendChild(svgElement);
    } catch (err) {
      console.error("Error fetching SVG: ", err);
    }
  }
  container?.classList.add("fade-in", "opacity-0", "grid");
  container?.classList.remove("hidden");
  setTimeout(() => {
    container?.classList.remove("opacity-0");
    container?.classList.add("opacity-100");
  }, 200);
}

loadIcons();
