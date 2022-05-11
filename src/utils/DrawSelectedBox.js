import rough from "roughjs/bundled/rough.esm";

export default function drawSelectedBox(element, setSelectedBox, generator) {
  const type = element.roughElement.shape
  const {x1, x2, y1, y2} = element
  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const canvas = document.getElementById("canvas")
  const roughCanvas = rough.canvas(canvas)
  let selectorBox;
  switch(type) {
    case ("rectangle"):
    case ("line"):
    case ("square"):
        selectorBox = generator.rectangle(
          minX - 8, minY - 8, Math.abs(x1 - x2) + 16, Math.abs(y1 - y2) + 16,
          {strokeLineDash: [10, 10]}
        )
        break
    default:
  }
  roughCanvas.draw(selectorBox)
  setSelectedBox(selectorBox)
}