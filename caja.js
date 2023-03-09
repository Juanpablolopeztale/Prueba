import { data_comandos } from "./data.js";

function  cajas (agregrar){

let  item= `
    <div class="caja caja1">
        
            <p>
                ${data_comandos[agregrar].Comando}
            </p>
        
    </div>`;

    return item;
}
