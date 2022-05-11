import rough from "roughjs/bundled/rough.esm";

export default function drawSelectedBox(element, setSelectedBox, generator) {
  const {x1, x2, y1, y2} = element
  const canvas = document.getElementById("canvas")
  const roughCanvas = rough.canvas(canvas)
  let selectorBox = generator.rectangle(
      x1 - 8, y1 - 8, Math.abs(x1 - x2) + 16, Math.abs(y1 - y2) + 16,
      {strokeLineDash: [10, 10]}
  )
  roughCanvas.draw(selectorBox)
  setSelectedBox(selectorBox)
}