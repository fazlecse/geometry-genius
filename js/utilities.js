// getInputValueToId
function getInputFieldToId(fieldId1) {
    const fieldValue = document.getElementById(fieldId1);
    const fieldValueString = fieldValue.value;
    const fieldValueNumber = parseFloat(fieldValueString);
    fieldValue.value = "";
    return fieldValueNumber
}

// setValueToId
function setValueToId(valueSetId, value) {
    const elementId = document.getElementById(valueSetId);
    elementId.innerText = value;
}

// setInnerHtmlToId
function setInnerHtmlToId(setId, shapeType, area){
    const innerHtmlSetId = document.getElementById(setId);
    const count = innerHtmlSetId.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${count + 1} ${shapeType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    p.classList.add("my-2");
    innerHtmlSetId.appendChild(p);
}