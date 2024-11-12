import { showData } from "./showData.js";

export function getData(url, container) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.forEach((item) => {
        fetch(item.url).then(
          response => response.json()
        ).then(
          singleData => {
            showData(container, singleData);
          }
        )
      })
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Promise resolved')
    })
} 