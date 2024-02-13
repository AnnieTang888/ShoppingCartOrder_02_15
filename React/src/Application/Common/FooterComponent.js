import React from "react";

let Footer = (props) => {
    //props.name = "Danny" // this is not allowed as props a immutable

    return ( //JSX - Javascript Like XML structure (not html, not xml - but js)
            <div className="footer">
                © Copyright 2023 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
            </div>
         //<>
         //    <h4>footer component</h4>
         //    {props.children[0]}
         //    {props.children[1]}
         //</>
    )
}


export default Footer;
