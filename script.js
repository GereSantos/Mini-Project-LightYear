let distanceYearLight = parseInt(window.prompt('Insira a distancia em anos luz '))
let converterUnit = window.prompt(" Deseja converter para: " + "\n"
    + '1 - Parsec \n'
    + '2 - Unidade Astronômica(AU) \n'
    + '3 - Quilômetros(km)')


switch (converterUnit) {
    case '1':
        let result_1 = distanceYearLight * 0.306601
        alert('Distância em Anos-Luz: ' + distanceYearLight + '\n'
            + 'Conversão desejada: Parsec' + '\n'
            + 'Distância Convertida: ' + result_1)
        break;

    case '2':
        let result_2 = distanceYearLight * 63241.1
        alert('Distância em Anos-Luz: ' + distanceYearLight + '\n'
            + 'Conversão desejada: Unidade Astronômica(AU)' + '\n'
            + 'Distância Convertida: ' + result_2)
        break;

    case '3':
        let result_3 = distanceYearLight * 9.5 * Math.pow(10, 12)
        alert('Distância em Anos-Luz: ' + distanceYearLight + '\n'
            + 'Conversão desejada: Quilômetros' + '\n'
            + 'Distância Convertida: ' + result_3)
        break;

    default:
        alert('Distância em Anos - Luz' + distanceYearLight + '\n'
            + 'Fora do Escopo!')
        break;
}