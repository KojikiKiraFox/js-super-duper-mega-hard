'use strict'

let btnAdd = document.querySelector('.table__btn-trig')
let btnDel = document.querySelector('.table__btn-del')
let closeBtn = document.querySelector('.modal__close');
let btnSend = document.querySelector('.btn-send')

let modal = document.querySelector('.modal')
let modalDialog = document.querySelector('.modal__dialog')

let table = document.querySelector('table')

let name = document.querySelectorAll('.name')
let sum = document.querySelectorAll('.sum')
let cal = document.querySelectorAll('.cal')
let numGun = document.querySelector('.number-gun')
let base = document.querySelector('.base')
let crime = document.querySelector('.crime')

let modalName = document.querySelector('#modal__user-name')
let modalPrice = document.querySelector('#modal__user-sum')
let modalCal = document.querySelector('#modal__user-cal')
let modalNumber = document.querySelector('#number')
let modalBase = document.querySelector('#base')
let modalLight = document.querySelector('#light')



let tr
let id
let newNum
let newName
let newPrice
let newNumber
let newBase
let newLight
let newCal
let targetTd
let delArr = 0
let arr = []
let obj = new Object()


btnAdd.addEventListener('click', function (){
    modal.classList.toggle('modal-visible')
})

closeBtn.addEventListener('click', function (){
    modal.classList.toggle('modal-visible')
})


btnDel.addEventListener('click', function (){
    let btnDelTable = document.querySelectorAll('.btn-delited')
    btnDelTable.forEach(function(item){
        item.classList.toggle('btn-delited-visible')
    })
})

btnSend.addEventListener('click', function () {
    let num = document.querySelectorAll('.num')

    newNumber = modalNumber.checked ? 'Есть' : 'Нету'
    newBase = modalBase.checked ? 'Да' : 'Нет'
    newLight = modalLight.checked ? 'Да' : 'Нет'

    newNum = arr.length + 1
    newName = modalName.value
    newPrice = modalPrice.value
    newCal = modalCal.value

    
    
    
    tr = document.createElement('tr')
    tr.innerHTML = `<td class="table__item-content num">${newNum}</td> <td class="table__item-content name">${newName}</td> <td class="table__item-content num">${newPrice}</td> <td class="table__item-content cal">${newCal}</td> <td class="table__item-content cal">${newNumber}</td> <td class="table__item-content cal">${newBase}</td> <td class="table__item-content cal">${newLight}</td> <td class="table__item-content"><button class="btn-delited">Удалить</button></td>`
    table.append(tr)
    getObj()
})


table.addEventListener('click', function (event){
    if (event.target.closest('.btn-delited')){
        delArr = event.target.closest('tr')
        delArr.remove()
        targetTd = delArr.querySelector('.num')

        arr.forEach((obj, index) => {
            if(+targetTd.textContent === obj.id){
                arr.splice(index, 1)
            }
        })
        pushLocal()
    }
})
        
addEventListener('keydown', function(e){
    if (e.keyCode == 27)
    modal.classList.remove('modal-visible')
    
})


const getObj = function(){
    obj['id'] = newNum
    obj['name'] = newName
    obj['price'] = newPrice
    obj['calibr'] = newCal
    obj['number'] = newNumber
    obj['base'] = newBase
    obj['light'] = newLight
    getArray()
}

const getArray = function (){
    arr.push(obj)
    console.log(arr);
    obj = {}
    pushLocal()
}

const pushLocal = function(){
    localStorage.setItem(1, JSON.stringify(arr))
}

const loadLocal = function(){
    arr = JSON.parse(localStorage.getItem(1)) == null ? [] : JSON.parse(localStorage.getItem(1))
    console.log(arr);
    for(let key in arr){
        id = arr[key]
        newNum = id.id
        newName = id.name
        newPrice = id.price
        newCal = id.calibr
        newNumber = id.number
        newBase = id.base
        newLight = id.light
        
        tr = document.createElement('tr')
        tr.innerHTML = `<td class="table__item-content num">${newNum}</td> <td class="table__item-content name">${newName}</td> <td class="table__item-content num">${newPrice}</td> <td class="table__item-content cal">${newCal}</td> <td class="table__item-content cal">${newNumber}</td> <td class="table__item-content cal">${newBase}</td> <td class="table__item-content cal">${newLight}</td> <td  class="table__item-content"><button class="btn-delited">Удалить</button></td>`
        table.append(tr)
    }
}

loadLocal()