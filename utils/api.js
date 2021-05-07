export async function getCharacters(category) {
  const promise = fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data;
}

// export async function getCharacter(charID) {
//   const promise = fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${charID}`);

//   const response = await promise;
//   if (response.status === 404) {
//     return {};
//   }
//   const data = await response.json();
//   return data;
// }
