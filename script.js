let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let slidesWrapper = document.querySelector('.slides-wrapper');
    
    // Increment slide index and reset if it exceeds the total number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Move slides to the correct position using translateX
    slidesWrapper.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    
    // Remove the active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));
    
    // Add active class to the current dot
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 1.5 seconds
    setTimeout(showSlides, 2500);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlides();
}

// Initialize the slideshow
showSlides();

//video
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('timeDisplay');
const timeline = document.getElementById('timeline');
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateTimeline);
timeline.addEventListener('click', setProgress);
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = 'Pause';
        updateTimeline();
    } else {
        video.pause();
        playButton.textContent = 'Play';
    }
}
function updateTimeline() {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.style.width = percentage + '%';
    timeDisplay.textContent = formatTime(video.currentTime);
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
function setProgress(event) {
    const rect = timeline.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const totalWidth = rect.width;
    const percentage = offsetX / totalWidth;
    const newTime = percentage * video.duration;
    video.currentTime = newTime;
    progress.style.width = percentage * 100 + '%';
}
//buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.navmenu');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => {
                btn.classList.remove('active'); // Remove active class from all
            });
            this.classList.add('active'); // Add active class to the clicked button
        });
    });
  
    // Set the first button as active by default
    buttons[0].classList.add('active');
});

//btn logic
document.getElementById('home').addEventListener('click', function(){
    document.getElementById('content').innerHTML = `
        <h3>Hello world</h3>
        <hr width="70%">
        <p>At <strong>Holy Mother Toodle's Zone</strong>, we've cultivated a unique and dynamic approach to early childhood education, one that transcends traditional methodologies. We believe in fostering a holistic development that empowers children to reach their fullest potential. Our curriculum is designed to ignite curiosity and inspire a lifelong love of learning, incorporating diverse programs that expose children to a multitude of fields and experiences. Our dedicated and exceptionally friendly teachers create a nurturing environment where every child feels valued and supported, guiding them through their developmental milestones with patience and care. We place a strong emphasis on social and emotional growth, equipping children with the confidence and resilience to excel in any setting. We nurture their ability to stand tall and handle the challenges of future life. By choosing <strong>Holy Mother Toodle's Zone</strong>, you're entrusting your child to a community committed to their well-being and success. We are part of the Holy Mother Charitable Society, a trust that has been established for the well being of children. We believe in building a foundation of trust with parents, ensuring that your child's early learning journey is both enriching and transformative.</p>
        `
    document.getElementById('content').style.padding = '20px';
    document.getElementById('content').style.backgroundColor = 'black';
    document.getElementById('content').style.border = 'none';
})

document.getElementById('gallery').addEventListener('click', function(){
    document.getElementById('content').innerHTML = `
        <div id="gallerycontainer">
            <a href="images/1.jpg" data-lightbox="models"><img src="images/1.jpg" alt=""></a>
            <a href="images/2.jpg" data-lightbox="models"><img src="images/2.jpg" alt=""></a>
            <a href="images/3.jpg" data-lightbox="models"><img src="images/3.jpg" alt=""></a>
            <a href="images/4.jpg" data-lightbox="models"><img src="images/4.jpg" alt=""></a>
            <a href="images/5.jpg" data-lightbox="models"><img src="images/5.jpg" alt=""></a>
            <a href="images/6.jpg" data-lightbox="models"><img src="images/6.jpg" alt=""></a>
            <a href="images/7.jpg" data-lightbox="models"><img src="images/7.jpg" alt=""></a>
            <a href="images/8.jpg" data-lightbox="models"><img src="images/8.jpg" alt=""></a>
            <a href="images/9.jpg" data-lightbox="models"><img src="images/9.jpg" alt=""></a>
            <a href="images/10.jpg" data-lightbox="models"><img src="images/10.jpg" alt=""></a>
            <a href="images/11.jpg" data-lightbox="models"><img src="images/11.jpg" alt=""></a>
            <a href="images/12.jpg" data-lightbox="models"><img src="images/12.jpg" alt=""></a>
            <a href="images/13.jpg" data-lightbox="models"><img src="images/13.jpg" alt=""></a>
            <a href="images/14.jpg" data-lightbox="models"><img src="images/14.jpg" alt=""></a>
            <a href="images/15.jpg" data-lightbox="models"><img src="images/15.jpg" alt=""></a>
            <a href="images/16.jpg" data-lightbox="models"><img src="images/16.jpg" alt=""></a>
        </div>
        `
    document.getElementById('content').style.padding = '10px';
    document.getElementById('content').style.backgroundColor = 'black';
    document.getElementById('content').style.border = 'none';
})

document.getElementById('contact').addEventListener('click', function(){
    document.getElementById('content').innerHTML = `
        <div class="contactdiv">
            <p>Come, join the <b>Holy Mother Charitable Society</b> today and start building your career in your favouraite field!</p>
        </div>
        <div id="doublecontainer">
            <div class="contactdiv double">
                <h3>Get in touch with us!</h3>
                <h4>Official E-Mail</h4>
                <p>For inquiries, coaching information, or any questions, feel free to email us anytime!</p>
                <p><a href="#"><i class="fa-solid fa-envelope" style="font-size: 40px; color: #74C0FC;"></i></a></p>
                <p>Click the email icon to send us a message directly.</p>
                <br>
                <h4>Phone Numbers</h4>
                <p>Reach out to us via call or text at one of the following numbers:</p>
                <p><i class="fa-solid fa-phone" style="font-size: 15px; color: #74C0FC;"></i> <a href="tel:7023008446">+91-7023008446</a></p>
            </div>
            <div class="contactdiv double">
                <h3>Follow us on FcaeBook</h3>
                <p>Stay connected, get updates, and join the conversation. Like and follow our Facebook page for news, events, and more!</p>
                <a href="https://www.facebook.com/people/Holy-Mothers-Toddlers-Zone/61558420486990/"><i class="fab fa-facebook" style="font-size: 40px;"></i></a>
                <p>Click the icon to visit our official Facebook page.</p>
            </div>
        </div>
        `
    document.getElementById('content').style.backgroundColor = 'white';
    document.getElementById('content').style.border = '1.5px solid rgb(216, 216, 216)';
    document.getElementById('content').style.padding = '20px';
})