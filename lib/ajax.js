function ajax({ url, method, body }) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json();
  });

  return response;
}

export function get(url) {
  return ajax({ url, method: 'GET' });
}

export function post(url, body) {
  return ajax({ url, method: 'POST', body});
}