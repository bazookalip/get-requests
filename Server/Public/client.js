
$(document).ready(onReady);

function onReady(){
    console.log('jQuery has been loaded');

    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).then(function(response) {
        console.log('the quotes get request worked!');
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            $('.tableBody').append(
                `<tr>
                <td>${response[i].quote}</td>
                <td>${response[i].author}</td>
                </tr>
        `);
            
        }
        
    });

    $('.tableBody').append(
        `<tr>
        <td>'Do or do not there is no try.'</td>
        <td>Yoda</td>
        </tr>
        `);
    
}