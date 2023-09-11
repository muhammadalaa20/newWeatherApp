
let keyWords = ['alexandria',
                'cairo',
                'giza',
                'luxor',
                'aswan',
                'hurghada',
                'paris',
                'london',
                'new york',
                'tokyo',
                'berlin',
                'rome',
                'madrid',
                'istanbul',
                'moscow',
                'dubai',
                'singapore',
                'barcelona',
                'amsterdam',
                'prague',
                'washington',
                'boston',
];

const inputBox= document.getElementById('input-box');
const resultsBox= document.querySelector('.result-box');

inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = keyWords.filter((keyword)=>{
     return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result); 
  }
  display(result);
  if(result.length === 0){
    resultsBox.innerHTML = '';
  }
};

function display(result){
  const content= result.map((list)=>{
    return `<li onclick=selectInput(this)>${list}</li>`;
});
resultsBox.innerHTML = `<ul>${content.join('')}</ul>`
};


function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}