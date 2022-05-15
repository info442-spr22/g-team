import rough from "roughjs/bundled/rough.esm";

export default function drawSelectedBox(element, generator) {
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
}