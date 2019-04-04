import ApiLib from '../lib/api';

export async function loadItems() {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Get('http://172.16.0.152:3000/api/v1/items', authenToken).then(
      function(result) {
        return resolve(result);
      }
    );
  });

  return { type: 'LOAD_ITEMS', items: response.items, result: response };
}

export async function editItems(item) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Put(
      `http://172.16.0.152:3000/api/v1/items/${item.id}`,
      item,
      authenToken
    ).then(function(result) {
      return resolve(result);
    });
  });

  return { type: 'EDIT_ITEMS', item: response.item, result: response };
}

export async function removeItem(id) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Delete(
      `http://172.16.0.152:3000/api/v1/items/${id}`,
      authenToken
    ).then(function(result) {
      return resolve(result);
    });
  });

  return { type: 'REMOVE_ITEM', id: id, result: response };
}

export async function searchItemsByCategory(term) {
  const authenToken = window.sessionStorage.getItem('authenToken');

  let response = await new Promise(resolve => {
    ApiLib.Get(
      `http://172.16.0.152:3000/api/v1/items?search=${term}`,
      authenToken
    ).then(function(result) {
      return resolve(result);
    });
  });

  return { type: 'LOAD_ITEMS', items: response.items, result: response };
}
