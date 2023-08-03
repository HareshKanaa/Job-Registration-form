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
    const error = document.getElementById(`radio-${field}`);    
    error.innerText = `${field} is not selected`;
    parent.appendChild(error);
    return {isValid: false, value};
  }
  parent.classList.remove('invalid');
  return {isValid: true, value};
}

export const validateSelectBox = (value, field) => {
  console.log(value, field);
  if (value !== "" || document.getElementById(field).value !== "") {
    parent.classList.remove('invalid');
    return true;
  } else {
    const parent = document.getElementById(field).parentNode;
    const error = document.getElementById(`select-${field}`);
    console.log(error);
    console.log(parent);
    // issue is here text in the error field doesn't display
    parent.classList.add('invalid');
    error.innerText = `${field} is not selected`;
    return false;
  }
}

export const validateFile = (value, field) => {
  const element = document.getElementById(field);
  const file = document.getElementById(field).files[0];
  const error = document.getElementById(`file-${field}`);
  console.log(value, field);
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

