import rough from "roughjs/bundled/rough.esm";

export default function drawSelectedBox(element, setSelectedBox, generator) {
  const {x1, x2, y1, y2} = element
  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const canvas = document.getElementById("canvas")
  const roughCanvas = rough.canvas(canvas)
  let selectInfo = element.selectInfo
  let selectorBox = generator.rectangle(
        selectInfo.x - 8, selectInfo.y - 8,
        selectInfo.width + 16,
        selectInfo.height + 16,
        {strokeLineDash: [10, 10]}
  )
  roughCanvas.draw(selectorBox)
  setSelectedBox(selectorBox)
}