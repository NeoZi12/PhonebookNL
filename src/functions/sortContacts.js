// this function sort contacts
export default function sortContacts(contacts, sortParameter, favorite) {
  // sort email
  if (sortParameter === "email") {
    return [...contacts].sort((a, b) => a.email.localeCompare(b.email));
  }
  if (sortParameter === "bigToSmall") {
    return [...contacts].sort((a, b) => a.firstname.localeCompare(b.firstname));
  }
  if (sortParameter === "smallTobig") {
    return [...contacts].sort((a, b) => b.firstname.localeCompare(a.firstname));
  }
  if (sortParameter === "favorite") {
    return contacts.filter((el) => favorite.includes(el.id));
  }
  if (sortParameter === "phone") {
    return [...contacts].sort((a, b) => a.phone.localeCompare(b.phone));
  }
  return contacts;
}
