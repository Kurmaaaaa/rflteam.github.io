const response = {
    "pokedata": [
       {
          "name": "Асланов Эльшан",
          "type": "Вратарь",
          "hp": 73,
          "attack": 10,
          "defense": 1,
          "spAttack": 2,
          "spDefense": 3,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Глазков Максим",
          "type": "Вратарь",
          "hp": 52,
          "attack": 1,
          "defense": 0,
          "spAttack": 0,
          "spDefense": 0,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Русанов Олег",
          "type": "Защитник",
          "hp": 72,
          "attack": 11,
          "defense": 6,
          "spAttack": 6,
          "spDefense": 12,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Клименков Сергей",
          "type": "Защитник",
          "hp": 92,
          "attack": 8,
          "defense": 8,
          "spAttack": 3,
          "spDefense": 12,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Баранов Иван",
          "type": "Защитник",
          "hp": 76,
          "attack": 9,
          "defense": 5,
          "spAttack": 1,
          "spDefense": 6,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Каргин Александр",
          "type": "Защитник",
          "hp": 79,
          "attack": 10,
          "defense": 6,
          "spAttack": 4,
          "spDefense": 10,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Галиев Денис",
          "type": "Защитник",
          "hp": 72,
          "attack": 8,
          "defense": 2,
          "spAttack": 0,
          "spDefense": 2,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Мкртчян Арман",
          "type": "Защитник",
          "hp": 64,
          "attack": 4,
          "defense": 5,
          "spAttack": 1,
          "spDefense": 6,
          "speed": 1,
          "total": 0
       },
       {
          "name": "Корабельников Анатолий",
          "type": "Нападающий",
          "hp": 53,
          "attack": 7,
          "defense": 6,
          "spAttack": 4,
          "spDefense": 10,
          "speed": 0,
          "total": 0
       },
       {
          "name": "Золин Илья",
          "type": "Нападающий",
          "hp": 50,
          "attack": 6,
          "defense": 1,
          "spAttack": 5,
          "spDefense": 6,
          "speed": 1,
          "total": 0
       },
       {
        "name": "Щербинин Алексей",
        "type": "Нападающий",
        "hp": 50,
        "attack": 5,
        "defense": 2,
        "spAttack": 0,
        "spDefense": 2,
        "speed": 0,
        "total": 0
        },
        {
            "name": "Беляев Данила",
            "type": "Нападающий",
            "hp": 50,
            "attack": 7,
            "defense": 2,
            "spAttack": 1,
            "spDefense": 3,
            "speed": 0,
            "total": 0
        },
        {
            "name": "Баранов Данила",
            "type": "Нападающий",
            "hp": 50,
            "attack": 8,
            "defense": 1,
            "spAttack": 1,
            "spDefense": 2,
            "speed": 1,
            "total": 0
        }
       
    ]
 }
 
 const tableContent = document.getElementById("table-content")
 const tableButtons = document.querySelectorAll("th button");
 
 const createRow = (obj) => {
   const row = document.createElement("tr");
   const objKeys = Object.keys(obj);
   objKeys.map((key) => {
     const cell = document.createElement("td");
     cell.setAttribute("data-attr", key);
     cell.innerHTML = obj[key];
     row.appendChild(cell);
   });
   return row;
 };
 
 const getTableContent = (data) => {
   data.map((obj) => {
     const row = createRow(obj);
     tableContent.appendChild(row);
   });
 };
 
 const sortData = (data, param, direction = "asc") => {
   tableContent.innerHTML = '';
   const sortedData =
     direction == "asc"
       ? [...data].sort(function (a, b) {
           if (a[param] < b[param]) {
             return -1;
           }
           if (a[param] > b[param]) {
             return 1;
           }
           return 0;
         })
       : [...data].sort(function (a, b) {
           if (b[param] < a[param]) {
             return -1;
           }
           if (b[param] > a[param]) {
             return 1;
           }
           return 0;
         });
 
   getTableContent(sortedData);
 };
 
 const resetButtons = (event) => {
   [...tableButtons].map((button) => {
     if (button !== event.target) {
       button.removeAttribute("data-dir");
     }
   });
 };
 
 window.addEventListener("load", () => {
   getTableContent(response.pokedata);
 
   [...tableButtons].map((button) => {
     button.addEventListener("click", (e) => {
       resetButtons(e);
       if (e.target.getAttribute("data-dir") == "desc") {
         sortData(response.pokedata, e.target.id, "desc");
         e.target.setAttribute("data-dir", "asc");
       } else {
         sortData(response.pokedata, e.target.id, "asc");
         e.target.setAttribute("data-dir", "desc");
       }
     });
   });
 });

 