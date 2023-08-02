// import validateTextField from "./validateTextField";

export const validateRadioButtons = (radioButtons, field) => {
  let checked = false;
  let value = "";
  console.log(radioButtons, field);
  try {
    radioButtons.forEach((radioButton) => {
      if(radioButton.checked) {
        checked = true;
        value = radioButton.id;
      }
    });
    if(!checked) {
      throw new Error('No option selected');
    }
  } catch (err) {
    console.log(err);
    const parent = document.getElementById('gender-container');
    const error = document.createElement('div');
    error.classList.add('error');
    error.style.left = '7%';
    error.innerText = `${field} is not selected`;
    parent.appendChild(error);

    return {isValid: false, value};
  }
  return {isValid: true, value};
}

export const validateSelectBox = (value, field) => {
  if (value !== "" || document.getElementById(field).value !== "") {
    return true;
  } else {
    const parent = document.getElementById(field).parentNode;
    const error = document.createElement('div');
    error.classList.add('error');
    parent.classList.add('invalid');
    error.innerText = `${field} is not selected`;
    parent.appendChild(error);
    return false;
  }
}

export const validateFile = (value, field) => {
  const element = document.getElementById(field);
  const file = document.getElementById(field).files[0];
  const parent = document.getElementById(field).parentNode;
  const error = document.createElement('div');
  error.classList.add('error');
  console.log(value, field);
  if (!file || file == undefined || file == null) {
    error.innerText = `${field} is not selected`;
  } else if(file.size > 1024 * 1024 * 2) {
    error.innerText = `${field} must be less than 2MB`;
  } else if(file.type !== 'application/pdf' && file.type !== 'application/msword' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    error.innerText = `${field} must be pdf or doc or docx`;
  } else {
    return true;
  } 
  element.classList.add('invalid');
  parent.appendChild(error);
  return false;
}

