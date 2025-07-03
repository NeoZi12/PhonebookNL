// this function validate new contact,
// if already exists return true, otherwise false
export default function validateUser(firstname, lastname, listOfUsers) {
  console.log(firstname, lastname);

  const result = listOfUsers.find((el) => {
    return (
      el.firstname.toLowerCase() === firstname.toLowerCase() &&
      el.lastname.toLowerCase() === lastname.toLowerCase()
    );
  });

  console.log(result);
  return result;
}
