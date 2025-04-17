const today = new Date();

const year = today.getFullYear(); // → 2024
const month = today.getMonth() + 1; // → 0が1月なので +1 必要！
const day = today.getDate(); // → 12

console.log(`${year}年${month}月${day}日`);
