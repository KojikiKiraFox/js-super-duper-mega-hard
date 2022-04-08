'use strict'

let btnAdd = document.querySelector('.table__btn-trig')
let btnDel = document.querySelector('.table__btn-del')
let btnDelTable = document.querySelectorAll('.btn-delited')
let closeBtn = document.querySelector('.modal__close');
let btnSend = document.querySelector('.btn-send')

let modal = document.querySelector('.modal')
let modalDialog = document.querySelector('.modal__dialog')

let table = document.querySelector('table')
let num = document.querySelectorAll('.num')
let name = document.querySelectorAll('.name')
let sum = document.querySelectorAll('.sum')
let cal = document.querySelectorAll('.cal')
let numGun = document.querySelector('.number-gun')
let base = document.querySelector('.base')
let crime = document.querySelector('.crime')



btnAdd.addEventListener('click', function (){
    modal.classList.toggle('modal-visible')
})

closeBtn.addEventListener('click', function (){
    modal.classList.toggle('modal-visible')
})


btnDel.addEventListener('click', function (){
    btnDelTable.forEach(function(item){
        item.classList.toggle('btn-delited-visible')
    })
})



// btnDelTable.addEventListener('click', function (){
    //     btnDelTable.forEach((item, index) => {
        //         if(index == num){
                // table.deleteRow(1)
//         }
//     })
// })

addEventListener('keydown', function(e){
    if (e.keyCode == 27)
    modal.classList.toggle('modal-visible')
})
