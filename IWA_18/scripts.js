import { html, updateDraggingHtml, createOrderHtml, moveToColumn } from "./view.js";
import { COLUMNS, createOrderData, updateDragging, state } from "./data.js";

const {add, other, help, edit, columns} = html

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
//................................................................................//

const handleDragStart = (event) => {
    event.preventDefault();
    const orderId = edit.target.value;
    event.dataTransfer.setData(orderId);
};
//................................................................................//
const handleDragEnd = (event) => {
    event.preventDefault();
    const draggedOrderId = event.dataTransfer.getData(orderFromState); 
    const selectedColumn = state.dragging.over; 
    const orderFromState = state.orders[draggedOrderId];

    orderFromState.column = selectedColumn

    const newOrderHtml = createOrderHtml(orderFromState);

    /**
     * Updating where the order will be while doing this it will delete the previous
     * location of where the order was, it clears it or rather resets the code that
     * fires.
     */
    const prevOrderHtmlNode = document.querySelector(`[data-id="${draggedOrderId}"]`);
    const prevColumn = prevOrderHtmlNode.dataset.area;
    columns[prevColumn].removeChild(prevOrderHtmlNode);
    columns[selectedColumn].appendChild(newOrderHtml);

    //this will update the entire html in order to reflect where the order was moved to
    updateDraggingHtml({ over: selectedColumn });
};
//...............................................................................//
// const handleHelpToggle = (event) => {
    const handleHelpToggle = (event) => {
        const { target } = event;
        const isCancel = target === help.cancel;
      
        if (isCancel) {
          help.overlay.open = false;
        } else {
          help.overlay.open = true;
        }
      
        other.add.focus();
      };
//...............................................................................//
function handleAddToggle(event) {
    const { target } = event;
    const isAddOrderButton = target === other.add;
  
    if (isAddOrderButton) {
      add.overlay.open = true;
    } else {
      add.overlay.open = false;
      add.form.reset();
    }
  
    other.add.focus();
  };
//................................................................................//
const handleAddSubmit = (event) => {
    event.preventDefault();
    const {form, overlay, title, table} = add;

    const orderData = createOrderData({
        title: title.value,
        table: table.value,
        column: COLUMNS[0],
    });

    state.orders[orderData.id] = orderData;

//creating the order to be pushed to the HTLM document
    const orderHtml = createOrderHtml(orderData);
    columns[COLUMNS[0]].appendChild(orderHtml);

// Reset form and close overlay
  form.reset();
  overlay.open = false;
  other.add.focus();
};
//................................................................................//
const handleEditToggle = (event) => {
  const {form, overlay, title, table, id, column} = edit
//   const clickedOrder = event.target.dataset.id;
  const { target } = event;
const isOrder = target.className === "order";

if (isOrder) {
    const { id } = target.dataset;
    const orderFromState = state.orders[id];

    overlay.open = true;
    title.value = orderFromState.title;
    table.value = orderFromState.table;
    column.value = orderFromState.column;
    edit.id.value = orderFromState.id;
  } else {
    overlay.open = false;
    other.add.focus();
  }
//   if (isOrder) {
//      edit.overlay.open = false;
//      other.add.focus();
//    } else {
//     const orderData = createOrderData({
//         title: title.value,
//         table: table.value,
//         column: COLUMNS[0],
//     });

//     state.orders[isOrder]; 

//      if (orderData) {
//         title.value = orderData.title;
//         table.value = orderData.table;
//         column.value = orderData.column
//      }
//      overlay.open = true;
//    };

//    title.focus();
};
//..............................................................................//
const handleEditSubmit = (event) => {
    event.preventDefault();
    const {title, table, overlay, column} = edit
    const orderId = edit.id.value;
    const selectedColumn = column.value;

    // const clickedOrder = event.target.dataset.id //error as the data is not updating
    
    const orderFromState = state.orders[orderId];
    const prevOrderColumn = orderFromState.column;
    const currentOrderHtmlNode = document.querySelector(`[data-id="${orderId}"]`);

    orderFromState.title = title.value;
    orderFromState.table = table.value;
    orderFromState.column = column.value, selectedColumn;

    const newOrderHtml = createOrderHtml(orderFromState);

    columns[prevOrderColumn].removeChild(currentOrderHtmlNode);
    columns[orderFromState.column].appendChild(newOrderHtml);
    columns[selectedColumn].appendChild(newOrderHtml);
    edit.overlay.open = false;
    other.add.focus();

}
//.................................................................................//
//(delete not working could be because we changed the orderData to orderFromState)
const handleDelete = (event) => {
  const orderId = edit.id.value;

  if (orderId) {
    delete state.orders[orderId];
  };

  const currentOrderHtmlNode = document.querySelector(`[data-id="${orderId}"]`);
  if (currentOrderHtmlNode) {
    currentOrderHtmlNode.remove();
  };

  edit.overlay.open = false; 
};
//................................................................................//
add.cancel.addEventListener('click', handleAddToggle)
other.add.addEventListener('click', handleAddToggle)
add.form.addEventListener('submit', handleAddSubmit)

other.grid.addEventListener('click', handleEditToggle)
edit.cancel.addEventListener('click', handleEditToggle)
edit.form.addEventListener('submit', handleEditSubmit)
edit.delete.addEventListener('click', handleDelete)

help.cancel.addEventListener('click', handleHelpToggle)
other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
//..................................................................................//