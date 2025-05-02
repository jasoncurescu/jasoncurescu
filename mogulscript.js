// Function to change the main image based on icon clicked
function changeImage(imageName) {
    const imageDisplay = document.getElementById('main-image');
    let imageUrl = '';

    // Adjust image source based on the clicked icon
    switch(imageName) {
        case 'image1':
            imageUrl = 'image1.jpg';
            break;
        case 'image2':
            imageUrl = 'image2.jpg';
            break;
        case 'image3':
            imageUrl = 'image3.jpg';
            break;
        default:
            imageUrl = 'image1.jpg';
    }

    imageDisplay.src = imageUrl;
}

// Sticky nav functionality
window.onscroll = function() {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};
