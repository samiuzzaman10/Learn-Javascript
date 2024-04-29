const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Task one is compleated");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task two is compleated");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("Task three is not compleated");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("Task four is compleated");
  });
};

// Async Await is ES7 version

const callAllTasks = async () => {
    try{
    const task1 = await taskOne();
    console.log(task1);
    const task2 = await taskTwo();
    console.log(task2);
    const task3 = await taskThree();
    console.log(task3);
    const task4 = await taskFour();
    console.log(task4);
    } catch(error){
        console.log(error);
    }
}

callAllTasks();