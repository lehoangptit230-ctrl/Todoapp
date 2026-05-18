const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
            const li = document.createElement('li');
                    li.innerHTML = `
                                <span>${input.value}</span>
                                            <button class="delete-btn">X</button>
                                                    `;
                                                            todoList.appendChild(li);
                                                                    [span_3](start_span)input.value = ""; // Xóa nội dung input sau khi thêm[span_3](end_span)
                                                                        }
                                                                        });
                                                                        