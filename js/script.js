/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// variables to manipulate DOM elements

const listContainer = document.getElementsByClassName('student-list');
const studentSelector = document.querySelectorAll('li');
const pageContainer = document.getElementsByClassName('page');

// function to hide all students from page
const hideList = (studentSelector) => {
	for (let i = 0; i < studentSelector.length; i++) {
		studentSelector[i].style.display = 'none';
	} 
};


// function that shows only the first ten students by default
const showPage = (page, studentSelector) => {
	hideList(studentSelector);
	let showStudentList = ( page * 10 );
	
	for (let i = 0; i < studentSelector.length; i++) {
		if ( i >= (showStudentList - 10) && i < showStudentList) {
			studentSelector[i].style.display = 'block';
		} 	
	}
};



// Create and append the pagination links 
const appendPageLinks = (studentSelector) => {
	let pages = Math.ceil(studentSelector.length / 10);
	for (let i = 0; i < pages; i++) {
		createLinkDiv(i + 1);
	}	
};


const createLinkDiv = (pageNum) => {    
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	ul.className='pagination';
	li.innerHTML = `<a href="#">${pageNum}</a>`;
	ul.appendChild(li);
	let pageLinks = ul.lastChild;
    
	// Listens for click on the page links div and assigns pageNum value to showPage
	pageLinks.addEventListener('click', () => {
		showPage(pageNum,studentSelector);
        
	});
};


appendPageLinks(studentSelector);
showPage(1, studentSelector);


let anchors = document.querySelector('a');
anchors.className = 'active';


