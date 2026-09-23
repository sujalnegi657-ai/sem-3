const fs = require("fs").promises;

async function writeFile(){
    
    try{
        await fs.writeFile('promises.txt','hello students! \nustaad baba');
        console.log('file created and data written successfully!');
    }catch(error){
        console.log("error : ",error);
    }
}
writeFile();

async function readFile(){
    try{
        const data = await fs.readFile('promises.txt','utf8');
        console.log('file content');
        console.log(data);
    }catch(error){
        console.log("error : ",error);
    }
}
readFile();

async function appendFile(){
    try{
        await fs.appendFile('promises.txt','\njai baba ki');
        console.log('data appended successfully!');
    }catch(error){
        console.log("error : ",error);
    }
}
appendFile();

async function renameFile(){
    try{
        await fs.rename('promises.txt','promises1.txt');
        console.log('file renamed successfully!');
    }catch(error){
        console.log("error : ",error);
    }
}
renameFile();
