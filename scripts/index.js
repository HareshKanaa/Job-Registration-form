import { validateRadioButtons, validateSelectBox, validateFile } from './validate.js';
import validateTextField from './validateTextField.js';

const textFields = ['firstName', 'lastName', 'phone', 'email', 'address',
  'college', 'cgpa', 'coverLetter', 'expectedSalary', 'reference'];	
const GenderRadioButtons = ['male', 'female', 'other'];
const SelectBoxes = ['country', 'state', 'city', 'experience', 'role'];
const Files = ['resume'];

const data = {};
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  let allValid = true;
  allValid = validateInput('text', textFields, validateTextField) && allValid;
  allValid = GenderValidation() && allValid;
  allValid = validateInput('select', SelectBoxes, validateSelectBox) && allValid;
  allValid = validateInput('file', Files, validateFile) && allValid;
  if(!allValid) {
    e.preventDefault();
  }
  console.log(data);
});
form.addEventListener('reset', () => {
  const errors = document.querySelectorAll('.error');
  errors.forEach((error) => {
    error.remove();
  });
  const invalids = document.querySelectorAll('.invalid');
  invalids.forEach((invalid) => {
    invalid.classList.remove('invalid');
  });
});


function GenderValidation() {
  try {
    const {isValid, value} = validateRadioButtons(
      GenderRadioButtons.map((field) => document.getElementById(field)), 
      "gender"
    );
    console.log(isValid, value);
    data.gender = value;
    return isValid;
  } catch (err) {
    console.log(err);
  }
}

function validateInput(type, values, callback) {
  let allValid = true;
  values.forEach((field) => {
    try{
      const element = document.getElementById(field);
      data[field] = type=='file'?element.files[0]:element.value;
      allValid = callback(data[field], field) && allValid;
    } catch (err) {
      console.log(err);
      console.log(field);
    }
  });
  return allValid;
}