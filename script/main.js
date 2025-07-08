
const clicked =() => {
   console.log("callAPI")
    const paragraph = document.getElementById("text-input");
    const text = paragraph.value;
    const output = document.getElementById("text-output");
    const a = "h";
    const b = "f";
    const c = "_BTMDuuAqliBe";
    const d = "bIVMaxHuuKw";
    const e = "FQwOYTntUEp";
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct",
            {
                headers: {
                    Authorization: "Bearer " + a + b + c + d + e ,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    query({inputs: text}).then((response) => {
        output.innerHTML = response[0]?.summary_text
    });
}; 
