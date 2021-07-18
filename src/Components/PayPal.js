import React from "react";

function PayPal () {
    return(

        <form action="https://www.paypal.com/donate" method="post" target="_top"
            style={{
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
        <input type="hidden" name="hosted_button_id" value="HSZ5QXHBXLRKE" />
        <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
        </form>

    );
}

export default PayPal;