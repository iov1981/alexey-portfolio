# Alexey Khripunov Portfolio

This is a personal portfolio website for Alexey Khripunov, showcasing skills, experience, and certificates.

## Features

- Responsive design using Tailwind CSS
- Interactive skills chart using Chart.js
- Certificate gallery with modal view
- Mobile-friendly navigation

## Testing

The project includes comprehensive test coverage using Jest with jsdom for testing the HTML, CSS, and JavaScript functionality.

### Test Structure

- `tests/html.test.js`: Tests for HTML structure and content
- `tests/styles.test.js`: Tests for CSS styles and responsive design
- `tests/main.test.js`: Tests for JavaScript functionality

### Running Tests

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage report
npm run test:coverage
```

### Test Coverage

The test suite provides coverage for:
- HTML structure validation
- CSS styling verification
- JavaScript functionality testing
  - Skills chart initialization
  - Mobile menu functionality
  - Certificate modal interactions

## Development

The JavaScript code has been extracted to a separate file (`js/main.js`) to improve maintainability and testability.

## License

ISC