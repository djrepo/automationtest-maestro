import execa from "execa";

export const sendToMaestroLocalhost = async ({
                                             apiKey,
                                             appPath
                                         }: {
    apiKey?: string;
    appPath?: string;
}) => {
    console.log("Running Maestro command on localhost with", {
        apiKey,
        appPath
    });
    const args = ["localhost"];
    if (apiKey) args.push("--apiKey", apiKey);
    if (appPath) args.push("--appPath", appPath);
    await execa("./run_android_e2e.sh", args);
};