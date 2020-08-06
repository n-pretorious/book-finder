const findBooks = (elem) => {
  const terms = elem.val();
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const handleResults = (data) =>
    dna.clone('book', data.items, { empty: true, fade: true });
  fetchJson.get(url, { q: terms }).then(handleResults);
  console.log(terms);  //verify user input
}