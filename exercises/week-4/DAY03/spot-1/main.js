function Family() {
  const members = [];

  function birth(name) {
    members.push(name);
    console.log(members);
  }

  return birth;
}

const giveBirth = Family();
//giveBirth("");
giveBirth("John"); // ["John"]
giveBirth("Jane"); // ["John", "Jane"]
giveBirth("Alice"); // ["John", "Jane", "Alice"]