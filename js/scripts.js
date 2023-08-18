// first card Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
    const triangleBase = getInputFieldToId("triangle-b-field");
    const triangleHeight = getInputFieldToId("triangle-h-field");
    const area = 0.5 * triangleBase * triangleHeight;
    setValueToId("triangle-area", area)
    setInnerHtmlToId("area-calculation-list", "Triangle", area)
});

// second card Rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    const rectangleWidth = getInputFieldToId("rectangle-w-field");
    const rectangleLength = getInputFieldToId("rectangle-l-field");
    const area = rectangleWidth * rectangleLength;
    setValueToId("rectangle-area", area)
    setInnerHtmlToId("area-calculation-list", "Rectangle", area)
});

// third card parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const parallelogramBase = getInputFieldToId("parallelogram-b-field");
    const parallelogramHeight = getInputFieldToId("rectangle-l-field");
    const area = parallelogramBase * parallelogramHeight;
    setValueToId("parallelogram-area", area)
    setInnerHtmlToId("area-calculation-list", "Parallelogram", area)
});


