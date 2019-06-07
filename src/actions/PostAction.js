import ApiLib from '../lib/api';
import ENV from '../env';

export async function loadPosts() {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Get(ENV.apiLink + '/api/v1/posts', authenToken).then(function(
      result
    ) {
      return resolve(result);
    });
  });

  return { type: 'LOAD_POSTS', posts: response.posts, result: response };
}

export async function showPost(post_id) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Get(ENV.apiLink + '/api/v1/posts/' + post_id, authenToken).then(
      function(result) {
        return resolve(result);
      }
    );
  });

  return { type: 'SHOW_POST', post: response.post, result: response };
}

export async function editItems(item) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Put(
      `${ENV.apiLink}/api/v1/posts/${item.id}`,
      item,
      authenToken
    ).then(function(result) {
      return resolve(result);
    });
  });

  return { type: 'EDIT_ITEMS', item: response.post, result: response };
}

export async function removeItem(id) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Delete(`${ENV.apiLink}/api/v1/posts/${id}`, authenToken).then(
      function(result) {
        return resolve(result);
      }
    );
  });

  return { type: 'REMOVE_ITEM', id: id, result: response };
}

export async function searchItemsByCategory(term) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Get(`${ENV.apiLink}/api/v1/posts?search=${term}`, authenToken).then(
      function(result) {
        return resolve(result);
      }
    );
  });

  return { type: 'LOAD_ITEMS', items: response.posts, result: response };
}
