//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categories = document.querySelectorAll('#categories > li.item');
console.log('Кількість категорій:', categories.length);

//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

for (const category of categories) {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemCount = category.querySelectorAll('li').length;
  console.log(
    `Категорія: ${categoryTitle}; Кількість елементів: ${categoryItemCount}`
  );
}
