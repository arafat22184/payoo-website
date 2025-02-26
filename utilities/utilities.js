function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInnerTextByID(id) {
  const innerText = document.getElementById(id).innerText;
  const convertedInnerText = parseFloat(innerText);
  return convertedInnerText;
}

function setInnerTextByIdandValue(id, value) {
  const setInnerTextValue = document.getElementById(id).innerText = value;
  return setInnerTextValue;
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

function formatDate() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    return `Today ${timeString}`;
}