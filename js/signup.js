/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const contactform = document.querySelector('.contact_form');
const disibleControl = document.querySelector('.disible-control');

contactform.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const password = document.querySelector('#password').value;
  const password_confirm = document.querySelector('#password_confirm').value;

  if (name == '' || email == '' || password == '' || password_confirm == '') {
    popup(warning, 'Please fill empty fields!!');

    return 0;
  }
  disibleControl.style.display = 'block';
  try {
    const res = await axios.post(`${globalURL}/api/v1/user/signup`, {
      name,
      email,
      password,
      password_confirm,
    });
    document.cookie = `jwt=${res.data.token}`;
    localStorage.setItem(`user_id`, `${res.data.data.user._id}`);
    localStorage.setItem(`user_email`, `${res.data.data.user.email}`);
    localStorage.setItem(`user_name`, `${res.data.data.user.name}`);
    popup(success, 'Account created successfully');
    setTimeout(() => {
      location.assign('./blog.html');
    }, 3000);
  } catch (error) {
    console.log(error);
    disibleControl.style.display = 'none';
    if (error.response?.data?.message) {
      popup(failure, `${error.response.data.message}`);
    } else {
      popup(failure, `${error.message}`);
    }
  }
});
