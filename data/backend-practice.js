const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response); // response is a proeprty.
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); // Asynchronous code. Doesnt wait to execute next lines of code.