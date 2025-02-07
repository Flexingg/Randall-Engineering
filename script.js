// script.js

window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
        const resumeContent = document.getElementById('resume-content');

            // Simulate loading (you can replace this with actual loading logic)
                setTimeout(() => {
                        // Hide splash screen
                                splashScreen.style.display = 'none';

                                        // Show resume content with a fade-in effect
                                                resumeContent.style.display = 'block';
                                                        setTimeout(() => { // Use a slight delay to ensure the display:block is applied *before* setting opacity
                                                                    resumeContent.style.opacity = 1;
                                                                            }, 50); // 50ms delay

                                                                                }, 2000); // 2 seconds delay - adjust as needed
                                                                                });

                                                                                // Smooth scrolling for anchor links
                                                                                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                                                                    anchor.addEventListener('click', function (e) {
                                                                                            e.preventDefault();

                                                                                                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                                                                                                behavior: 'smooth'
                                                                                                                        });
                                                                                                                            });
                                                                                                                            });

                                                                                                                            