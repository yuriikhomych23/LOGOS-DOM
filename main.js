//DOM: document object model -  

// console.log(document.body);
// document.body.style.backgroundColor = 'blue';


// console.log(document.body.children[3])

// console.log(document.getElementById('link'));
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('div'));

// //document.getElementsByName('');
// console.log(document.querySelector('#link')); // це один любий елемент: клас айді тег і так далі: вказується селектор 

// console.log(document.querySelectorAll('#link, .text, ul>li')); // повертає масив зі всіх еементів які ми хочемо відібрати 


// let link = document.getElementById('link');

// // console.log(link.innerHTML);
// // console.log(link.innerText); // повертає тільки текст 

// // link.innerHTML = '<u>Google</u>'; // змінили link на google
// // link.innerText = '<u>Google</u>'; // поверне просто стрічку <u>Google</u>
// // link.innerHTML += ' to Google'; // link to google // доплюсувало стрічку 


// link.style.display = 'block';
// link.style.width = '100px';
// link.style.height = '40px';
// link.style.border = '1px solid #000';

// link.href = 'https://www.google.com';
// link.target = '_blanck'; // відкриває google на новій сторінці


// console.log(link.parentElement); // покаже батьківський елемент тегу link 
// console.log(link.previousElementSibling);  // покаже сусідній елемент 
// console.log(link.nextElementSibling);  // покаже наступний тег після link


// let text = prompt('write something');
// let color = prompt('write a color');

// let box = document.getElementById('box');

// box.innerHTML = `<h2 style="color:${color}">${text}</h2>`




//непрацює !!!!!!!!!!!!!!!!!!!!!!!!!
// let countLi = +prompt('write count li');
// let textLi = pormpt('text')
// let colorLi = prompt('wtite a color');
// let backLi = prompt('write a backgroundcolor');

// let box = document.querySelector('#box');
// let li = '';
// for (let i = 0; i < countLi; i++) {
//     let newLi = `<li style="color: ${colorLi}; background: ${backLi}">${textLi}</li>`;
//     li += newLi
// }

//     box.innerHTML = `<u>${li}</u>`




//
// let tagDiv = document.createElement('div');
// let tagP = document.createElement('p');

// tagP.innerText = 'create element';
// tagP.style.color = 'gold';

// tagDiv.appendChild(tagP);

// document.getElementById('box').appendChild(tagDiv);









// let block = document.querySelector('.block')
// let list = prompt('ol ul');
// let count = prompt('count');
// let text = prompt('text');
// let color = prompt('color ');
// let back = prompt('back of block');



// let tagList = document.createElement(list); 
// for (let i = 0; i < count; i++) {
//     let tagLi = document.createElement('li');
//     tagLi.style.color = color;
//     tagLi.innerText = text;
//     tagList.appendChild(tagLi);
// }

// block.appendChild(tagList);
// block.style.backgroundColor = back;


