Todo:

*Fields: entry number,author, title, publication, page count, ISBN, series title, note, resource, and language code.*
*String entrynumber, String author, String title, String publication, String page count, String ISBN, String series title, String note, String resource, String language code*
  - Immediate Order
    - Create index.html
      - Allow routing to Add Books and Search Books
    - Create addBooks.html
      - Form with all Fields (Doesn't have to be pretty)
    - Create searchBooks.html
      - Form with all the fields (Doesn't have to be pretty)
      - Search Button
    - Create Class Book.js
      - Has all fields
      - Firebase member functions
        - Get, add, delete
    - Implement Firebase
    - Add firebase functionality to addBooks.html
    - Add firebase functionality to searchbooks.html
    - Create viewBooks.html
      - Create bookEntries.css that contains all Fields
      - Sync viewBooks to results from searchBooks, displaying each object
    - Add Chinese, Pinyin & (Chinese, Pinyn, English together) view

      - Create larger superfields in Firebase
        - Change relavent routes in addBooks.html
        - Change relavent routes in searchBooks.html
        - change relavent routes in viewBooks.html
      - Toggle in addBooks.html
      - Toggle in searchBooks.html
      - Toggle in viewBooks.html (Fetched results will have the english, chinese, and pinyin information
      
  - Necessary Functions
    - Add Books
    - Search books based on different metadata points
  - Tech Used
    - Firebase (Store book entries)
    - Javascript (Website scripting language)
    - HTML (display)
    - CSS (Styling)
    - Node.js (Allow application to communicate with Firebase)
  - Screens
    - Add Books
      - entry number,author, title, publication, page count, ISBN, series title, note, resource, and language code.
      - Chinese and English Entry
    - Search Books
      - Search by keyword
        - Looks at all fields, searching for the word (if too expensive, maybe just author and title)
      - Advance Search
        - Specify Field Inputs
          - entry number,author, title, publication, page count, ISBN, series title, note, resource, and language code.
    - Display Books
      - Display Entries while keeping search bar / advanced search bar at top
    
