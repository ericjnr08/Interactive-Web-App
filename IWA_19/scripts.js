import {books, authors, genres, BOOKS_PER_PAGE,} from './data.js'
import { getDOM, initialise, loadListItems, setTheme } from './views.js'

const {list, search, settings} = getDOM;
//.................................................................//

const fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)
/**
 * setting up book preview in order for the user to view a list of book previews, 
 * by title and author, so that user can discover new books to read.
 */
const bookPreview = (book) => {
    const {author: id, title, image, authorId} = book;
    const preview = document.createElement('button')
    preview.classList.add('preview') 
    preview.setAttribute('data-preview', id)
    preview.innerHTML = /* html */ `
    <img
        class="preview__image"
        src="${image}"
    />
    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[authorId]}</div>
    </div>
`;
return preview;
};

extracted.forEach((book) => {
    const preview = bookPreview(book);
    fragment.appendChild(preview);
});

const dataListItems = document.querySelector('[data-list-items]');
dataListItems.appendChild(fragment);


//------------------------------------------------------------------//

const handleToggleSearch = (event) => {
    event.preventDefault();
    const { button, overlay,} = getDOM.search;
    const { target } = event;
    const searchButton = target === button;

    if (searchButton) {
        overlay.open = true;
    } else {
        search.overlay.open = false;
    };
    
};

const searchCancel = () => { 
    DOM.search.overlay().open = false 
}


getDOM.search.button.addEventListener('click', handleToggleSearch)
//....................................................................//
/**
 * Filtering down different options for making search, allowing user to specify 
 * even more as to what they need to obtain.
 * @param {booksearch} books 
 * @param {*} filters 
 * @returns 
 */
const filter = (books, filters) => {
    let result = []

    for (const book of books) {
        const titleMatch = filters.title.trim() === '' && book.title.toLowerCase().includes(filters.title.toLowerCase())
        const authorMatch = filters.author === 'any' || book.author === filters.author
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;

            if (singleGenre === filters.genre) {
                genreMatch = true
            }
        }

        if (titleMatch && authorMatch && genreMatch) result.push(book)
    }

    return result
}

//.........................................................................//
const handleGenreFilter = (event) => {
    const selectedGenre = event.target.value;
    if (selectedGenre === 'any') {
      loadListItems(books);
    } else {
      const filteredBooks = books.filter(book => book.genre === selectedGenre);
      loadListItems(filteredBooks);
    }
  };

//.........................................................................//
const genreSearch = () => {
    const genreSelect = getDOM.search.genres
    const genreOptions = document.createElement('option')
    genreOptions.value = 'any'
    genreOptions.innerText = 'All Genres'
   
    for (const [id, genreName] of Object.entries(genres)) {
        const genreOption = document.createElement('option')

        genreOption.value = id;
        genreOption.innerText = genreName
        genreSelect.appendChild(genreOptions) 
    }
}

genreSearch()

//...........................................................................//
const authorSearch = () => {
    const authorSelect = getDOM.search.author;
    const authorsOptions = document.createElement('option');
    authorsOptions.value = 'any';
    authorsOptions.innerText = 'All Authors';
    // authorSelect.appendChild(authorsOptions);

    for(const [id, authorName] of Object.entries(authors)) {
        const authorOption = document.createElement('option');
        authorOption.value = id;
        authorOption.innerText = authorName;
        authorSelect.appendChild(authorOption);
    }
};

authorSearch();

//..........................................................................//
const submit = (event) => {
    event.preventDefault()
    const response = convertSubmit(event)
    const result = filter(books, response)
    actions.list.recreate(result)
    DOM.search.overlay().open = false
}

const cancelButton = () => {
    if(getDOM.search.overlay.open === false) {
        getDOM.search.cancel.addEventListener('click', cancelButton)
    }
}
//..........................................................................//
const settingsButton = (event) => { 
    const isCancel = event.target === settings["overlay-cancel"]

    if(isCancel) {
        settings["theme-select"].value = state.theme
        settings.overlay.open = false;
    } else {
        settings.overlay.open = true;
    }
    getDOM.settings.overlay.open = true 
}
//...........................................................................//
getDOM.search.button.addEventListener('click', handleToggleSearch)
getDOM.search.genres.addEventListener('change', handleGenreFilter)
