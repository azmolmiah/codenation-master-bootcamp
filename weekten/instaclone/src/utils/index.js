export const signUp = async (
  username,
  email,
  password,
  fullname,
  birthday,
  verification
) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST", //HTTP verb
      headers: { "Content-type": "application/json" }, //Sending JSON data instructions
      body: JSON.stringify({
        username,
        email,
        password,
        fullname,
        birthday,
        verification,
      }),
    }); //Body that has been turned into JSON with stringify
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: { "Content-type": "application/json" }, //Sending JSON data instructions
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data.user));
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = async (username, setter) => {
  try {
    const response = await fetch(`http://localhost:5001/${username}/posts`);
    const data = await response.json();
    setter(data.posts);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`http://localhost:5001/posts/${id}`, {
      method: "DELETE",
    });
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
