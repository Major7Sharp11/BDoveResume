import React from 'react';


function Hello() {
  return (
    <section id="main">
      <p>
        <strong>This is bold.</strong><br />
        <em>This is italics...</em><br />
        This is normal text.
      </p>
      
      <Footer footerMsg="bottom of the page" />
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <hr />
      {props.footerMsg}
    </footer>
  );
}


export default Hello;