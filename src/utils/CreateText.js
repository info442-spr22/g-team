export default function createText(ctx, textElement) {
  // set textbox parameters
  ctx.font = textElement.size + " " + textElement.font
  ctx.fillStyle = textElement.style
  let align = textElement.align
  ctx.textAlign = align

  // add selection information
  let metrics = ctx.measureText(textElement.text)
  let width = metrics.width
  let height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent // code from here: https://stackoverflow.com/a/45789011
  let x = textElement.location.x
  let y = textElement.location.y
  textElement.selectInfo = {
    width: width,
    height: height,
    x: align === "left" ? x
                        : align === "center" ? x + width / 2
                                             : x + width,
    y: y
  }

  // draw textbox
  ctx.fillText(textElement.text, x, y + height)

  return textElement;
}