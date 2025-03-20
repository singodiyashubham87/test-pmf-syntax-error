describe("GitHub User Fetching and UI Update", function () {

  it("should fetch an existing GitHub user's data and update the UI correctly", function (done) {
      const testUsername = "octocat"; // A well-known GitHub test user
      const apiURL = `https://api.github.com/users/${testUsername}`;

      fetch(apiURL)
          .then(response => response.json())
          .then(userData => {
              // Call the student's function
              fetchGitHubUser(testUsername);

              // Wait for the DOM update
              setTimeout(() => {
                  const userInfo = document.getElementById("userInfo").innerHTML;

                  expect(userInfo).toContain(userData.name || "No Name Available");
                  expect(userInfo).toContain(userData.bio || "No Bio Available");
                  expect(userInfo).toContain(`Followers: ${userData.followers}`);
                  expect(userInfo).toContain(`Public Repositories: ${userData.public_repos}`);
                  expect(userInfo).toContain(`<img src="${userData.avatar_url}"`);

                  done();
              }, 2000); // Wait for fetch to complete and update the DOM
          })
          .catch(error => {
              fail(`API Fetch failed: ${error}`);
              done();
          });
  });

});
