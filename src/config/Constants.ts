// Valores lidos do ambiente (arquivo .env, carregado pelo dotenv). Veja .env.example.
export const config = {
	API_URL: process.env.API_URL ?? 'http://localhost:5000',
	MONGO_CONNECTION: process.env.MONGO_CONNECTION ?? '',
}
