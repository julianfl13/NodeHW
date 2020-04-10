const api = {
  async getUser(username) {
    const res = await fetch({url: `https://api.github.com/users/${username}`, method: 'GET' });
    const user = res.json();
    console.log(user);

  }
};

module.exports = api;
