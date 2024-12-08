// Simple JavaScript for Eternal Coders Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Add a simple hover effect to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.backgroundColor = '#2c2c2c';
            card.querySelector('h3').style.color = '#ff00ff';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.backgroundColor = '#1b1b1b';
            card.querySelector('h3').style.color = '';
        });
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h3').textContent;
            const imageSrc = member.querySelector('img').src;

            alert(`Name: ${name}\n\nClick OK to close.`);
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.opacity = '0.8';
        } else {
            header.style.opacity = '1';
        }
    });
});