const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

let items = [];

function addItem() {
    const value = input.value.trim();
    if (value) {
        items.push(value);
        input.value = "";
        renderItems();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}
function renderItems() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.className ="flex justify-between items-center bg-gray-100 rounded px-4 py-2";
        li.innerHTML = `
        <span>${index + 1}. ${item}</span>
        <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onclick="deleteItem(${index})"> Delete </button>
        `;
        itemList.appendChild(li);
    });
}
addButton.addEventListener("click", addItem);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
});