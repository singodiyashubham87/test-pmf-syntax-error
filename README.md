Welcome to the API assignment.


## Understanding the Boilerplate Code
The provided HTML file includes:
1️⃣ An input field for the user to enter a GitHub username.
<input type="text" id="username" placeholder="Enter GitHub Username">

2️⃣ A search button to trigger the API request.
<button id="searchBtn">Search</button>

3️⃣ A container (div) to display user information fetched from the API.
<div id="userInfo"></div>
🔹 Your JavaScript code will interact with these elements to fetch data and update the UI dynamically.

## 📌 What You Need to Implement
You need to complete the function fetchGitHubUser(username) that:
1️⃣ Fetches user data using the GitHub API:
https://api.github.com/users/{username}


2️⃣ Extracts user details from the response, including:
- Profile picture
- Name
- Bio
- Number of followers
- Number of public repositories

3️⃣ Updates the UI dynamically to display the extracted user details.(This is already done for you! Enjoy!)

🚀 Steps to Complete the Assignment
Step 1: Fetch GitHub User Data
💡 Note: Use the await keyword to ensure that JavaScript waits for the API response before proceeding.

Step 2: Convert Response to JSON
After fetching the data, convert the response into JSON format and store it in userData.
💡 This will allow you to access and manipulate the data easily.

Step 3: Handle Edge Cases
✅ If the username is invalid or not found, return an error message:
if (response.status === 404) {
    document.getElementById("userInfo").innerHTML = `<p style="color: red;">User not found!</p>`;
    return;
}
✅ If the API request fails (e.g., network issue), display a different error message:
catch (error) {
    console.error("Error fetching GitHub user:", error);
    document.getElementById("userInfo").innerHTML = `<p style="color: red;">Something went wrong. Please try again.</p>`;
}
Step 4: Update the UI
Once you have the user data, dynamically update the HTML:
document.getElementById("userInfo").innerHTML = `
    <img src="${userData.avatar_url}" alt="User Avatar">
    <h3>${userData.name || "No Name Available"}</h3>
    <p>${userData.bio || "No Bio Available"}</p>
    <p>Followers: ${userData.followers}</p>
    <p>Public Repositories: ${userData.public_repos}</p>
`;
💡The || operator ensures that if the value is null, a fallback text will be displayed.

🔬 Testing Your Code
We have provided a Jasmine test case to evaluate your implementation.
To test your work:
1️⃣ Open the spec/githubUserSpec.js file.
2️⃣ Run the test using Jasmine or any JavaScript testing framework.
3️⃣ The test will check:
✅ If you are fetching data correctly.
✅ If the UI updates correctly with profile details.
🔹 Test using a real GitHub username like "octocat" before submitting your work.
🔹 The test case will use "octocat" as the username and validate that the correct user information is fetched and displayed.

Test Example:
it("should fetch an existing GitHub user's data and update the UI correctly", function (done) {
    const testUsername = "octocat"; // A well-known GitHub test user
    fetchGitHubUser(testUsername);
    
    setTimeout(() => {
        const userInfo = document.getElementById("userInfo").innerHTML;
        expect(userInfo).toContain("The Octocat");
        expect(userInfo).toContain(`<img src="https://avatars.githubusercontent.com/u/583231?v=4"`);
        done();
    }, 2000);
});
💡 If all test cases pass, your implementation is correct! ✅


🚀 Good luck! Happy Coding! 🚀