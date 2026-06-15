import fs from "fs";
import path from "path";

export function readConfig() {
  const fileLocation = path.join(path.resolve("config/"), "siteconfig.json");
  const rawFile = fs.readFileSync(fileLocation, "utf-8");
  const config = JSON.parse(rawFile);
  return config;
}

export function readFooterLinks() {
  const fileLocation = path.join(path.resolve("config/"), "header.json");
  const rawFile = fs.readFileSync(fileLocation, "utf-8");
  const links = JSON.parse(rawFile);
  return links.footer;
}

export function readHeaderLinks() {
  const fileLocation = path.join(path.resolve("config/"), "header.json");
  const rawFile = fs.readFileSync(fileLocation, "utf-8");
  const links = JSON.parse(rawFile);
  return links.header;
}
