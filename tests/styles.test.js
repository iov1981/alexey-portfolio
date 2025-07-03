/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('CSS Styles Tests', () => {
    let htmlContent;
    
    beforeAll(() => {
        // Read the HTML file
        htmlContent = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        // Set up the document
        document.documentElement.innerHTML = htmlContent;
    });
    
    test('should have Tailwind CSS included', () => {
        const tailwindScript = document.querySelector('script[src*="tailwindcss"]');
        expect(tailwindScript).not.toBeNull();
    });
    
    test('should have Chart.js included', () => {
        const chartScript = document.querySelector('script[src*="chart.js"]');
        expect(chartScript).not.toBeNull();
    });
    
    test('should have responsive design classes', () => {
        // Check for responsive container
        const container = document.querySelector('.container');
        expect(container).not.toBeNull();
        
        // Check for responsive navigation
        const mobileMenu = document.getElementById('mobile-menu');
        expect(mobileMenu).not.toBeNull();
        expect(mobileMenu.classList.contains('md:hidden')).toBe(true);
        
        // Check for responsive sections
        const sections = document.querySelectorAll('section');
        expect(sections.length).toBeGreaterThan(0);
        
        // At least one section should have responsive classes
        const responsiveSections = Array.from(sections).filter(section => 
            section.classList.contains('py-12') || 
            section.classList.contains('py-10') || 
            section.classList.contains('py-20') ||
            section.classList.contains('py-8')
        );
        expect(responsiveSections.length).toBeGreaterThan(0);
    });
    
    test('should have proper styling for cards', () => {
        const cards = document.querySelectorAll('.card');
        expect(cards.length).toBeGreaterThan(0);
        
        // Check if cards have styling defined in the style tag
        const styleElement = document.querySelector('style');
        const styleContent = styleElement.textContent;
        
        expect(styleContent).toContain('.card');
        expect(styleContent).toContain('background-color');
        expect(styleContent).toContain('border-radius');
        expect(styleContent).toContain('box-shadow');
    });
    
    test('should have proper styling for buttons', () => {
        const buttons = document.querySelectorAll('button');
        expect(buttons.length).toBeGreaterThan(0);
        
        // Check if mobile menu button has proper classes
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        expect(mobileMenuButton).not.toBeNull();
        expect(mobileMenuButton.classList.contains('inline-flex')).toBe(true);
        expect(mobileMenuButton.classList.contains('items-center')).toBe(true);
    });
    
    test('should have proper styling for the certificate modal', () => {
        const modal = document.getElementById('certificateModal');
        expect(modal).not.toBeNull();
        
        // Modal should be fixed and cover the entire screen
        const computedStyle = window.getComputedStyle(modal);
        expect(computedStyle.getPropertyValue('display')).toBe('none'); // Initially hidden
        
        // Check modal content styling
        const modalContent = modal.querySelector('.modal-content');
        expect(modalContent).not.toBeNull();
    });
});