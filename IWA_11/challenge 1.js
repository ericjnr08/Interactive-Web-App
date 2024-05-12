// order 1

/**
 * @type {object} HTML
 */
//----------------------------------------------------------------------------//
const html = {
    order: {
        1: {
            root: document.querySelector('[data-key="order1"]'),
            biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order1"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
            status: document.querySelector('[data-key="order1"] .status dd')
        }
    }
};

html.orders[1].biscuits.innerText = data[1].biscuits
html.order[1].donuts.innerText = data[1].donuts
html.order[1].pancakes.innerText = data[1].pancakes
order1Status = order1Root.dataset.Delivered === "true" ? "Delivered" : "Pending";
//----------------------------------------------------------------------------//

//order 2
//----------------------------------------------------------------------------//
const html = {
    order: {
        2: {
            root: document.querySelector('[data-key="order2"]'),
            biscuits: document.querySelector('[data-key="order2"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order2"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order2"] .pancakes .count'),
            status: document.querySelector('[data-key="order2"] .status dd')
        }
    }
};

html.orders[2].biscuits.innerText = data[2].biscuits
html.order[2].donuts.innerText = data[2].donuts
html.order[2].pancakes.innerText = data[2].pancakes
order2Status = order2Root.dataset.delivered === "true" ? "delivered" : "Pending";
//----------------------------------------------------------------------------//

//order 3
//----------------------------------------------------------------------------//
const html = {
    order: {
        3: {
            root: document.querySelector('[data-key="order3"]'),
            biscuits: document.querySelector('[data-key="order3"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order3"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order3"] .pancakes .count'),
            status: document.querySelector('[data-key="order3"] .status dd')
        }
    }
};

html.orders[3].biscuits.innerText = data[3].biscuits
html.order[3].donuts.innerText = data[3].donuts
html.order[3].pancakes.innerText = data[3].pancakes
order3Status = order3Root.dataset.delivered === "true" ? "delivered" : "Pending";

//---------------------...ooo000 END OF FILE 000ooo...------------------------//