// Prykadowe dane uzytkownika
const user = {
    name: "John Doe",
    username: "john_doe",
    posts: [
        { title: "Post 1", content: "To jest tresc pierwszego posta." },
        { title: "Post 2", content: "To jest tresc driugiego posta." },
        // Mozes dodac wiejec postow wrazie potrzeby
    ]
};

// Funkja do wyswietlenia informacji o profilu uzytkownika
function displayProfile() {
    const profileElement = document.getElementById("profile");
    profileElement.innerHTML = `
           <h2>${user.name}</h2>
          <p>@${user.username}</p>
      `;
}

// Funkja do wyswietlenia postow uzytkownika na stronie
function displayPosts() {
    const postsElement = document.getElementById("posts");

    user.posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
          `; 

        postsElement.appendChild(postElement);
    });
}

// Funkja do wylogowania uzytkownika (placeholder)
function logout() {
    alert("Uzytkownik zostal wlogowany.");
    // Tu mozna dodac rzeczywista logike wylogowania
}

// Wywolanie twe ze Ynizialny funkji calls
window.onload = function () {
    displayProfile();
    displayPosts();
};
