const validateTextField = (value, field) => {
  document.getElementById(field).classList.add('invalid');
  const parent = document.getElementById(field).parentNode;
  const error = document.createElement('div');
  error.classList.add('error');
  // regex for only character &, ., space, , allowed
  const regexText = /^[a-zA-Z&., ]+$/;
  try {
    switch(field) {
      case 'firstName':
      case 'lastName':
        // Regex for name validation
        const regexName = /^[a-zA-Z]+$/;
        if(value.match(regexName) || value.length < 3 || value.length > 30) {
          throw new Error('Invalid Name');
        }
        break;
      case 'email':
        // Regex for email validation
        const regexEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        if(value.match(regexEmail) === null) {
          throw new Error('Invalid Email');
        }
        break;
      case 'username':
        // Regex for username validation
        // allowed symbols -, _, .
        const regexUsername = /^[a-zA-Z0-9._-]{3,30}$/;
        if(value.match(regexUsername) === null) {
          throw new Error('Invalid Username');
        }
        break;
      case 'password':
        // Regex for password validation
        // Minimum eight characters, at least one letter and one number
        const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(value.match(regexPassword) === null) {
          throw new Error('Password must be at least 8 characters long');
        }
        break;
      case 'college':
        if(value.match(regexText) || value.length < 3 || value.length > 80) {
          throw new Error('Invalid Name of Institution');
        }
        break;
      case 'cgpa':
        let cgpa = parseFloat(value);
        if(isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
          throw new Error('must be between 0 and 10');
        }
        break;
      case 'phone':
        // Regex for phone validation
        const regexPhone = /^[0-9]{10}$/;
        if(value.match(regexPhone) === null) {
          throw new Error('Invalid Phone Number');
        }
        break;
      case 'address':
        if(value.length < 20 || value.length > 200) {
          throw new Error('must be between 20 and 200 chars');
        }
        break;
      case 'coverLetter':
        if(value.length < 40 || value.length > 500) {
          error.style.bottom = '-100%';
          throw new Error('must be between 40 and 500 characters');
        }
        break;
      case 'expectedSalary':
        let salary = parseFloat(value);
        if(isNaN(salary) || salary < 0 || salary > 2_000_000) {
          throw new Error('must be between 0 and 2,000,000');
        }
        break;
      case 'reference':
        // Regex for link validation
        const regexLink = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(value.match(regexLink) === null) {
          throw new Error('Invalid Link');
        }
        break;
      default:
        break;
    }
  } catch (err) {
    // console.log(err);
    error.innerText = err.message;
    parent.appendChild(error);
    return false;
  }
  return true;
}

export default validateTextField;