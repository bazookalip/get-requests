
$(document).ready(onReady);

function onReady(){
    console.log('jQuery has been loaded');

    $('.tableBody').append(
        `<tr>
        <td>'Do or do not there is no try.'</td>
        <td>Yoda</td>
        </tr>
        `);
    
}