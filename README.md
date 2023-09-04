# Odin Etch A Sketch

This is the fourth project of [The Odin Project](https://www.theodinproject.com/about) foundation path. The goal of this project is to combine techniques of HTML + CSS + JavaScript to create a grid/canvas that users can draw pixel art on. Again, this project aims to build on what we previously learned namely, flexbox, event types, event propagation, etc.

The most challenging part of this project for me is figuring out how to create a grid with different number of dimensions within the same amount of space/pixels each time. In other words, a 16x16 square grid should take up the same amount of space as a 64x64 square grid. As the total number of square grows, the size of each individual square shrinks.

My solution for the problem

```
square.style.width = dimensionOfGrid / widthOfGrid;
square.style.height = dimensionOfGrid / widthOfGrid;
```

This worked perfectly on Safari and Chrome for 16x16, 64x64 and even 100x100. But when tested on Firefox, I got uneven grids for grids size 64x64 upwards to 79x79, which was weird...

Other things I have learned:

- the differences between mouseover and mouseenter event types
- creating a function that generates a random number between min and max
- using input types such as slider and radio buttons

## Live Preview

Check out the live preview of the project [here](https://kotarohzk.github.io/odin-etch-a-sketch/).
