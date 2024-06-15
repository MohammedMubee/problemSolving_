//find the Equal string in the two different array

//step1: use empty list
//step2: use for loop iterate the every index of querry variable
//step3: declare the counter initial value is 0
//step4: inside the outer loop iterate the string varibale use another loop j index
//step5 : if querry varibale and string varibale equal means counter will increase the  count
//step6 : then push counter is push into return_list
//step7: return the return_list

const FindEqualString = (string, querry) => {
  let return_list = [];

  for (let i = 0; i < querry.length; i++) {
    let counter = 0;
    for (let j = 0; j < string.length; j++) {
      if (querry[i] == string[j]) {
        counter += 1;
        console.log(counter);
      }
    }
    return_list.push(counter);
  }
  return return_list;
};

const string = ["abc", "bc", "dc"];
const querry = ["abc", "bc", "dc"];
console.log(FindEqualString(string, querry));
