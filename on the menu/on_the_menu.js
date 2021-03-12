
function myfunc() {

    let a = document.getElementById( 'meal-list' ).value;
    
    if ( a === 'meal0' ) {

        let x = document.getElementsByClassName( 'items');

        for ( let i = 0; i < x.length; i++ ) {
            x[i].style.display = 'inline-block'
        }
    }

    else {

        let x = document.getElementsByClassName( 'items');

        for ( let i = 0; i < x.length; i++ ) {
            x[i].style.display = 'none'
        }    

        if ( a === 'meal1') {

            let b = document.getElementsByClassName( 'craftedClassics');

            for ( let i = 0; i < b.length; i++ ) {
                b[i].style.display = 'inline-block'
            }
            
        }


        else if ( a === 'meal2' ) {


            let b = document.getElementsByClassName( 'signatureCollection');

            for ( let i = 0; i < b.length; i++ ) {
                b[i].style.display = 'inline-block'
            }

            
        }


        else if ( a === 'meal3' ) {


            let b = document.getElementsByClassName( 'freshlyFit');

            for ( let i = 0; i < b.length; i++ ) {
                b[i].style.display = 'inline-block'
            }

            
        }
        else if ( a === 'meal4' ) {


            let b = document.getElementsByClassName( 'takeoutTwists');

            for ( let i = 0; i < b.length; i++ ) {
                b[i].style.display = 'inline-block'
            }

            
        }

    }
    

}

