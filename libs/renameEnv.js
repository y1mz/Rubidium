import fs from "fs";

export const renameEnv = () => {
    console.log("Renaming env")
    const envFile = "env";
    
    if (fs.existsSync(envFile)) {
        fs.renameSync(envFile, ".env", (err) => {
            if (err) {
                console.log("There was an error while renaming Env file", err);
            } else {
                console.log("Env file created succesfully");
            }
        });
    } else {
        if (fs.existsSync(".env")) {
            console.log(".env file already exits.")
        } else {
        console.log("env file doesn't exists. Please check the repo");
        }
    }
}