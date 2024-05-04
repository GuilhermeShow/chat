const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDUbY_R-xgBwVIna6crB3X-kX4PTfkSJfw");


    // async function run() {
    //     // For text-only input, use the gemini-pro model
    //     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      
    //     const prompt = "Fala do corinthians"
      
    //     const result = await model.generateContent(prompt);
    //     const response = await result.response;
    //     const text = response.text();
    //     console.log("\n"+text);
    //   }
      
    //   run();
      


class InteligenciaArtificial {

    static async chat(req, res) {

      const { pesquisa } = req.body;

      try {
        
  
        const model = genAI.getGenerativeModel({ model: "gemini-pro"}, { model: "embedding-001"});
        const prompt = pesquisa;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.status(201).json({
            "pesquisa": pesquisa,
            "response": text
        })
    

      } catch (error) {
        res.status(401).json({
            "err" : "Nao foi possivel realizar a requisição"
        })
      }

    }

}

module.exports = InteligenciaArtificial