import $ from 'jquery'
import './app1.css'

const $button1 = $('#add1')
const $button2 = $('#minus2')
const $button3 = $('#mul3')
const $button4 = $('#divide4')
const $number = $('#number')
const n = localStorage.getItem("n")
$number.text(n || 300)

$button1.on('click', ()=>{
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button2.on('click', ()=>{
    let n = parseInt($number.text())
    n -= 2
    localStorage.setItem('n', n)
    $number.text(n)
})
$button3.on('click', ()=>{
    let n = parseInt($number.text())
    n *= 3
    localStorage.setItem('n', n)
    $number.text(n)
})
$button4.on('click', ()=>{
    let n = parseInt($number.text())
    n /= 4
    localStorage.setItem('n', n)
    $number.text(n)
})