
const ScrollingBar = (props) => {
    let foo=props.props
    return (  
        <div className="Scrollingbar">
            
                {
                    foo.map((singleCloth,i)=>{
                        const base64String=btoa(
                            String.fromCharCode(...new Uint8Array((singleCloth.img.data.data)))
                        )
                     return  <div 
                       className="ScrollbarImageBox"
                       key={i}
                       style={{
                        backgroundImage:`url(data:image/png;base64,${base64String}) `,
                    }}
                      
                       >

                             </div>
                //    return   <img src={`data:image/png;base64,${base64String}`} alt="brody"/>
                
  
                    })
                }
            
        </div>

    );
}
 
export default ScrollingBar;