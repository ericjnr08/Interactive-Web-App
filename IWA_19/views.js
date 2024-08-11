import { authors, genres } from './data.js'

export const state = {
    "extracted-books": [],
    "books-per-page": BOOKS_PER_PAGE,
    matches: [],
};

export const setTheme = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }
};

export const createPreview = ({author, id, image, title, summary, publicationDate}) => {
    const element = document.createElement('div');
    element.classList = "preview";
    element.dataset.id = id;

    element.innerHTML = /* html */ `
    <img
        class="preview__image"
        src="${image}"
    />

    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${author[authors]}</div>
    </div>
`;
return element;
};

export const loadListItems = (booksToShow) => {
    const {items} = getDOM.list;
    
    for (const bookItem of booksToShow) {
        const {author, id, image, title} = bookItem;
        const authorName = authors[author];
        const preview = createPreview({
            author: authorName,
            id,
            image,
            title,
        });

        items.appendChild(preview);
    }
};

export const getDOM = {
    list: {
        items: () => document.querySelector('[data-list-items]'),
        message: () => document.querySelector('[data-list-message]'),
        button: () => document.querySelector('[data-list-button]'),
        overlay: () => document.querySelector('[data-list-active]'),
        "overlay-close": document.querySelector('[data-list-close]'),
        "overlay-blur": document.querySelector('[data-list-blur]'),
        "overlay_image": document.querySelector('[data-list-image]'),
        "overlay-title": document.querySelector('[data-list-title]'),
        "overlay__data": document.querySelector('[data-list-subtitle]'),
        "overlay-subtitle": document.querySelector('[data-list-subtitle]'),
        "overlay-description": document.querySelector('[data-list-description]'),
},

search: {
    button: document.querySelector('[data-header-search]'),
    overlay: document.querySelector('[data-search-overlay]'),
    input: document.querySelector('[data-search-title]'),
    title: document.querySelector('search-title'),
    genres: document.querySelector('[data-search-genres]'),
    author: document.querySelector('[data-search-authors]'),
    cancel: document.querySelector('[data-search-cancel]'),
    form: document.querySelector('[data-search-form]'),

},
settings: {
    button: () => document.querySelector('[header-settings]'),
    theme: () => document.querySelector('[data-settings-theme]'),
    overlay: () => document.querySelector('[data-settings-overlay]'),
    form: () => document.querySelector('[data-settings-form]'),
    cancel: () => document.querySelector('[settings-cancel]'),
}
}


export const initialise = () => {
    getDOM.list.items().appendChild(createPreviewsFragment(books, [0, BOOKS_PER_PAGE])),
    getDOM.search.genres().appendChild(createGenresFragment(genres)),
    getDOM.search.author().appendChild(createAuthorsFragment(authors)),
    getDOM.settings.theme().value = isDarkMode() ? 'night' : 'day',
    setTheme(isDarkMode() ? 'night' : 'day');

const remaining = books.length - BOOKS_PER_PAGE
    DOM.list.button().innerText = `Show more (${remaining})`
}
//......................................END...............................................//