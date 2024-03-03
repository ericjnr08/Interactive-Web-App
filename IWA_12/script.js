const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//Pull elements through into

const selector = (elements) => document.querySelector(elements);
const status = document.querySelector('.status');

//update via coach and redesign
const books = [
    {
        status: document.querySelector('#book1 .status').innerText,
        html: {
            status: document.querySelector('#book1 .status'),
            reserve: document.querySelector('#book1 .reserve'),
            checkout: document.querySelector('#book1 .checkout'),
            checkin: document.querySelector('#book1 .checkin'),
        },
    },

{
    status: document.querySelector('#book2 .status').innerText,
    html: {
        status: document.querySelector('#book2 .status'),
        reserve: document.querySelector('#book2 .reserve'),
        checkout: document.querySelector('#book2 .checkout'),
        checkin: document.querySelector('#book2 .checkin'), 
    },
},

{
    status: document.querySelector('#book3 .status').innerText,
    html: {
        status: document.querySelector('#book3 .status'),
        reserve: document.querySelector('#book3 .reserve'),
        checkout: document.querySelector('#book3 .checkout'),
        checkin: document.querySelector('#book3 .checkin'), 
    },
},

];

//Button functionality added to the overall book element
books[0].html.checkin.style.color = '';
books[0].html.status.style.color = STATUS_MAP[books[0].status].color;
books[0].html.reserve.disabled = !STATUS_MAP[books[0].status].canReserve ? 'enable' : 'disabled';
books[0].html.checkout.disabled = !STATUS_MAP[books[0].status].canCheckout ? 'enable' : 'disabled';
books[0].html.checkin.disabled = !STATUS_MAP[books[0].status].canCheckIn ? 'enable' : 'disabled';

//---------------------...ooo000 END OF FILE 000ooo...------------------------//