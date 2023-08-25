import config from "@/config/siteconfig.json";

export function readConfig() {
    return {
        siteName: config.siteName,
        siteURL: config.siteURL,
        siteDescription: config.siteDescription,
        authorName: config.authorName,
        authorBio: config.authorBio,
        authorEmail: config.authorEmail,
        year: config.year,
    }
}