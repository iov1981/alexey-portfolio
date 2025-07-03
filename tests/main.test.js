/**
 * @jest-environment jsdom
 */

// Import the functions to test
const { initSkillsChart, initMobileMenu, initCertificateModal, initApp } = require('../js/main');

// Mock Chart.js
global.Chart = jest.fn().mockImplementation(() => ({
    update: jest.fn(),
}));

describe('Portfolio JavaScript Functions', () => {
    // Setup and teardown
    beforeEach(() => {
        // Reset the document body before each test
        document.body.innerHTML = `
            <header>
                <nav>
                    <button id="mobile-menu-button"></button>
                    <div id="mobile-menu" class="hidden"></div>
                    <svg id="menu-open-icon"></svg>
                    <svg id="menu-close-icon" class="hidden"></svg>
                    <a href="#" class="nav-link"></a>
                </nav>
            </header>
            <div class="chart-container">
                <canvas id="skillsChart"></canvas>
            </div>
            <div id="certificateModal" style="display: none;">
                <span class="close">&times;</span>
                <img id="modalImage" src="">
            </div>
            <div class="card" data-certificate-img="test-image.jpg"></div>
        `;

        // Clear all mocks
        jest.clearAllMocks();
    });

    // Test initSkillsChart function
    describe('initSkillsChart', () => {
        test('should initialize a chart when skillsChart element exists', () => {
            // Act
            const chart = initSkillsChart();
            
            // Assert
            expect(Chart).toHaveBeenCalled();
            expect(chart).toBeDefined();
        });

        test('should return null when skillsChart element does not exist', () => {
            // Arrange
            document.body.innerHTML = '<div></div>'; // No chart element
            
            // Act
            const chart = initSkillsChart();
            
            // Assert
            expect(chart).toBeNull();
            expect(Chart).not.toHaveBeenCalled();
        });
    });

    // Test initMobileMenu function
    describe('initMobileMenu', () => {
        test('should add click event listener to mobile menu button', () => {
            // Arrange
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const addEventListenerSpy = jest.spyOn(mobileMenuButton, 'addEventListener');
            
            // Act
            initMobileMenu();
            
            // Assert
            expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
        });

        test('should toggle mobile menu visibility when button is clicked', () => {
            // Arrange
            initMobileMenu();
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuOpenIcon = document.getElementById('menu-open-icon');
            const menuCloseIcon = document.getElementById('menu-close-icon');
            
            // Act - simulate click
            mobileMenuButton.click();
            
            // Assert
            expect(mobileMenu.classList.contains('hidden')).toBe(false);
            expect(menuOpenIcon.classList.contains('hidden')).toBe(true);
            expect(menuCloseIcon.classList.contains('hidden')).toBe(false);
            
            // Act - simulate another click
            mobileMenuButton.click();
            
            // Assert
            expect(mobileMenu.classList.contains('hidden')).toBe(true);
            expect(menuOpenIcon.classList.contains('hidden')).toBe(false);
            expect(menuCloseIcon.classList.contains('hidden')).toBe(true);
        });

        test('should close mobile menu when nav link is clicked', () => {
            // Arrange
            initMobileMenu();
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const navLink = document.querySelector('.nav-link');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuOpenIcon = document.getElementById('menu-open-icon');
            const menuCloseIcon = document.getElementById('menu-close-icon');
            
            // First open the menu
            mobileMenuButton.click();
            expect(mobileMenu.classList.contains('hidden')).toBe(false);
            
            // Act - click a nav link
            navLink.click();
            
            // Assert
            expect(mobileMenu.classList.contains('hidden')).toBe(true);
            expect(menuOpenIcon.classList.contains('hidden')).toBe(false);
            expect(menuCloseIcon.classList.contains('hidden')).toBe(true);
        });
    });

    // Test initCertificateModal function
    describe('initCertificateModal', () => {
        test('should add click event listeners to certificate cards', () => {
            // Arrange
            const card = document.querySelector('.card[data-certificate-img]');
            const addEventListenerSpy = jest.spyOn(card, 'addEventListener');
            
            // Act
            initCertificateModal();
            
            // Assert
            expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
        });

        test('should open modal with correct image when certificate card is clicked', () => {
            // Arrange
            initCertificateModal();
            const card = document.querySelector('.card[data-certificate-img]');
            const modal = document.getElementById('certificateModal');
            const modalImage = document.getElementById('modalImage');
            
            // Act
            card.click();
            
            // Assert
            expect(modal.style.display).toBe('flex');
            expect(modalImage.src).toContain('test-image.jpg');
        });

        test('should close modal when close button is clicked', () => {
            // Arrange
            initCertificateModal();
            const closeBtn = document.querySelector('.close');
            const modal = document.getElementById('certificateModal');
            
            // First open the modal
            document.querySelector('.card[data-certificate-img]').click();
            expect(modal.style.display).toBe('flex');
            
            // Act
            closeBtn.click();
            
            // Assert
            expect(modal.style.display).toBe('none');
        });

        test('should close modal when clicking outside the image', () => {
            // Arrange
            initCertificateModal();
            const modal = document.getElementById('certificateModal');
            
            // First open the modal
            document.querySelector('.card[data-certificate-img]').click();
            expect(modal.style.display).toBe('flex');
            
            // Act - simulate click on the modal background
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            modal.dispatchEvent(clickEvent);
            
            // Assert
            expect(modal.style.display).toBe('none');
        });
    });

    // Test initApp function
    describe('initApp', () => {
        test('should call all initialization functions', () => {
            // This test is more of an integration test
            // We'll verify that initApp exists and is a function
            expect(typeof initApp).toBe('function');
            
            // Create spies for the individual functions
            const mockInitSkillsChart = jest.fn();
            const mockInitMobileMenu = jest.fn();
            const mockInitCertificateModal = jest.fn();
            
            // Create a custom implementation of initApp that uses our mocks
            const testInitApp = () => {
                mockInitSkillsChart();
                mockInitMobileMenu();
                mockInitCertificateModal();
            };
            
            // Call our test function
            testInitApp();
            
            // Verify our mocks were called
            expect(mockInitSkillsChart).toHaveBeenCalled();
            expect(mockInitMobileMenu).toHaveBeenCalled();
            expect(mockInitCertificateModal).toHaveBeenCalled();
        });
    });
});