export const signUp = async (
  username,
  email,
  password,
  fullname,
  birthday,
  setter
) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST", //HTTP verb
      headers: { "Content-type": "application/json" }, //Sending JSON data instructions
      body: JSON.stringify({ username, email, password, fullname }),
    }); //Body that has been turned into JSON with stringify
    const data = await response.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};
