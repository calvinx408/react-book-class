import React from 'react'


function Bookshelves(props) {
    const booksUpdate = props.booksUpdate
    const shelf = props.shelf
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">

                <ol className="books-grid"> {props.books.filter(book => book.shelf === shelf).map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <select onChange={booksUpdate} name={book.id}
                                            value={book.shelf}>

                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to
                                            Read
                                        </option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))} </ol>
            </div>
        </div>
    )
}

export default Bookshelves