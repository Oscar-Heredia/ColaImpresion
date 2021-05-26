
function area(base,altura)
{
    return base*altura/2;
}

console.log(area(5,7));
const chalk = require('chalk'); //Inyección Dependecia

console.log(chalk.red('Hello world!'));

class Trabajo{
    constructor (ciclos)
    {
        this.ciclos=ciclos;
        this.next=null;
    } 
}

class FIFO{
    constructor()
    {
         this.inicio=null;
    }

    agregar(nuevo)
    {
        if(this.inicio==null)
        {
            this.inicio=nuevo;
        }
        else
        {
            let t=this.inicio;
            while(t.next!=null)
                t=t.next;
            t.next=nuevo;    
        }
    }

    extraer()
    {
        let primero=this.inicio;
        if(this.inicio!=null)
        {
            this.inicio=this.inicio.next;
            primero.next=null;
        }
            
    }

    ver()
    {
        return this.inicio;
    }
    
}

let cola = new FIFO();

for(let i=1;i<=300;i++)
{
    let np = Math.random()*100+1;
    let msg = "Ciclo es: "+i;
    if(np <= 39)
    {
        let nuevo = new Trabajo(Math.floor(Math.random()*11+4));
        cola.agregar(nuevo);
        msg+=" Se creó procceso "+ nuevo.ciclos;
    }

    if(cola.ver()!=null)
    {
        cola.ver().ciclos--;
        msg += " Atendiendo "+cola.ver().ciclos;
        if(cola.ver().ciclos==0)
        {
            cola.extraer();
            msg += " Salió un procceso";
        }
    }
    console.log(msg);
}
