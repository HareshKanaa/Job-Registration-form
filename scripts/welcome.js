import { data } from ".";

const header = document.getElementsByClassName("header")[0];
header.innerHTML = `
  <h1 class="title">
  Successfully applied for job ${data.firstName} ${data.lastName}!
  </h1>
`;
const content = document.getElementsByClassName("content")[0];
content.innerHTML = `
  <div class="left">
    <div class="input-row">
      <h1 class="label">Experience is ${data.experience}</h1>
    </div>

`;
