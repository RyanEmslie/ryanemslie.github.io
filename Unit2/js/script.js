
const findChild = document.querySelector('.page');
const div = document.createElement("div");
div.setAttribute("class","pagination");
findChild.appendChild(div);    
const ul = document.createElement("ul");
div.appendChild(ul);
const li = document.createElement('li');
ul.appendChild(li);
const a = document.createElement('a');
a.setAttribute('id', 'link1');
a.setAttribute('class', 'active');
a.setAttribute('href', '#');
a.textContent = '1';
li.appendChild(a);


var aLink = [];


//Determines the number of students in list
function findNumStudents() {
  
    const numStudents = document.querySelectorAll('.student-item');
    const numPages = Math.ceil((numStudents.length / 10));
    return numPages;
};


//Function creates Pagination at bottom of page based on number of students
function createLi(){
    var listItems = [];
    

  for (var i = 2; i <= (findNumStudents()); ++i) {
        listItems[i] = document.createElement('li');
        ul.appendChild(listItems[i]);
        aLink[i] = document.createElement('a');
        aLink[i].setAttribute('id', 'link'+i);
        aLink[i].setAttribute('href', '#');
        aLink[i].textContent = i;
        listItems[i].appendChild(aLink[i]);
         
  }
  return listItems;
};


//Clears the list of students
function hideAll() {
    let hideAllItems = document.querySelectorAll('.student-item');
    
    for (i=0; i < hideAllItems.length; i++) {
    hideAllItems[i].style.display = "none";
    };
};


//Display correct list of students
function showSelected(min, max) {
    
    hideAll();
    
    let el = document.querySelectorAll('.student-item');
    
    for ( i = min; i < (min + (max - min)); i++ ) {
        el[i].style.display = 'block';
        console.log((i+1), el[i]);
    };
    
    
};


findNumStudents();
createLi();
hideAll();
showSelected(0, 10);


/*document.getElementById("link1").onclick = function() {showSelected(0, 10)};
document.getElementById("link2").onclick = function() {showSelected(10, 20)};
document.getElementById("link3").onclick = function() {showSelected(21, 30)};
document.getElementById("link4").onclick = function() {showSelected(31, 40)};
document.getElementById("link5").onclick = function() {showSelected(41, 50)};
document.getElementById("link6").onclick = function() {showSelected(51, 60)};
document.getElementById("link7").onclick = function() {showSelected(61, 70)};
*/