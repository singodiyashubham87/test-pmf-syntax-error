// The HTML and CSS code is provided to you.
//What is expected of you in this assignment

// 1. Fetch GitHub User Data using the fetch() API.
// 2. Extract user details (name, bio, avatar, followers, and public repos).
// 3. Update the UI dynamically to show user information.



// Function to fetch user data from GitHub API and display it
async function fetchGitHubUser(username) {
    try {
        // TODO: Use fetch to get user details from GitHub API. Here is the API https://api.github.com/users/${username}. store the fetched data in const response.(always use a await keyword for this function.
        const response = await fetch(`https://api.github.com/users/${username}`);
       
        // This will Handle non-existent users(If a particular username is not present, this line will return user not found. )
        if (response.status === 404) {
            document.getElementById("userInfo").innerHTML = <p style="color: red;">User not found!</p>;
            return;
        }
        const userData = await response.json()
  
        // This will Convert response to JSON. The response received from the fetch operation should get convereted to json format and stored in const userData.
  
  
        //Update UI with user details(This is already done for you) try reading and understandng how userData which is the json format of the response fetched is analysed to add name, bio, avatr , followers and public repositories and is reflected in the UI dynamically.
        document.getElementById("userInfo").innerHTML = `
            <img src="${userData.avatar_url}" alt="User Avatar">
            <h3>${userData.name || "No Name Available"}</h3>
            <p>${userData.bio || "No Bio Available"}</p>
            <p>Followers: ${userData.followers}</p>
            <p>Public Repositories: ${userData.public_repos}</p>
        `;
        // Any errors in fetching or converting is caught here, hence we are using a try and catch.
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        document.getElementById("userInfo").innerHTML = <p style="color: red;">Something went wrong. Please try again.</p>;
    }
  }
  
  // The Event listener for button click is already done for you. We have a button in HTML with id'searchBtn'. When a click is made to it, we are find he username that is typed in the input. If no input is typed in, we make it prompt saying 'Enter a username'.
  document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
  
    if (username === "") {
        document.getElementById("userInfo").innerHTML = <p style="color: red;">Please enter a username.</p>;
        return;
    }
  
    // Invoking the  function to fetch user data
    fetchGitHubUser(username);
  });