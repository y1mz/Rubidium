import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";

const getAboutPageData = () => {
    const folder = "posts/pages/";
    const file = `${folder}about.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
}

function AboutPage() {
    const content = getAboutPageData();
    return (
        <div>
            <div className="flex place-content-center p-10 w-full text-3xl">
                <p>About.</p>
            </div>
            <div>
                <Markdown>{content}</Markdown>
            </div>
        </div>
    )
}
export default AboutPage;