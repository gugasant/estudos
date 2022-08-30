let n1 = Number(window.prompt('Digite o primeiro número:'))
let n2 = Number(window.prompt('Digite o segundo número:'))
let op1 = window.prompt('Digite o símbolo da operação desejada: "+, -, *, /"')

if (op1 == '+'){
    res = n1 + n2
    document.write(`O resultado de ${n1} ${op1} ${n2} é ${res}`)
}
else if (op1 == '-'){
    res = n1 - n2
    document.write(`O resultado de ${n1} ${op1} ${n2} é ${res}`)
}
else if (op1 == '*'){
    res = n1 * n2
    document.write(`O resultado de ${n1} ${op1} ${n2} é ${res}`)
}
else if (op1 == '/'){
    res = n1 / n2
    resto = n1 % n2
    document.write(`O resultado de ${n1} ${op1} ${n2} é ${res}`)<br>
    document.write(`O resto é ${resto}`)
}
else {
    window.alert('Operação não encontrada')
}