import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {

    state = {
        books: [],
        library: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books:books})
        })
    }


    booksUpdate = (e) => {
        const id = e.target.name
        const shelf = e.target.value
        BooksAPI.get(id).then((book_detail)=> {
            BooksAPI.update(book_detail, shelf).then((books) => {
                BooksAPI.getAll().then((books) => {
                    this.setState({books: books})
                })
            })
        }

    )}

    searchBook(query) {
        BooksAPI.search(query).then(library => {
            let results = library.map(library_book => {
                let find_results = this.state.books.find( booksOnShelf => booksOnShelf['id'] === library_book['id'])
                if (find_results !== undefined){
                    library_book = find_results
                    return library_book
                }else{
                    library_book["shelves"] = "none"
                    return library_book
                }
            })
            console.log(results)
            this.setState({library: results})


        })
    }


    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <ListBooks
                        booksUpdate={this.booksUpdate}
                        books={this.state.books}
                    />
                )}/>
                <Route path='/search' render={({ history }) => (
                    <SearchBooks
                        booksUpdate={this.booksUpdate}
                        librarys={this.state.library}
                        books={this.state.books}
                        bookCheckout={(book) => {
                            this.searchBook(book)
                            history.push('/search')
                        }}
                    />
                )}/>
            </div>
        )
    }

}

export default BooksApp
