import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../../paginas/detalhes/Detalhes";
import Inicial from "../../paginas/inicial/Inicial";



export function RouterDom(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial/>}/>
                <Route path="/detalhe" element={<Detalhes/>}/>
                <Route path="*" element={<div>Erro 404 - página não encontrada</div>}/>
            </Routes>
        </BrowserRouter>
    )
}