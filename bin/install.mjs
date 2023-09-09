#!/usr/bin/env node
import { promisify } from "util";
import cp from "child_process";
import path from "path";
import fs, { existsSync, mkdirSync } from "fs";
// cli spinners
import ora from "ora";

// convert libs to promises
const exec = promisify(cp.exec);
const rm = promisify(fs.rm);

if (process.argv.length < 3) {
  console.log("Vous devez donner un nom à votre application.");
  console.log("Par exemple :");
  console.log("    npx create-eznode my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);

const git_repo = "https://github.com/SmartDevSource/EZNode.git";

if (fs.existsSync(projectPath)) {
  console.log(`Le dossier ${projectName} existe déjà votre dans répertoire.`);
  process.exit(1);
}
else {
  fs.mkdirSync(projectPath);
}

try {
  const gitSpinner = ora("Téléchargement des fichiers nécessaires..").start();

  await exec(`git clone --depth 1 --quiet ${git_repo} "${projectPath}"`);
  gitSpinner.succeed();

  const cleanSpinner = ora("Suppression des fichiers obsolètes..").start();

  const rmGit = rm(path.join(projectPath, ".git"), { recursive: true, force: true });

  const rmBin = rm(path.join(projectPath, "bin"), { recursive: true, force: true });
  await Promise.all([rmGit, rmBin]);

  process.chdir(projectPath);

  await exec("npm uninstall ora cli-spinners");
  cleanSpinner.succeed();

  const npmSpinner = ora("Installation des dépendances..").start();
  await exec("npm install");
  npmSpinner.succeed();

  console.log("L'installation s'est déroulée avec succès !");
  console.log("Veuillez accéder au répertoire de votre projet comme suit : ");
  console.log(`    cd ${projectName}`);
  console.log(`    node server`);

} catch (error) {

  fs.rmSync(projectPath, { recursive: true, force: true });
  console.log(error);
}