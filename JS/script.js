//******************** */ sub1 javascript code starts ***************************
const sub1Items = document.getElementById('sub1Items');
const scrollStep = 1000; // Adjust this value to control scrolling speed

// Scroll to the left
document.querySelector('.previousBtn').addEventListener('click', function() {
    sub1Items.scrollLeft -= scrollStep;
});

// Scroll to the right
document.querySelector('.nextBtn').addEventListener('click', function() {
    sub1Items.scrollLeft += scrollStep;
});

//******************** */ sub1 javascript code ends ***************************



//******************** */ main5 javascript code starts ***************************

// Get all toggle buttons
        const toggleButtons = document.querySelectorAll('.main5-item-heading');
        // Get all paragraphs
        const paragraphs = document.querySelectorAll('.main5-item-paragraph');

        // Initially show the first paragraph
        paragraphs[0].classList.add('show');

        // Add click event listener to each toggle button
        toggleButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Toggle visibility of corresponding paragraph
                paragraphs.forEach((paragraph, idx) => {
                    if (idx === index) {
                        paragraph.classList.toggle('show');
                    } else {
                        paragraph.classList.remove('show');
                    }
                });
            });
        });


    


//******************** */ main5 javascript code ends ***************************


document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.nextBtn2');
    const previousBtn = document.querySelector('.previousBtn2');
    const sub4testemonials = document.querySelector('.sub4testemonials');

    let translateValue = 0;

    nextBtn.addEventListener('click', function () {
        if (translateValue > -80) {
            translateValue -= 20;
            sub4testemonials.style.transform = `translateX(${translateValue}%)`;
        } else {
            translateValue = 0;
            sub4testemonials.style.transform = `translateX(${translateValue}%)`;
        }
    });

    previousBtn.addEventListener('click', function () {
        if (translateValue < 0) {
            translateValue += 20;
            sub4testemonials.style.transform = `translateX(${translateValue}%)`;
        } else {
            translateValue = -80;
            sub4testemonials.style.transform = `translateX(${translateValue}%)`;
        }
    });
});
