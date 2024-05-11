// Function to handle click event for desktop
function showMoreReviewsDesktop() {
    document.querySelector('.additional-reviews').style.display = 'flex';
    document.getElementById('showMoreReviews').style.display = 'none'; 
}

// Function to handle click event for mobile
function showMoreReviewsMobile() {
    document.querySelector('.additional-reviews').style.display = 'flex';
    document.getElementById('showMoreReviews').style.display = 'none'; 
}

// Adding event listener for desktop
document.getElementById('showMoreReviews').addEventListener('click', showMoreReviewsDesktop);

// Adding event listener for mobile
document.getElementById('showMoreReviews').addEventListener('touchstart', showMoreReviewsMobile);
