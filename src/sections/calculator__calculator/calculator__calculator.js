(()=>{
    const chooseBtns = document.querySelectorAll('.calculator__calculator__choose__btn');
    const blocks = document.querySelectorAll('.calculator__calculator__grid__left-side__block')
    const totalV = document.querySelector('#totalValue')
    const totalA = document.querySelector('#totalAmount')
    const options = document.querySelectorAll('.calculator__calculator__grid__left-side__block__option')
    const checkboxes = document.querySelectorAll('.calculator__calculator__grid input')
    let program = 'individual'
    const calculate = () =>{
        let totalValue = 0;
        let totalAmount = 0;
        blocks.forEach((block)=>{
            const options = block.querySelectorAll('.calculator__calculator__grid__left-side__block__option')
                options.forEach((option)=>{
                    const inp = option.querySelector('input')
                    if (inp.checked) {
                        totalValue+= parseFloat(inp.value)
                        totalAmount+=1
                    }
                })
        })
        totalV.innerHTML = totalValue + ' руб.'
        totalA.innerHTML = totalAmount
    }

    const switchPrices = (price) =>{
        options.forEach((option)=>{
            const input = option.querySelector('input')
            const priceHtml = option.querySelector('.calculator__calculator__grid__left-side__block__option__price')
            if (price === 'individual'){
                let cur = priceHtml.dataset.price
                priceHtml.innerHTML = cur + ' руб.'
                input.value = cur
            } else if (price === 'paid'){
                let cur = priceHtml.dataset.anotherprice
                if (!!cur) {
                    priceHtml.innerHTML = cur + ' руб.'
                    input.value = cur
                }
            }

        })
    }

    switchPrices('individual')
    chooseBtns[0].classList.add('active')
    calculate();

    chooseBtns.forEach(btn => {
        btn.addEventListener("click", () =>{
            chooseBtns.forEach(btn=>{
                btn.classList.remove('active')
            })
            btn.classList.add('active')

            switchPrices(btn.dataset.key)
            program = btn.dataset.key
            calculate();
        })
    })

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () =>{
            calculate()
        })
    })


    const _template = require('lodash/template');
    const printTable = () =>{
        const printWindow = window.open('', '','width=500, height=700' );
        let table = _template(` 
            <table> 
                <tr>
                    <th colspan="2">    
                        Выбранные услуги, оказываемые отделениями сестринского ухода в АНО «Опека» <br> <u>
<% if (program === 'individual') {%> по индивидуальной программе<%}%>
<% if (program === 'paid') {%> Полностью на платной основе <%}%>
</u> 
                    </th>
                </tr> 
                <%= header %>
                <% options.forEach( (option)=>{ %>
                    <tr>
                        <td>
                            <%= option.text %>
                        </td>
                        <td class="value">
                            <%= option.value %> руб.
                        </td>
                    </tr>
                <%})%>
                <tr>
                    <td colspan="2">
                        Количество услуг:  <%= options.length %>
                    </td>
                </tr>
                <tr>
                    <td>Стоимость услуг:  </td>
                    <td>
                       <%= options.reduce((acc, a) =>{return acc + parseFloat(a.value)},0) %> руб.
                    </td>
                </tr>
            </table>
            <%= styles%>
            `)
        let header = _template(`
            <tr>
                <th>
                    Услуга
                </th>
                <th>
                    Цена
                </th>
            </tr>
        `)

        let styles = _template(`
        <style>
            *{
                font-family: "Times New Roman", Times, serif;
                font-size:14px;
            }
            td{
                border: 1px solid black;
                width: 100%;
                padding: 5px;
                
            }
            th{
                border: 1px solid black;
                text-align: center;
                padding: 5px;
                font-size:16px;
            }
            table{                
                margin:0.5cm;
                border-spacing: 0;
            }
            .value{
                min-width: 150px;
            }
        </style>
        `)
        let opt = []

        options.forEach(option=>{

            if (option.querySelector('input').checked) {
                let opti = {
                    text: option.querySelector('.calculator__calculator__grid__left-side__block__option__text').innerHTML,
                    value: option.querySelector('input').value
                }
                opt.push(opti)
            }
        })
        printWindow.document.write(table({'header' : header(), options:opt, 'program': program, styles:styles()}))
        printWindow.print()
    }

    document.querySelector('.calculator__calculator__grid__right-side__calculation__btn').addEventListener('click', ()=>{
        printTable()
    })



})()