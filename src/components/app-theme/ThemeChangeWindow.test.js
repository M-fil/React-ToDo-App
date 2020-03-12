import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ThemeChangeWindow from './ThemeChangeWindow';
import themes from "../lib/themes";
import images from "../lib/images";

afterEach(cleanup);

const chooseTheme = jest.fn();
const changeBackground = jest.fn();
const deleteBackgroundImage = jest.fn();

const windowTemplate = (
    <ThemeChangeWindow 
        chooseTheme = {chooseTheme} 
        changeBackground = {changeBackground}
        deleteBackgroundImage = {deleteBackgroundImage}
        
        image1 = {images.image1}
        image2 = {images.image2}
        image3 = {images.image3}
        image4 = {images.image4}
        image5 = {images.image5}
        image6 = {images.image6}
    />
);

describe('<ThemeChangeWindow/>', () => {
    it('should render content properly', () => {
        const { getByTestId } = render(windowTemplate);
        const window = getByTestId('theme-change-window');
        const colorsTitle = window.querySelectorAll('h3')[0];
        const colorsList = window.querySelector('.list');
        const imagesTitle = window.querySelectorAll('h3')[1];
        const imagesList = window.querySelector('.list-of-images');
        const deleteImageButton = window.querySelector('button')

        expect(window).toBeInTheDocument();

        expect(colorsTitle).toHaveTextContent('Background Colors');
        expect(colorsList.children.length).toBe(Object.keys(themes).length);

        expect(imagesTitle).toHaveTextContent('Download an image');
        expect(imagesList.children.length).toBe(Object.keys(images).length);

        expect(deleteImageButton).toHaveTextContent('Delete Background Image');
    });

    it('should change background-image and color after clicking', () => {
        const { getByTestId } = render(windowTemplate);

        const window = getByTestId('theme-change-window');
        const colorsList = window.querySelector('.list');
        const imagesList = window.querySelector('.list-of-images');
        const deleteImageButton = window.querySelector('button')

        for (let i = 0; i < colorsList.children.length; i++) {
            const colorElement = colorsList.querySelectorAll('li')[i];

            expect(colorElement.dataset.color).toBe(Object.keys(themes)[i]);

            fireEvent.click(colorElement);
            expect(chooseTheme).toHaveBeenCalled();
            expect(chooseTheme).toHaveBeenCalledTimes(i + 1);
        }

        for (let i = 0; i < imagesList.children.length; i++) {
            const imageItem = imagesList.querySelectorAll('img')[i];
            expect(imageItem.src).toBe(`http://localhost/${Object.values(images)[i]}`);

            fireEvent.click(imageItem);
            expect(changeBackground).toHaveBeenCalled();
            expect(changeBackground).toHaveBeenCalledTimes(i + 1);
        }

        fireEvent.click(deleteImageButton);
        expect(deleteBackgroundImage).toHaveBeenCalled();
        expect(deleteBackgroundImage).toHaveBeenCalledTimes(1);
    })
});