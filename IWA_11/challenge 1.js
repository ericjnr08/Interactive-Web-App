const order1Root = document.querySelector('[data-key = "order1"]');
const order1Biscuits = document.querySelector('[data-biscuits ="10"}');
const order1Donuts = document.querySelector('[data-donuts ="13"]');
const order1Pancakes= document.querySelector('[data-pancakes ="0"]');
const order1Status = document.querySelector('status');

order1Biscuits = order1Root.dataset.biscuits;
order1Donuts = order1Root.dataset.donuts;
order1Pancakes = order1Root.dataset.pancakes;
order1Status = order1Root.dataset.Delivered === "true" ? "Delivered" : "Pending";

const order2Root = document.querySelector('[data-key = "order1"]');
const order2Biscuits = document.querySelector('[data-biscuits = "10"}');
const order2Donuts = document.querySelector('[data-donuts = "13"]');
const order2Pancakes= document.querySelector('[data-pancakes = "0"]');
const order2Status = document.querySelector('status');

order2Biscuits = order2Root.dataset.biscuits;
order2Donuts = order2Root.dataset.donuts;
order2Pancakes = order2Root.dataset.pancakes;
order2Status = order2Root.dataset.Delivered === "true" ? "Delivered" : "Pending";

const order3Root = document.querySelector('[data-key = "order1"]');
const order3Biscuits = document.querySelector('[data-biscuits = "10"}');
const order3Donuts = document.querySelector('[data-donuts = "13"]');
const order3Pancakes= document.querySelector('[data-pancakes = "0"]');
const order3Status = document.querySelector('status');

order3Biscuits = order3Root.dataset.biscuits;
order3Donuts = order3Root.dataset.donuts;
order3Pancakes = order3Root.dataset.pancakes;
order3Status = order3Root.dataset.Delivered === "true" ? "Delivered" : "Pending";
