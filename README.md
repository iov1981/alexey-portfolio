# Alexey Khripunov Portfolio

This is a personal portfolio website for Alexey Khripunov, a QA Engineer.

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript
- Chart.js for skills visualization

## Features

- Responsive design for all device sizes
- Interactive skills chart using Chart.js
- Certificate viewing modal
- Mobile-friendly navigation

## Testing

The project includes a comprehensive test suite using Jest and JSDOM. The tests cover:

1. **JavaScript Functionality Tests** (`tests/main.test.js`)
   - Tests for the skills chart initialization
   - Tests for mobile menu functionality
   - Tests for certificate modal functionality
   - Tests for application initialization

2. **HTML Structure Tests** (`tests/html.test.js`)
   - Tests for correct document title
   - Tests for header and navigation structure
   - Tests for hero section content
   - Tests for contact links
   - Tests for about section content
   - Tests for skills section and chart
   - Tests for certificate modal structure
   - Tests for mobile menu structure

3. **CSS Styles Tests** (`tests/styles.test.js`)
   - Tests for font family
   - Tests for chart container styles
   - Tests for card styles
   - Tests for modal styles
   - Tests for animation keyframes
   - Tests for responsive media queries

## Running the Tests

To run the tests:

```bash
npm test
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`

## License

This project is licensed under the ISC License.