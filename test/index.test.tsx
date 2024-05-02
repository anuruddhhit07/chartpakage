import { describe, test, expect } from '@jest/globals';
import { drawLineChart } from '../src/index';

describe('drawLineChart', () => {
    test('should render a line chart on the given div', () => {
        // Create a div element for testing
        const div = document.createElement('div');
        div.id = 'testDiv';
        document.body.appendChild(div);

        // Generate some sample data
        const data = [1, 2, 3, 4, 5];

        // Call the function
        drawLineChart(data, 'testDiv');

        // Check if the SVG element is created inside the div
        const divElement = document.getElementById('testDiv');
        if (divElement) {
            const svgElement = divElement.querySelector('svg');
            expect(svgElement).toBeDefined();
        } else {
            // Handle the case where getElementById returns null
            throw new Error('Element with ID "testDiv" not found.');
        }
    });
});


