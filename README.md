# Google Books API Search Engine

## Outline

This project will require you to use both DOM manipulation and Asynchronous programming. The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## MVP

Create a page that allows users to search for books Page should include the following:

Header section introducing the page

Form containing a text input and a submit / search button

A grid of books Instructions:

When the submit button is clicked you need the request books from the Google books API using the input value as your query string

The books that you receive should be rendered in the books grid.

Each book in the grid should have an image, author, title and description

The grid should be responsive on different screen sizes

You should use async / await for your request code. You can choose how to handle the code in component

### Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like. Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

### Application Design (required):

Seperate request code from components
functions should do 1 thing, and should be as pure and reusable as possible
Think about how you might "clean" the data
Always use iterators over loops
Always parametrize and abstract large pieces of duplicate code.
Presentational components should be as dumb as possible
Bonus (optional, but highly recommended):
Give feedback to the user when no book results can be found for the query.
When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

#### Useful Resources:

- Google Books API no Auth link
- Using Async Await
- Using Postman to Test APIs
- Download Postman
