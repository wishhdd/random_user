### Условия
Приложение должно представлять собой SPA на React версии не ниже 16.8. В качестве стейт менеджера использовать Redux. Для запросов к API можно использовать любой способ на усмотрение кандидата:нативный JS, jQuery, axios или другие сторонние библиотеки. Верстка должна быть реализована в соответствии с макетом, полностью вручную, без использования Bootstrap и библиотек компонентов Material UI, Ant Design и др.

Верстка должна быть резиновой (тянущейся) и адаптивной. На трех основных форм-факторах следует отрисовывать разное количество карточек на одной строке:
- десктоп от 1200 пикс - 4 карточки
- планшет от 768 пикс до 1199 пикс - 2 карточки
- телефон до 767 пикс - 1 карточка
Верстка должна быть кроссбраузерной и соответствовать макету в следующих браузерах:
- Internet Explorer 11
- Google Chrome, Mozilla Firefox, Safari, MS Edge последних версий. Поиск и фильтрация пользователей должны быть выполнены только на клиентской стороне, без дополнительных запросов к API.
Реализовать тестовое задание необходимо в открытом репозитории на GitHub.

### Задание
1. При загрузке страницы получать список из 20-30 пользователей, используя RandomUser API. Так же сделать бесконечный скроллинг. 
2. Выводить информацию о пользователях в виде карточек
3. Реализовать фильтрацию по полу (показывать только мужчин или только женщин)
4. Реализовать поиск пользователей по имени, фамилии и адресу.
5. Реализовать фильтрацию по возрастным группам
6. Реализовать сохранение списка пользователей на стороне клиента, чтобы при загрузке страницы не нужно было делать запрос к API.


### Поппробовать можно [тут](https://wishhdd.ru/RandomUser/).
