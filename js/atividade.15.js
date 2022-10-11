let shoppingCart = [
    {
        product: 'Leite Barnabé',
        measure: "Litro",
        qty: 5,
        price: 7.8
    },
    {
        product: 'Alcantra-fribov',
        measure: "kg",
        qty: 1.896,
        price: 40
    },
    {
        product: 'Refrigerante - Toca Polar',
        measure: "Pet - 2 Litros",
        qty: 3,
        price: 8.99
    },
    {
        product: 'Arroz - Tio Chicão',
        measure: "Pacote - 1kg",
        qty: 4,
        price: 5.99
    },
    {
        product: 'Peito de Frango - Hot Chicken',
        measure: "kg",
        qty: 5,
        price: 16.99
    },
];
let busca = document.getElementById('table_body');
let total= document.getElementById('total');
let calculo=shoppingCart.map((valor)=>{
    let valores =valor.price*valor.qty
    return valores
})


let somatotal =calculo.reduce((inicial,proximo)=>{
    return inicial+=proximo

})
let exibir=((elemento)=>{
busca.innerHTML+=`<tr>
<td>${elemento.product}</td>
<td>${elemento.measure}</td>
<td>${elemento.qty}</td>
<td>${elemento.price}</td>
</tr>
`
let resultado='valor total dos produtos é :'+somatotal.toLocaleString('pt-br',{style: 'currency',currency:'BRL'})
total.innerHTML=resultado
})
shoppingCart.forEach(exibir)