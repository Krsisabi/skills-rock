async function fetchRandomUsers() {
  const statusMessage = document.getElementById("statusMessage");
  const userList = document.getElementById("userList");

  try {
    statusMessage.textContent = "Загрузка...";

    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const users = data.results;

    statusMessage.textContent = "";

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.classList.add("user-list__item");

      listItem.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="${user.name.first}" />
            <div>
              <p><strong>${user.name.first} ${user.name.last}</strong></p>
              <p>${user.email}</p>
            </div>
          `;

      userList.appendChild(listItem);
    });
  } catch (error) {
    statusMessage.textContent = "Не удалось загрузить пользователей";
    console.error("Ошибка при получении данных:", error);
  }
}

fetchRandomUsers();
