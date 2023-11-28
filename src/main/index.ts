import dotenv from 'dotenv';
import { createHTTPServer } from './presentation/http/server';

async function bootstrap(){

    ///carrega variáveis de ambiente do arquivo .env
    dotenv.config();

    //Atrivbuir as variáveis de ambiente à constantes locais
    const api_name = process.env.API_NAME;
    const host_name = process.env.HOST_NAME;
    const port = process.env.PORT;

    console.log(`[${api_name}] 🚀 Inicializando a API...`);

    const httpServer = await createHTTPServer();

    httpServer.listen( { port: port}, async() =>{

        console.log(`[${api_name}] ✅ Servidor http pronto e ouvindo em http://${host_name}:${port}`)
    });

}

bootstrap()
    .catch((error) => {
        console.error(error);

    });