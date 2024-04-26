const formData = {
  email: '',
  message: '',
};
const formEl = document.querySelector('.feedback-form');
if (localStorage.getItem('feedback-form-state')) {
  formData.email = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  formData.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  formEl.email.value = formData.email;
  formEl.message.value = formData.message;
}

formEl.addEventListener('input', () => {
  formData.email = formEl.email.value.trim();
  formData.message = formEl.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  formEl.reset();
});
