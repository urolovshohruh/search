const API = 'https://jsonplaceholder.typicode.com/users';
let _ul = document.querySelector('.list');
let _input = document.querySelector('.input-search');



async  function  getUsers()
{
   let response = await fetch(API);
   response = await response.json();

   return response

}

async function sendUserInfo()
{
let users = await getUsers();
users.forEach( (user) =>
{
let _li = document.createElement('li');
_li.innerHTML = user.name
_ul.appendChild(_li)
})
}
sendUserInfo()


_input.addEventListener('input', async (event) =>

{
  let users = await getUsers();
  let inputText = event.target.value.toUpperCase();  
  _ul.innerHTML = ""
  users = users.filter(user => user.name.toUpperCase().includes(inputText));
  console.log(users)
  users.forEach((user) =>
  {
    let _li = document.createElement('li');
    _li.innerHTML = user.name;
    _ul.appendChild(_li);
  })
   

})
