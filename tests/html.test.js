/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('HTML Structure Tests', () => {
    let htmlContent;
    
    beforeAll(() => {
        // Read the HTML file
        htmlContent = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        // Set up the document
        document.documentElement.innerHTML = htmlContent;
    });
    
    test('should have the correct title', () => {
        expect(document.title).toBe('Портфолио: Хрипунов Алексей Владимирович');
    });
    
    test('should have a header with navigation', () => {
        const header = document.querySelector('header');
        expect(header).not.toBeNull();
        
        const nav = header.querySelector('nav');
        expect(nav).not.toBeNull();
        
        const navLinks = nav.querySelectorAll('.nav-link');
        expect(navLinks.length).toBeGreaterThan(0);
    });
    
    test('should have a hero section with name and title', () => {
        const heroSection = document.getElementById('hero');
        expect(heroSection).not.toBeNull();
        
        const name = heroSection.querySelector('h1');
        expect(name).not.toBeNull();
        expect(name.textContent).toBe('Хрипунов Алексей Владимирович');
        
        const title = heroSection.querySelector('p');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe('QA Engineer / Инженер по тестированию');
    });
    
    test('should have contact links in the hero section', () => {
        const heroSection = document.getElementById('hero');
        expect(heroSection).not.toBeNull();
        
        const emailLink = heroSection.querySelector('a[href^="mailto:"]');
        expect(emailLink).not.toBeNull();
        expect(emailLink.getAttribute('href')).toBe('mailto:hripunov60@gmail.com');
        
        const phoneLink = heroSection.querySelector('a[href^="tel:"]');
        expect(phoneLink).not.toBeNull();
        expect(phoneLink.getAttribute('href')).toBe('tel:+79023449722');
        
        const telegramLink = heroSection.querySelector('a[href^="https://t.me/"]');
        expect(telegramLink).not.toBeNull();
        expect(telegramLink.getAttribute('href')).toBe('https://t.me/iov1981');
    });
    
    test('should have an about section with personal information', () => {
        const aboutSection = document.getElementById('about');
        expect(aboutSection).not.toBeNull();
        
        const heading = aboutSection.querySelector('h2');
        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe('Обо мне');
        
        const infoItems = aboutSection.querySelectorAll('.flex.items-center');
        expect(infoItems.length).toBeGreaterThan(0);
    });
    
    test('should have a skills section with chart', () => {
        const skillsSection = document.getElementById('skills');
        expect(skillsSection).not.toBeNull();
        
        const heading = skillsSection.querySelector('h2');
        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe('Ключевые навыки');
        
        const chartContainer = skillsSection.querySelector('.chart-container');
        expect(chartContainer).not.toBeNull();
        
        const canvas = chartContainer.querySelector('canvas#skillsChart');
        expect(canvas).not.toBeNull();
    });
    
    test('should have a certificate modal', () => {
        const modal = document.getElementById('certificateModal');
        expect(modal).not.toBeNull();
        
        const closeButton = modal.querySelector('.close');
        expect(closeButton).not.toBeNull();
        
        const modalImage = modal.querySelector('#modalImage');
        expect(modalImage).not.toBeNull();
    });
    
    test('should have a mobile menu button for responsive design', () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        expect(mobileMenuButton).not.toBeNull();
        
        const mobileMenu = document.getElementById('mobile-menu');
        expect(mobileMenu).not.toBeNull();
        expect(mobileMenu.classList.contains('hidden')).toBe(true);
    });
});