// Write a js function that takes the password and encrypt it as returns random text
//Write a js function that take a user password and compare the existing hash and return boolean value.

//packaage: bcryptjs
const bcrypt = "bcryptjs";

const gethash = (string) => bcrypt.hashSync(String(string));
const compareHash = (string, hashString) =>
  bcrypt.comparesync(String(string), hashString);

const hash = gethash("Appleball");
console.log({ hash });

const checkpw = hash("Appleball", hash);
console.log({ checkpw });
