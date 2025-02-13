//Capture checkbox into variable for use later
themeToggle = document.getElementById('themeToggle')
//Grab cookie from browser
const storedTheme = localStorage.getItem('theme')

//Set the theme for the page based on what theme selected from cookie
if(storedTheme == 'dark'){
    $('html').attr('data-bs-theme','dark')
    themeToggle.checked = true;
}else{
    $('html').attr('data-bs-theme','light')
    themeToggle.checked = false; 
}

//Check for changes in the state of the checkbox
themeToggle.addEventListener('click',() => {
    //if the checkbox is checked, set the dark theme and update cookie
    if(themeToggle.checked){
        $('html').attr('data-bs-theme','dark')
        localStorage.setItem('theme','dark')
    }
    //If checkbox is unchecked, set the light theme and update cookie
    else{
        $('html').attr('data-bs-theme','light')
        localStorage.setItem('theme','light')
    }
})