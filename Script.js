function handleLogin() {
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const loader = document.querySelector('.loader');
    const photo = document.querySelector('.photo');
    const logo = document.querySelector('.logo');
    const textContainer = document.querySelector('.section'); // Select the container of text elements
  
    // Step 1: Shift text off-screen and make it invisible
    btnText.style.transition = 'margin-left 0.3s ease-in-out';
    btnText.style.marginLeft = '150px';
    btnText.style.opacity = '0'; 
  
    setTimeout(() => {
      loader.style.display = 'block';
      loader.style.position = 'absolute';
      loader.style.top = '30%';
      loader.style.left = '50%';
      loader.style.transform = 'translate(-50%, -50%)';
    }, 500);
  
    // Step 2: Hide container content
    setTimeout(() => {
      textContainer.style.transition = 'opacity 1.5s ease';
      textContainer.style.opacity = '0'; // Make text container invisible
    }, 1000);
  
    // Step 3: Shrink the photo slightly
    setTimeout(() => {
      photo.style.transition = 'transform 0.7s'; // Faster transition
      photo.style.transform = 'scale(0)'; // Shrink photo slightly
    }, 2000);
  
    // Step 4: Move logo from top to center
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transition = 'transform 1s'; 
      logo.style.transform = 'translateY(-50%, -50%)'; // Move logo from top to center
    }, 2600);
  
    // Step 5: Scale up the logo
    setTimeout(() => {
      logo.style.transition = 'top 1s ease-in-out, left 1s ease-in-out, transform 1s ease-in-out';
      logo.style.transform = 'translate(-50%, -50%) scale(1.2)'; // Center logo and scale up
      logo.style.borderRadius = '50%'; 
      logo.style.position = 'absolute'; 
      logo.style.top = '50%'; 
      logo.style.left = '50%'; 
      logo.style.zIndex = '1'; 
    }, 2800);
  
    // Step 6: Shrink the logo
    setTimeout(() => {
      logo.style.transition = 'transform 2s ease'; 
      logo.style.transform = 'translate(-50%, -50%) scale(0)'; // Shrink the logo to its border
    }, 4000);
  
    // Step 7: Show the photo in full screen
    setTimeout(() => {
      photo.style.transition = 'transform 1s ease-in-out, border-radius 1s ease-in-out, top 1s ease-in-out, left 1s ease-in-out';
      photo.style.transform = 'scale(1)'; 
      photo.style.borderRadius = '5vh'; 
      photo.style.position = 'fixed'; 
      photo.style.top = '5%'; 
      photo.style.left = '5%'; 
      photo.style.right = '5%'; 
      photo.style.bottom = '5%'; 
      photo.style.width = '90%'; 
      photo.style.height = '85%'; 
      photo.style.zIndex = '2'; 
    }, 4700);
  
    // Step 8: Make the logo visible again
    setTimeout(() => {
      logo.style.transition = 'opacity 0.5s ease-in-out'; 
      logo.style.opacity = '1'; 
      logo.style.transform = 'translate(-50%, -50%)'; 
      logo.style.top = '50%'; 
      logo.style.left = '50%'; 
      logo.style.zIndex = '3';
      logo.style.backgroundColor = 'white';
    }, 5500);
  
    // Step 9: Move and resize the photo
    setTimeout(() => {
      photo.style.transition = 'width 0.5s ease-in-out, height 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out'; 
      photo.style.width = '60vh'; 
      photo.style.height = '90vh'; 
      photo.style.top = '40px'; 
      photo.style.left = '65%';
  
      logo.style.transition = 'top 0.5s ease-in-out, left 0.5s ease-in-out'; 
      logo.style.top = '10%'; 
      logo.style.left = '12%'; 
    }, 6200);
  
    // Step 10: Reload the window after all animations
    setTimeout(() => {
      window.location.reload();
    }, 6900);
  }
  