const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
