// script.js

window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
        const resumeContent = document.getElementById('resume-content');

            // Simulate loading
                setTimeout(() => {
                        splashScreen.style.display = 'none';
                                resumeContent.style.display = 'block';
                                        setTimeout(() => {
                                                    resumeContent.style.opacity = 1;
                                                            }, 50);
                                                                }, 2000);
                                                                });

                                                                // Smooth scrolling
                                                                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                                                    anchor.addEventListener('click', function (e) {
                                                                            e.preventDefault();
                                                                                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                                                                                behavior: 'smooth'
                                                                                                        });
                                                                                                            });
                                                                                                            });


                                                                                                            // --- Theme Switching ---
                                                                                                            const themeSwitcher = document.getElementById('theme-switcher');

                                                                                                            // Function to set the theme
                                                                                                            function setTheme(theme) {
                                                                                                                if (theme === 'dark') {
                                                                                                                        document.body.classList.add('dark-mode');
                                                                                                                            } else {
                                                                                                                                    document.body.classList.remove('dark-mode');
                                                                                                                                        }
                                                                                                                                            localStorage.setItem('theme', theme); // Store the selected theme
                                                                                                                                            }

                                                                                                                                            // Load theme preference from localStorage
                                                                                                                                            const savedTheme = localStorage.getItem('theme');
                                                                                                                                            if (savedTheme) {
                                                                                                                                                themeSwitcher.value = savedTheme;
                                                                                                                                                    setTheme(savedTheme);
                                                                                                                                                    } else {
                                                                                                                                                        // Default to auto (system preference) if no theme is saved
                                                                                                                                                            setTheme('auto');
                                                                                                                                                                themeSwitcher.value = 'auto';
                                                                                                                                                                }

                                                                                                                                                                // Detect system theme changes (for "auto" mode)
                                                                                                                                                                const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
                                                                                                                                                                function handleSystemThemeChange(e) {
                                                                                                                                                                  if (themeSwitcher.value === 'auto') {
                                                                                                                                                                          setTheme(e.matches ? 'dark' : 'light');
                                                                                                                                                                              }
                                                                                                                                                                              }
                                                                                                                                                                              //add listener and call on first run
                                                                                                                                                                              prefersDarkScheme.addEventListener('change', handleSystemThemeChange);
                                                                                                                                                                              handleSystemThemeChange(prefersDarkScheme);


                                                                                                                                                                              themeSwitcher.addEventListener('change', () => {
                                                                                                                                                                                  const selectedTheme = themeSwitcher.value;
                                                                                                                                                                                        if (selectedTheme === 'auto') {
                                                                                                                                                                                                // For "auto", follow the system preference
                                                                                                                                                                                                        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
                                                                                                                                                                                                                  prefersDarkScheme.addEventListener('change', handleSystemThemeChange); //listen for system theme change
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                              setTheme(selectedTheme);
                                                                                                                                                                                                                                      prefersDarkScheme.removeEventListener('change', handleSystemThemeChange); //remove listener when not auto
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                          });


                                                                                                                                                                                                                                          // --- Scroll Animations ---
                                                                                                                                                                                                                                          const sections = document.querySelectorAll('.resume-section');

                                                                                                                                                                                                                                          const observer = new IntersectionObserver(entries => {
                                                                                                                                                                                                                                              entries.forEach(entry => {
                                                                                                                                                                                                                                                      if (entry.isIntersecting) {
                                                                                                                                                                                                                                                                  entry.target.classList.add('is-visible');
                                                                                                                                                                                                                                                                          } // Optional:  Remove the class to re-animate on scroll up.
                                                                                                                                                                                                                                                                                    // else {  entry.target.classList.remove('is-visible');}

                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                        }, {
                                                                                                                                                                                                                                                                                            threshold: 0.2 // Adjust this value as needed (0.1 = 10% visible)
                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                            sections.forEach(section => {
                                                                                                                                                                                                                                                                                                observer.observe(section);
                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                