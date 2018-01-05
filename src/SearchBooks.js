import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class SearchBooks extends Component {
    static propTypes = {
        librarys: PropTypes.array.isRequired,
    };


    onInputChange = (e) => {
        if (e.target.value.length >0)
            this.props.bookCheckout(e.target.value)
    };


    check_book(id){
        return this.props.books.map((b) => {
            if (b.id === id) {
                return b.shelf
            }
            else {
                return "none"
            }
        })
    }

    render() {
        const {librarys, booksUpdate} = this.props;

        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search"
                            to="/"
                        >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input
                                onChange={this.onInputChange}
                                type="text"
                                name="search"
                                placeholder="Search by title or author"
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                { librarys.length > 0 && (
                <div className="list-books">
                    <div className="list-books-title">
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid"> {librarys.map((library) => (
                                        <li key={library.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128,
                                                        height: 193,
                                                        backgroundImage: `url(${library.imageLinks.smallThumbnail})`
                                                    }}>
                                                    </div>
                                                    <div className="book-shelf-changer">
                                                        <select onChange={booksUpdate} name={library.id} value="none" >
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div  className="book-title">{library.title}</div>
                                                <div className="book-authors">{library.authors}</div>
                                            </div>
                                        </li>
                                    ))} </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default SearchBooks
