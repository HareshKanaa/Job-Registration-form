export const validateSelectBox = (value, field) => {
  console.log(value, field);
  if (value !== "" || document.getElementById(field).value !== "") {
    parent.classList.remove('invalid');
    return true;
  } else {
    const parent = document.getElementById(field).parentNode;
    const error = document.getElementById(`select-${field}`);
    parent.classList.add('invalid');
    error.innerText = `${field} is not selected`;
    return false;
  }
}

export const validateFile = (file, field) => {
  const element = document.getElementById(field);
  const error = document.getElementById(`file-${field}`);
  if (!file || file == undefined || file == null) {
    error.innerText = `${field} is not selected`;
  } else if(file.size > 1024 * 1024 * 2) {
    error.innerText = `${field} must be less than 2MB`;
  } else if(file.type !== 'application/pdf' && file.type !== 'application/msword' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    error.innerText = `${field} must be pdf or doc or docx`;
  } else {
    error.innerText = '';
    element.classList.remove('invalid');
    return true;
  } 
  element.classList.add('invalid');
  return false;
}

export const validateMultiple = (type, inputs, field, count = 1) => {
  const parent = document.getElementById(field);
  const error = document.getElementById(`${type}-${field}`); 
  let checked = 0;
  let value = "";
  inputs.forEach((input) => {
    if(input.checked) {
      checked++;
      value = input.id;
    }
  });
  if(checked < count) {
    console.log(`inside ${type}`, `${type}-${field}`);   
    error.innerText = `${field} is not selected`;
    parent.focus();
    console.log(`inside ${type}`, error, parent);
    parent.classList.add('invalid');
    return {isValid: false, value};
  }
  error.innerText = '';
  parent.classList.remove('invalid');
  return {isValid: true, value};
}

export const validateRadioButtons = (radioButtons, field) => {
  return validateMultiple('radio', radioButtons, field, 1);
}

export const validateCheckbox = (field, count = 1) => {
  const parent = document.getElementById(field);
  const checkboxes = document.getElementById(field).querySelectorAll('input[type="checkbox"]');
  return validateMultiple('checkbox', checkboxes, field, count).isValid;
}
