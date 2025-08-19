import React,{ lazy,Suspense} from "react";

const FetchingData = lazy(()=>import("./FetchingData"))

function Lazy(){
    return(
        <>
        <p>Lazy loading concept</p>
        <Suspense fallback={<h1>Loading components</h1>}>
            <FetchingData/>
        </Suspense>
        </>
    )
}
export default Lazy;
