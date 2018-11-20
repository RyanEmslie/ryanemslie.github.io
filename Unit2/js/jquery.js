const studentNum = $('.student-item').length;
const numPages = Math.ceil((studentNum / 10));


//Function dynamically creates pagination hyperlinks at buttom of page
function pagination() {
    const el = $('.pagList li a')[0];
    $(el).addClass('active');
    hideAllStudents();
    //create div and ul element
    $('.page').append('<div class="pagination"></div>');
    $('.pagination').append('<ul class="pagList"></ul>');
    //create hyperlinks based on number of students at least 10 per page
    for ( i = 1; i <= numPages; i++) {  
        $('.pagList').append('<li><a href="#">' + i + '</a></li>');
    };
};


//Function show list of student based on entered range
function showStudents( min, max ) {        
    hideAllStudents();
    for ( i = min - 1; i <= max; i++ ) {
        $('.student-item:eq(' + i + ')').show();
    };
};


//Function that hides all students from view
function hideAllStudents() {
    for ( i = 0; i < studentNum; i++ ){
        $('.student-item:eq('+ i +')').hide();
    }
};


//Function searches through students and hides all students NOT found
function findFunc() {
    let input = $('#myInput').val();
    //console.log(input);
    let filter =input.toUpperCase();
    console.log('This is what was typed ' + filter);
    let searchH3 = $('.student-details h3');
    $( "searchH3:contains(filter)" ).css( "text-decoration", "underline" );
    for ( i = 0; i < searchH3.length; i++ ){        
    
        if (searchH3[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            $('.student-item:eq('+ i +')').show();
        } else {
            $('.student-item:eq('+ i +')').hide();
        }
    }
};


pagination();
showStudents(1, 9);

$( '.pagList li a' ).click(function() {
    $('.pagList li a').removeClass("active");
    $(this).addClass('active');
    let parseRange = parseInt(this.textContent);
    let tempMin = ((parseRange * 10 ) - 9);
    let tempMax = (parseRange * 10 );
    showStudents(tempMin, tempMax);
});






