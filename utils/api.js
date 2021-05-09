export async function getCharacters(monsters) {
  const promise = fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/${monsters}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.data;
}

export async function all() {
  const promise = fetch("https://botw-compendium.herokuapp.com/api/v2");
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.data;
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
