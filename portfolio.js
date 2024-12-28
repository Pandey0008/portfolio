const project1=document.getElementById('p1')
project1.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/BMI-calculator-Project/','_blank');
})
const project2=document.getElementById('p2')
project2.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/random-background-colour-generator-project/','_blank');
})
const project3=document.getElementById('p3')
project3.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/guess-the-number-project/','_blank');
})
const project4=document.getElementById('p4')
project4.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/background-colour-changer-project/','_blank');
})
const project5=document.getElementById('p5')
project5.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/keys-Info-project/','_blank');
})
const project6=document.getElementById('p6')
project6.addEventListener('click',function(){
    window.open('https://pandey0008.github.io/digital-clock-project/','_blank');
})
const linkedin=document.getElementById('linkedin')
linkedin.addEventListener('click',function(){
    window.open('https://www.linkedin.com/in/shivansh-pandey-7a7a84218/','_blank')
})
const github=document.getElementById('github')
linkedin.addEventListener('click',function(){
    window.open('https://www.linkedin.com/in/shivansh-pandey-7a7a84218/','_blank')
})


 // Select the button element
 const emailButton = document.getElementById('emailButton');

 // Add a click event listener to the button
 emailButton.addEventListener('click', function() {
     // Define the mailto link with pre-filled email, subject, and body
     const recipient = 'mailatshivm@gmail.com'; // The recipient's email
     const subject = 'Hello!'; // The subject of the email
     const body = 'This is a test email sent from JavaScript.'; // The body content of the email

     // Create the mailto link
     const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

     window.location.href = mailtoLink;
 });
