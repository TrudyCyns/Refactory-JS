const firstFocus = () => {
  let uId = document.registration.userId.focus();
  return true;
};

// Validating user ID field.
const idVal = (min, max) => {
  let uId = document.registration.userId;
  let uIdLen = uId.value.length;
  if (uIdLen == 0 || uIdLen < min || uIdLen >= max) {
    uId.focus();
    uId.style.border = '5px solid red';
    return false;
  }
};
