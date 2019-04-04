const ApiLib = {
  Get: async function(linkApi, authenToken = null) {
    const response = await fetch(linkApi, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authenToken: authenToken
      }
    });

    const data = await response.json();

    return data;
  },

  Put: async function(linkApi, body, authenToken = null) {
    const response = await fetch(linkApi, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authenToken: authenToken
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return data;
  },

  Post: async function(linkApi, body, authenToken = null) {
    const response = await fetch(linkApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authenToken: authenToken
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return data;
  },

  Delete: async function(linkApi, authenToken = null) {
    const response = await fetch(linkApi, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authenToken: authenToken
      }
    });

    const data = await response.json();

    return data;
  }
};

export default ApiLib;
