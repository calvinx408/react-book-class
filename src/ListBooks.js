import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelves from './Bookshelves'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    };


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {books, booksUpdate} = this.props;

        return (

            <div className="app">
                { books.length > 0 && (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-title">
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="list-books">
                                    <Bookshelves booksUpdate={booksUpdate} books={books} title="Currently Reading"
                                                 shelf="currentlyReading"/>
                                    <Bookshelves booksUpdate={booksUpdate} books={books} title="Want to Read"
                                                 shelf="wantToRead"/>
                                    <Bookshelves booksUpdate={booksUpdate} books={books} title="Read" shelf="read"/>
                                </div>

                                    <div className="open-search">
                                        <Link
                                            to="/search"
                                            className='add-contact'
                                        >Add Contacts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
            </div>

        )
    }
}

export default ListBooks
