//Capture checkbox into variable for use later
themeToggle = document.getElementById('themeToggle')
//Grab cookie from browser
const storedTheme = localStorage.getItem('theme')

//Set the theme for the page based on what theme selected from cookie
if(storedTheme == 'dark'){
    document.documentElement.style.setProperty('--main-bg-color','#636466')
    document.documentElement.style.setProperty('--main-text-color','#fff')
    document.documentElement.style.setProperty('--topnav-bg-color','#0f1632')
    themeToggle.checked = true;
}else{
    document.documentElement.style.setProperty('--main-bg-color','#fff')
    document.documentElement.style.setProperty('--main-text-color','#333')
    document.documentElement.style.setProperty('--topnav-bg-color','#2d3142')
    themeToggle.checked = false; 
}

//Check for changes in the state of the checkbox
themeToggle.addEventListener('click',() => {
    //if the checkbox is checked, set the dark theme and update cookie
    if(themeToggle.checked){
        document.documentElement.style.setProperty('--main-bg-color','#636466')
    document.documentElement.style.setProperty('--main-text-color','#fff')
    document.documentElement.style.setProperty('--topnav-bg-color','#2d3142')
        localStorage.setItem('theme','dark')
    }
    //If checkbox is unchecked, set the light theme and update cookie
    else{
        document.documentElement.style.setProperty('--main-bg-color','#fff')
        document.documentElement.style.setProperty('--main-text-color','#333')
        document.documentElement.style.setProperty('--topnav-bg-color','#1a91d5')
        localStorage.setItem('theme','light')
    }
})